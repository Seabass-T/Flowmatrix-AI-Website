import { useEffect } from 'react';

interface TallyFormProps {
  formId: string;
  className?: string;
}

export const TallyForm = ({ formId, className }: TallyFormProps) => {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <iframe
      data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
      loading="lazy"
      width="100%"
      height="500"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      title="Contact Form"
      className={className}
      style={{ minHeight: '500px' }}
    />
  );
};
