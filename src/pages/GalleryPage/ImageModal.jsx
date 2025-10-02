import React, { useEffect } from 'react';
import SIcons from '@/components/SIcons';

const ImageModal = ({
  isOpen,
  imageSrc,
  caption,       
  onClose,
  onPrev,         
  onNext          
}) => {

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-[70] text-white hover:text-red-500 transition-colors duration-200 rounded-full p-3 focus:outline-none"
          aria-label="Close image modal"
        >
          <SIcons name="x" className="!w-8 !h-8 cursor-pointer hover:text-secondary" />
        </button>

        {/* Prev */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-5 top-1/2 -translate-y-1/2 z-[70] bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
            aria-label="Previous image"
          >
            <SIcons name="chevron-left" className="!w-8 !h-8" />
          </button>
        )}

        {/* Next */}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-5 top-1/2 -translate-y-1/2 z-[70] bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
            aria-label="Next image"
          >
            <SIcons name="chevron-right" className="!w-8 !h-8" />
          </button>
        )}

        {/* Img */}
        <div className="relative max-w-6xl max-h-[85vh] w-auto h-auto flex items-center justify-center">
          <img
            src={imageSrc}
            alt={caption || 'Full view'}
            className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>

        {/* Capt */}
        {caption && (
          <div className="mt-4 text-white text-lg font-semibold text-center bg-black/50 px-4 py-2 rounded">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
