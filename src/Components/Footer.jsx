import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

const Footer = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <footer className={state.theme}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
        <p>Powered by</p>
        <img 
          src="/DH.png" 
          alt='DH-logo'
          style={{ height: '40px', width: 'auto' }}
        />
      </div>
      <div className="social-icons" style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1rem',
        marginTop: '1rem'
      }}>
        <a href="#"><img src="/ico-facebook.png" alt="facebook" style={{ height: '24px' }}/></a>
        <a href="#"><img src="/ico-instagram.png" alt="instagram" style={{ height: '24px' }}/></a>
        <a href="#"><img src="/ico-whatsapp.png" alt="whatsapp" style={{ height: '24px' }}/></a>
        <a href="#"><img src="/ico-tiktok.png" alt="tiktok" style={{ height: '24px' }}/></a>
      </div>
    </footer>
  );
};

export default Footer;