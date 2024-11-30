import { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../Components/utils/global.context';
import styles from './Contact.module.css';

const Contact = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={`${styles.container} ${state.theme}`}>
      <h2 className={styles.title}>¿Quieres saber más?</h2>
      <p className={styles.subtitle}>
        Envíanos tus consultas y nos pondremos en contacto contigo
      </p>
      <Form />
    </div>
  );
};

export default Contact;