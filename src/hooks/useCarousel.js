// hooks/useCarousel.js
import { useState, useEffect } from 'react';

export const useCarousel = (totalItems, autoPlayInterval = 5000) => {
  const [currentProject, setCurrentProject] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    if (totalItems <= 1) return; // Don't auto-play if there's only one item or no items

    const interval = setInterval(() => {
      setCurrentProject(prev => (prev + 1) % totalItems);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [totalItems, autoPlayInterval]);

  // Navigation functions
  const nextProject = () => {
    setCurrentProject(prev => (prev + 1) % totalItems);
  };

  const previousProject = () => {
    setCurrentProject(prev => (prev - 1 + totalItems) % totalItems);
  };

  const goToProject = (index) => {
    if (index >= 0 && index < totalItems) {
      setCurrentProject(index);
    }
  };

  return {
    currentProject,
    nextProject,
    previousProject,
    goToProject
  };
};