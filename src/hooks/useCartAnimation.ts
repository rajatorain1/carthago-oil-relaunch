import { useCallback } from 'react';

interface CartAnimationProps {
  imageUrl: string;
  startElement: HTMLElement;
}

export const useCartAnimation = () => {
  const animateToCart = useCallback(({ imageUrl, startElement }: CartAnimationProps) => {
    // Get cart button position
    const cartButton = document.querySelector('[data-cart-button]');
    if (!cartButton) return;

    const startRect = startElement.getBoundingClientRect();
    const endRect = cartButton.getBoundingClientRect();

    // Create floating image element
    const floatingImg = document.createElement('div');
    floatingImg.style.position = 'fixed';
    floatingImg.style.left = `${startRect.left}px`;
    floatingImg.style.top = `${startRect.top}px`;
    floatingImg.style.width = '80px';
    floatingImg.style.height = '80px';
    floatingImg.style.zIndex = '9999';
    floatingImg.style.pointerEvents = 'none';
    floatingImg.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    floatingImg.style.borderRadius = '8px';
    floatingImg.style.overflow = 'hidden';
    floatingImg.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    floatingImg.appendChild(img);

    document.body.appendChild(floatingImg);

    // Trigger animation on next frame
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        floatingImg.style.left = `${endRect.left + endRect.width / 2 - 40}px`;
        floatingImg.style.top = `${endRect.top + endRect.height / 2 - 40}px`;
        floatingImg.style.transform = 'scale(0.3)';
        floatingImg.style.opacity = '0';
      });
    });

    // Remove element after animation
    setTimeout(() => {
      document.body.removeChild(floatingImg);
    }, 800);
  }, []);

  return { animateToCart };
};
