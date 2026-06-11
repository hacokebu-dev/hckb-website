import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-primary py-8">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo variant="red" />
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-base font-semibold text-background/80">
            <span>{t('footer.copyright')}</span>
            <span className="hidden md:inline">|</span>
            <a 
              href={`mailto:${t('footer.email')}`}
              className="hover:text-background transition-colors"
            >
              {t('footer.email')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
