import React, { useState } from 'react';
import ImageSlider from './slider';
import CategoryFilter from './categories';
import ImageGrid from './imagegrid';
import StatsSection from './stats';
import ImageModal from './ImageModal';
import GalleryHead from './galleryhead';
import { galleryImages, categories } from './galleryData';

const GalleryPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openModal = (image, index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const isModalOpen = selectedImageIndex !== null;
  const currentImage =
    selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

  return (
    <div className="min-h-screen bg-bg">
      <GalleryHead />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <ImageSlider images={galleryImages} />
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <ImageGrid
          images={filteredImages}
          onImageClick={(image, index) => openModal(image, index)}
          selectedCategory={selectedCategory}
        />

        <StatsSection
          totalImages={galleryImages.length}
          totalCategories={categories.length - 1}
        />
      </div>

      {isModalOpen && currentImage && (
        <ImageModal
          isOpen={isModalOpen}
          imageSrc={currentImage.src}
          caption={currentImage.title}
          onClose={closeModal}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default GalleryPage;