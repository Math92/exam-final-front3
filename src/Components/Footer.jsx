import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

const Footer = () => {
  const { theme } = useContext(ContextGlobal);

  return (
    <footer className={theme}>
      <p>Powered by</p>
      <img src="/images/DH.png" alt='DH-logo' />
      <div className="social-icons">
        <img src="/images/ico-facebook.png" alt="facebook" />
        <img src="/images/ico-instagram.png" alt="instagram" />
        <img src="/images/ico-whatsapp.png" alt="whatsapp" />
        <img src="/images/ico-tiktok.png" alt="tiktok" />
      </div>
    </footer>
  );
};

export default Footer;