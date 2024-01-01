import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>anwetico</div>
      <div className={styles.text}>Anwetico creative thoughts agency © All rights reserved.</div>
    </div>
  );
};

export default Footer;
