import headerStyles from "./header-styles.module.css";
import Image from "next/image";
const Header = () => {
  return (
    <header className={headerStyles.layout}>
    <div className={headerStyles.container}>
      <Image
      
        width={65}
        height={60}
        src="/images/gym-manager.png"
        alt="gym manager logo"
        className={headerStyles.logo}
      />
      <div className={headerStyles.userSection}>
        <div className={headerStyles.userInfo}>
          <Image
            width={46}
            height={46}
            src={"/images/avatar-image.jpeg"}
            alt="user image"
            className={headerStyles.userImage}
          />
          <div className={headerStyles.userDetails}>
            <p className={headerStyles.name}>John Doe</p>
            <p className={headerStyles.role}>Administrador (Rol)</p>
          </div>
        </div>
        <button className={headerStyles.button}>
          <p className={headerStyles.textButton}>Logout</p>
        </button>
      </div>
    </div>
  </header>
  );
};
export default Header;
