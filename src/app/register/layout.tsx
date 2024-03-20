import registerStyles from "./register-styles.module.css";

export default function RegisterLayout({
    children
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className={registerStyles.layout}>
        <video autoPlay loop muted className={registerStyles.video}>
          <source src="/images/video.mp4" type="video/mp4" />        
        </video>
        {children}
      </div>
    );
  }
  