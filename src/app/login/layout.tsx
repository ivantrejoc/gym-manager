import loginStyles from "./login-styles.module.css";

export default function LoginLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={loginStyles.layout}>
      <video autoPlay loop muted className={loginStyles.video}>
        <source src="/images/video.mp4" type="video/mp4" />        
      </video>
      {children}
    </div>
  );
}
