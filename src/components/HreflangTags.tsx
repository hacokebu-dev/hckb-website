import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://hacokebu.com';

const normalizePath = (path: string) => {
  if (!path || path === '/') return '/';
  return path.endsWith('/') ? path.slice(0, -1) : path;
};

const HreflangTags = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isKorean = pathname.startsWith('/ko');

  // Compute the alternate language path
  let enPath: string;
  let koPath: string;

  if (isKorean) {
    koPath = pathname;
    enPath = pathname.replace(/^\/ko/, '') || '/';
  } else {
    enPath = pathname;
    koPath = pathname === '/' ? '/ko' : `/ko${pathname}`;
  }

  const enUrl = `${SITE_URL}${normalizePath(enPath)}`;
  const koUrl = `${SITE_URL}${normalizePath(koPath)}`;

  return (
    <Helmet>
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="ko" href={koUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
      <html lang={isKorean ? 'ko' : 'en'} />
    </Helmet>
  );
};

export default HreflangTags;
