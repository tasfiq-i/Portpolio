import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

function setMetaContent(selector: string, content: string) {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute('content', content);
  }
}

export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
  }, [title, description]);

  return null;
}
