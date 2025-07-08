import BackgroundRemover from "@/components/BackgroundRemover";
import Navigation from "@/components/Navigation";

const BackgroundRemoverPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <BackgroundRemover />
      </div>
    </div>
  );
};

export default BackgroundRemoverPage;