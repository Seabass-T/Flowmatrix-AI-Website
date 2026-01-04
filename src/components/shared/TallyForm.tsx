import { useEffect } from 'react';

interface TallyFormProps {
  formId: string;
  className?: string;
}

export const TallyForm = ({ formId, className = '' }: TallyFormProps) => {
  useEffect(() => {
    // Load Tally embed script if not already loaded
    if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Clean up on unmount
    return () => {
      const script = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (script && document.body.contains(script)) {
        // Only remove if this is the last TallyForm instance
        const tallyIframes = document.querySelectorAll('iframe[data-tally-src]');
        if (tallyIframes.length <= 1) {
          document.body.removeChild(script);
        }
      }
    };
  }, []);

  return (
    <div className={`tally-form-container ${className}`}>
      <iframe
        data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&dynamicHeight=1`}
        loading="lazy"
        width="100%"
        height="600"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Contact Form"
        className="w-full rounded-lg"
        style={{
          border: 'none',
          minHeight: '600px',
          backgroundColor: 'transparent'
        }}
      />
    </div>
  );
};
