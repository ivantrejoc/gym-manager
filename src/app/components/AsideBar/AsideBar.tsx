"use client";
import asideBarStyles from "./asideBar-styles.module.css";
import Image from "next/image";
import { useState } from "react";

const AsideBar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () =>{
    setIsOpen(!isOpen);
  }

 

  return (
    <aside className={asideBarStyles.layout}>
      <div className={asideBarStyles.container}>
        <div className={asideBarStyles.content}>          
           {/* clientes */}
           <div
            className={`${asideBarStyles.dropdown} ${isOpen ? asideBarStyles.isOpen : ''}`}
          >
            <button className={asideBarStyles.dropwdownBtn}
            onClick={toggleDropdown}>            
              <div className={asideBarStyles.buttonElements}>
                <Image width={10} height={10} alt="icon" src={""} />
                <p className={asideBarStyles.buttonTitle}> Clientes</p>
              </div>
            </button>
            <div className={asideBarStyles.submenu}>
              <a href="#">Crear clientes</a>
              <a href="#">Ver clientes</a>
            </div>
          </div>
          
         
          {/* ventas */}
          <div
            className={`${asideBarStyles.dropdown} ${isOpen ? asideBarStyles.isOpen : ''}`}
          >
            <button className={asideBarStyles.dropwdownBtn}
            onClick={toggleDropdown}>
              <div className={asideBarStyles.buttonElements}>
                <Image width={10} height={10} alt="icon" src={""} />
                <p className={asideBarStyles.buttonTitle}> Ventas</p>
              </div>
            </button>
            <div className={asideBarStyles.submenu}>
              <a href="#">Nueva venta</a>
              <a href="#">Dashboard</a>
            </div>
          </div>
{/* Instructores */}
<div
            className={`${asideBarStyles.dropdown} ${isOpen ? asideBarStyles.isOpen : ''}`}
          >
            <button className={asideBarStyles.dropwdownBtn}
            onClick={toggleDropdown}>
              <div className={asideBarStyles.buttonElements}>
                <Image width={10} height={10} alt="icon" src={""} />
                <p className={asideBarStyles.buttonTitle}> Instructores</p>
              </div>
            </button>
            <div className={asideBarStyles.submenu}>
              <a href="#">Crear instructor</a>
              <a href="#">Ver instructores</a>
            </div>
          </div>
{/* Clases */}
<div
            className={`${asideBarStyles.dropdown} ${isOpen ? asideBarStyles.isOpen : ''}`}
          >
            <button className={asideBarStyles.dropwdownBtn}
            onClick={toggleDropdown}>
              <div className={asideBarStyles.buttonElements}>
                <Image width={10} height={10} alt="icon" src={""} />
                <p className={asideBarStyles.buttonTitle}> Clases</p>
              </div>
            </button>
            <div className={asideBarStyles.submenu}>
              <a href="#">Crear clase</a>
              <a href="#">Ver clases</a>
            </div>
          </div>
{/* Planes */}
<div
            className={`${asideBarStyles.dropdown} ${isOpen ? asideBarStyles.isOpen : ''}`}
          >
            <button className={asideBarStyles.dropwdownBtn}
            onClick={toggleDropdown}>
              <div className={asideBarStyles.buttonElements}>
                <Image width={10} height={10} alt="icon" src={""} />
                <p className={asideBarStyles.buttonTitle}> Planes</p>
              </div>
            </button>
            <div className={asideBarStyles.submenu}>
              <a href="#">Crear plan</a>
              <a href="#">Ver planes</a>
            </div>
          </div>
{/* Calendario */}
<div
            className={`${asideBarStyles.dropdown} ${isOpen ? asideBarStyles.isOpen : ''}`}
          >
            <button className={asideBarStyles.dropwdownBtn}
            onClick={toggleDropdown}>
              <div className={asideBarStyles.buttonElements}>
                <Image width={10} height={10} alt="icon" src={""} />
                <p className={asideBarStyles.buttonTitle}> Calendario</p>
              </div>
            </button>
            <div className={asideBarStyles.submenu}>
              <a href="#">Crear evento</a>
              <a href="#">Ver eventos</a>
              <a href="#">Ver horarios</a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default AsideBar;
