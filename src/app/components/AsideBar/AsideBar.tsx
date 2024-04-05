"use client";
import asideBarStyles from "./asideBar-styles.module.css";
import Image from "next/image";
import { useState } from "react";

const AsideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={asideBarStyles.layout}>
      <div className={asideBarStyles.container}>
        <div className={asideBarStyles.content}>
          {/* clientes */}
          <div
            className={`${asideBarStyles.dropdown} ${
              isOpen ? asideBarStyles.isOpen : ""
            }`}
          >
            <button
              className={asideBarStyles.dropwdownBtn}
              onClick={toggleDropdown}
            >
              <div className={asideBarStyles.buttonElements}>
                <div className={asideBarStyles.leftContent}>
                  <Image width={15} height={15} alt="icon" src={"/aside-icons/users-group.png"} className={asideBarStyles.icons} />
                  <p className={asideBarStyles.buttonTitle}> Clientes</p>
                </div>

                <Image width={15} height={14} alt="arrow" src={"/aside-icons/chevron-up.png"} className={asideBarStyles.icons} />
              </div>
            </button>
            <div className={asideBarStyles.submenu}>
              <a href="#">Crear clientes</a>
              <a href="#">Ver clientes</a>
            </div>
          </div>

          {/* ventas */}
          <div
            className={`${asideBarStyles.dropdown} ${
              isOpen ? asideBarStyles.isOpen : ""
            }`}
          >
            <button
              className={asideBarStyles.dropwdownBtn}
              onClick={toggleDropdown}
            >
               <div className={asideBarStyles.buttonElements}>
                <div className={asideBarStyles.leftContent}>
                  <Image width={15} height={15} alt="icon" src={"/aside-icons/cart.png"} className={asideBarStyles.icons} />
                  <p className={asideBarStyles.buttonTitle}> Ventas</p>
                </div>

                <Image width={15} height={14} alt="arrow" src={"/aside-icons/chevron-up.png"} className={asideBarStyles.icons} />
              </div>
            </button>
            <div className={asideBarStyles.submenu}>
              <a href="#">Nueva venta</a>
              <a href="#">Dashboard</a>
            </div>
          </div>
          {/* Instructores */}
          <div
            className={`${asideBarStyles.dropdown} ${
              isOpen ? asideBarStyles.isOpen : ""
            }`}
          >
            <button
              className={asideBarStyles.dropwdownBtn}
              onClick={toggleDropdown}
            >
               <div className={asideBarStyles.buttonElements}>
                <div className={asideBarStyles.leftContent}>
                  <Image width={15} height={15} alt="icon" src={"/aside-icons/edit-user.png"} className={asideBarStyles.icons} />
                  <p className={asideBarStyles.buttonTitle}> Instructores</p>
                </div>

                <Image width={15} height={14} alt="arrow" src={"/aside-icons/chevron-up.png"} className={asideBarStyles.icons} />
              </div>
            </button>
            <div className={asideBarStyles.submenu}>
              <a href="#">Crear instructor</a>
              <a href="#">Ver instructores</a>
            </div>
          </div>
          {/* Clases */}
          <div
            className={`${asideBarStyles.dropdown} ${
              isOpen ? asideBarStyles.isOpen : ""
            }`}
          >
            <button
              className={asideBarStyles.dropwdownBtn}
              onClick={toggleDropdown}
            >
               <div className={asideBarStyles.buttonElements}>
                <div className={asideBarStyles.leftContent}>
                  <Image width={15} height={15} alt="icon" src={"/aside-icons/open-book.png"} className={asideBarStyles.icons} />
                  <p className={asideBarStyles.buttonTitle}> Clases</p>
                </div>

                <Image width={15} height={14} alt="arrow" src={"/aside-icons/chevron-up.png"} className={asideBarStyles.icons} />
              </div>
            </button>
            <div className={asideBarStyles.submenu}>
              <a href="#">Crear clase</a>
              <a href="#">Ver clases</a>
            </div>
          </div>
          {/* Planes */}
          <div
            className={`${asideBarStyles.dropdown} ${
              isOpen ? asideBarStyles.isOpen : ""
            }`}
          >
            <button
              className={asideBarStyles.dropwdownBtn}
              onClick={toggleDropdown}
            >
               <div className={asideBarStyles.buttonElements}>
                <div className={asideBarStyles.leftContent}>
                  <Image width={15} height={15} alt="icon" src={"/aside-icons/clipboard-list.png"} className={asideBarStyles.icons} />
                  <p className={asideBarStyles.buttonTitle}> Planes</p>
                </div>

                <Image width={15} height={14} alt="arrow" src={"/aside-icons/chevron-up.png"} className={asideBarStyles.icons} />
              </div>
            </button>
            <div className={asideBarStyles.submenu}>
              <a href="#">Crear plan</a>
              <a href="#">Ver planes</a>
            </div>
          </div>
          {/* Calendario */}
          <div
            className={`${asideBarStyles.dropdown} ${
              isOpen ? asideBarStyles.isOpen : ""
            }`}
          >
            <button
              className={asideBarStyles.dropwdownBtn}
              onClick={toggleDropdown}
            >
               <div className={asideBarStyles.buttonElements}>
                <div className={asideBarStyles.leftContent}>
                  <Image width={15} height={15} alt="icon" src={"/aside-icons/calendar-month.png"} className={asideBarStyles.icons} />
                  <p className={asideBarStyles.buttonTitle}> Calendario</p>
                </div>

                <Image width={15} height={14} alt="arrow" src={"/aside-icons/chevron-up.png"} className={asideBarStyles.icons} />
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
