import React, { useState, useEffect } from 'react';

function ImageCarousel() {

  // Define the array of image URLs with placeholder images
  const images = [    'https://via.placeholder.com/150',    'https://via.placeholder.com/250',    'https://via.placeholder.com/350',  ];        
  // Use the useState hook to store the index of the current image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use the useState hook to store the URL of the current image
  const [currentImageUrl, setCurrentImageUrl] = useState(images[0]);

  useEffect(() => {
    // Set the interval to switch the images every 5 seconds
    const interval = setInterval(() => {
      // If the current image is the last image, set the current image to the first image
      // Otherwise, set the current image to the next image
      const newImageIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
      setCurrentImageIndex(newImageIndex);
      setCurrentImageUrl(images[newImageIndex]);
    }, 5000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [currentImageIndex, images]);

  // Function to handle when the left arrow button is clicked
  function handlePrevClick() {
    // If the current image is the first image, set the current image to the last image
    // Otherwise, set the current image to the previous image
    const newImageIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newImageIndex);
    setCurrentImageUrl(images[newImageIndex]);
  }

  // Function to handle when the right arrow button is clicked
  function handleNextClick() {
    // If the current image is the last image, set the current image to the first image
    // Otherwise, set the current image to the next image
    const newImageIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newImageIndex);
    setCurrentImageUrl(images[newImageIndex]);
  }

  return (
    <div>
      {/* Display the current image */}
      <img src={currentImageUrl} />

      {/* Left arrow button */}
      <button onClick={handlePrevClick}>{'<'}</button>

      {/* Right arrow button */}
      <button onClick={handleNextClick}>{'>'}</button>
    </div>
  );
}

export default ImageCarousel;
