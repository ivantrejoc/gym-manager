import AsideBar from "../components/AsideBar/AsideBar";
import { Header } from "../components/Header";
import styles from "./clients-styles.module.css"

export default function Clientslayout ({
    children
  }: {
    children: React.ReactNode;
  }) {
  return (
    <main className={styles.layout}>
        <Header />
        <AsideBar />
        {children}
    </main>
  )
}
