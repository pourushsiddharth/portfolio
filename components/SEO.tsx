import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, url }) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to update or create meta tags
    const updateMeta = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update Meta Description
    updateMeta('name', 'description', description);

    // Update Open Graph tags
    updateMeta('property', 'og:title', title);
    updateMeta('property', 'og:description', description);
    if (image) updateMeta('property', 'og:image', image);
    if (url) updateMeta('property', 'og:url', url);

    // Update Twitter tags
    updateMeta('name', 'twitter:title', title);
    updateMeta('name', 'twitter:description', description);
    if (image) updateMeta('name', 'twitter:image', image);

  }, [title, description, image, url]);

  return null;
};

export default SEO;