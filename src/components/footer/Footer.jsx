import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Dana</div>
      <div className={styles.text}>
        Dana creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
