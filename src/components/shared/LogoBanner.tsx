import { Plus } from "lucide-react";

interface Logo {
  id: string;
  name: string;
  imageUrl?: string; // Optional - shows placeholder if not provided
  alt: string;
}

interface LogoBannerProps {
  title?: string;
  logos: Logo[];
  variant: 'static' | 'scrollable';
  showMoreButton?: boolean;
}

const LogoBanner = ({ title, logos, variant, showMoreButton = false }: LogoBannerProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (variant === 'scrollable') {
      const container = e.currentTarget;
      if (e.key === 'ArrowLeft') {
        container.scrollBy({ left: -150, behavior: 'smooth' });
      } else if (e.key === 'ArrowRight') {
        container.scrollBy({ left: 150, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className={`bg-white ${title ? 'py-12 md:py-16' : 'pb-12 md:pb-16'}`}>
      <div className={variant === 'static' ? 'max-w-7xl mx-auto px-6 md:px-8' : 'w-full overflow-hidden'}>
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12 px-6">
            {title}
          </h2>
        )}

        {variant === 'static' ? (
          // Static Grid Layout - Centered for 3 items
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
            {logos.map((logo) => (
              <div key={logo.id} className="flex flex-col items-center">
                <div
                  role="img"
                  aria-label={logo.name}
                  className="w-20 h-20 md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] flex items-center justify-center transition-all duration-300 hover:scale-105"
                >
                  {logo.imageUrl ? (
                    <img
                      src={logo.imageUrl}
                      alt={logo.alt}
                      className="w-full h-full object-contain transition-all duration-300"
                    />
                  ) : (
                    // Placeholder
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-500 text-xs text-center px-2">
                        {logo.name}
                      </span>
                    </div>
                  )}
                </div>
                <p className="mt-3 text-sm md:text-base font-medium text-gray-900 text-center tracking-wide">
                  {logo.name}
                </p>
              </div>
            ))}
          </div>
        ) : (
          // Scrollable Horizontal Layout - Centered
          <div className="relative">
            <div
              role="region"
              aria-label="Technology partners carousel"
              tabIndex={0}
              onKeyDown={handleKeyDown}
              className="overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory px-6 py-2"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              <div className="flex gap-6 md:gap-8 min-w-max justify-center mx-auto">
                {logos.map((logo) => (
                  <div key={logo.id} className="flex flex-col items-center snap-center flex-shrink-0">
                    <div
                      role="img"
                      aria-label={logo.name}
                      className="w-20 h-20 md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] flex items-center justify-center transition-all duration-300 hover:scale-105"
                    >
                      {logo.imageUrl ? (
                        <img
                          src={logo.imageUrl}
                          alt={logo.alt}
                          className="w-full h-full object-contain transition-all duration-300"
                        />
                      ) : (
                        // Placeholder
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-gray-500 text-xs text-center px-2">
                            {logo.name}
                          </span>
                        </div>
                      )}
                    </div>
                    {logo.name && (
                      <p className="mt-3 text-sm font-medium text-gray-900 text-center tracking-wide whitespace-nowrap">
                        {logo.name}
                      </p>
                    )}
                  </div>
                ))}

                {showMoreButton && (
                  <div className="flex flex-col items-center snap-center flex-shrink-0">
                    <div className="w-20 h-20 md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105">
                      <Plus className="w-6 h-6 text-gray-400 mb-1" />
                      <span className="text-xs font-semibold text-gray-400 text-center px-2">
                        Many<br />More
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LogoBanner;
