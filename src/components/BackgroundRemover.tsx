import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { removeBackground, loadImageFromUrl } from "@/utils/backgroundRemoval";
import { Download, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BackgroundRemover = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImages, setProcessedImages] = useState<{ url: string; blob: Blob }[]>([]);
  const { toast } = useToast();

  const logoUrls = [
    "/lovable-uploads/09fdf2f6-6157-42df-8e44-d98575f96494.png",
    "/lovable-uploads/34eac24a-9df2-45e4-b126-124c3db9ccbb.png"
  ];

  const processLogos = async () => {
    setIsProcessing(true);
    const results: { url: string; blob: Blob }[] = [];

    try {
      for (const url of logoUrls) {
        toast({
          title: "Processing...",
          description: `Removing background from ${url.includes('09fdf2f6') ? 'logo icon' : 'logo with text'}`,
        });

        const img = await loadImageFromUrl(url);
        const processedBlob = await removeBackground(img);
        
        results.push({
          url: URL.createObjectURL(processedBlob),
          blob: processedBlob
        });
      }

      setProcessedImages(results);
      toast({
        title: "Success!",
        description: "Background removed from both logo images",
      });
    } catch (error) {
      console.error('Error processing logos:', error);
      toast({
        title: "Error",
        description: "Failed to remove background. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadImage = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Background Remover</CardTitle>
        <CardDescription>
          Remove the background from your FlowMatrix AI logo images using AI
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Original Images</h3>
            <div className="space-y-4">
              {logoUrls.map((url, index) => (
                <div key={url} className="border rounded-lg p-4">
                  <img 
                    src={url} 
                    alt={`Logo ${index + 1}`}
                    className="w-full h-auto max-w-[200px] mx-auto"
                  />
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    {url.includes('09fdf2f6') ? 'Logo Icon' : 'Logo with Text'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Processed Images</h3>
            {processedImages.length > 0 ? (
              <div className="space-y-4">
                {processedImages.map((processed, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <img 
                      src={processed.url} 
                      alt={`Processed Logo ${index + 1}`}
                      className="w-full h-auto max-w-[200px] mx-auto"
                      style={{ backgroundColor: 'repeating-linear-gradient(45deg, #ccc 0, #ccc 10px, #fff 10px, #fff 20px)' }}
                    />
                    <div className="flex justify-center mt-2">
                      <Button
                        size="sm"
                        onClick={() => downloadImage(
                          processed.blob, 
                          `flowmatrix-logo-${index + 1}-no-bg.png`
                        )}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border rounded-lg p-8 text-center text-muted-foreground">
                Processed images will appear here
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <Button 
            onClick={processLogos} 
            disabled={isProcessing}
            size="lg"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              "Remove Backgrounds"
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BackgroundRemover;