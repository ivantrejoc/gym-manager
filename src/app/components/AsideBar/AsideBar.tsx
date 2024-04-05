"use client";
import asideBarStyles from "./asideBar-styles.module.css";
import Image from "next/image";
import { useState } from "react";

const AsideBar = () => {
  const [isOpenClientes, setIsOpenClientes] = useState(false);
  const [isOpenVentas, setIsOpenVentas] = useState(false);
  const [isOpenInstructores, setIsOpenInstructores] = useState(false);
  const [isOpenClases, setIsOpenClases] = useState(false);
  const [isOpenPlanes, setIsOpenPlanes] = useState(false);
  const [isOpenCalendario, setIsOpenCalendario] = useState(false);

  const toggleDropdown = (dropdown: string) => {
    switch (dropdown) {
      case "clientes":
        setIsOpenClientes(!isOpenClientes);
        break;
      case "ventas":
        setIsOpenVentas(!isOpenVentas);
        break;
      case "instructores":
        setIsOpenInstructores(!isOpenInstructores);
        break;
      case "clases":
        setIsOpenClases(!isOpenClases);
        break;
      case "planes":
        setIsOpenPlanes(!isOpenPlanes);
        break;
      case "calendario":
        setIsOpenCalendario(!isOpenCalendario);
        break;
      default:
        break;
    }
  }; 

  return (
    <aside className={asideBarStyles.layout}>
      <div className={asideBarStyles.container}>
        <div className={asideBarStyles.content}>
          {/* clientes */}
          <div
            className={`${asideBarStyles.dropdown} ${
              isOpenClientes ? asideBarStyles.isOpen : ""
            }`}
          >
            <button
              className={asideBarStyles.dropwdownBtn}
              onClick={() => toggleDropdown("clientes")}
            >
              <div className={asideBarStyles.buttonElements}>
                <div className={asideBarStyles.leftContent}>
                  <Image
                    width={15}
                    height={15}
                    alt="icon"
                    src={"/aside-icons/users-group.png"}
                    className={asideBarStyles.icons}
                  />
                  <p className={asideBarStyles.buttonTitle}> Clientes</p>
                </div>

                <Image
                  width={15}
                  height={14}
                  alt="arrow"
                  src={"/aside-icons/chevron-up.png"}
                  className={asideBarStyles.icons}
                />
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
              isOpenVentas ? asideBarStyles.isOpen : ""
            }`}
          >
            <button
              className={asideBarStyles.dropwdownBtn}
              onClick={() => toggleDropdown("ventas")}
            >
              <div className={asideBarStyles.buttonElements}>
                <div className={asideBarStyles.leftContent}>
                  <Image
                    width={15}
                    height={15}
                    alt="icon"
                    src={"/aside-icons/cart.png"}
                    className={asideBarStyles.icons}
                  />
                  <p className={asideBarStyles.buttonTitle}> Ventas</p>
                </div>

                <Image
                  width={15}
                  height={14}
                  alt="arrow"
                  src={"/aside-icons/chevron-up.png"}
                  className={asideBarStyles.icons}
                />
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
              isOpenInstructores ? asideBarStyles.isOpen : ""
            }`}
          >
            <button
              className={asideBarStyles.dropwdownBtn}
              onClick={() => toggleDropdown("instructores")}
            >
              <div className={asideBarStyles.buttonElements}>
                <div className={asideBarStyles.leftContent}>
                  <Image
                    width={15}
                    height={15}
                    alt="icon"
                    src={"/aside-icons/edit-user.png"}
                    className={asideBarStyles.icons}
                  />
                  <p className={asideBarStyles.buttonTitle}> Instructores</p>
                </div>

                <Image
                  width={15}
                  height={14}
                  alt="arrow"
                  src={"/aside-icons/chevron-up.png"}
                  className={asideBarStyles.icons}
                />
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
              isOpenClases ? asideBarStyles.isOpen : ""
            }`}
          >
            <button
              className={asideBarStyles.dropwdownBtn}
              onClick={() => toggleDropdown("clases")}
            >
              <div className={asideBarStyles.buttonElements}>
                <div className={asideBarStyles.leftContent}>
                  <Image
                    width={15}
                    height={15}
                    alt="icon"
                    src={"/aside-icons/open-book.png"}
                    className={asideBarStyles.icons}
                  />
                  <p className={asideBarStyles.buttonTitle}> Clases</p>
                </div>

                <Image
                  width={15}
                  height={14}
                  alt="arrow"
                  src={"/aside-icons/chevron-up.png"}
                  className={asideBarStyles.icons}
                />
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
              isOpenPlanes ? asideBarStyles.isOpen : ""
            }`}
          >
            <button
              className={asideBarStyles.dropwdownBtn}
              onClick={() => toggleDropdown("planes")}
            >
              <div className={asideBarStyles.buttonElements}>
                <div className={asideBarStyles.leftContent}>
                  <Image
                    width={15}
                    height={15}
                    alt="icon"
                    src={"/aside-icons/clipboard-list.png"}
                    className={asideBarStyles.icons}
                  />
                  <p className={asideBarStyles.buttonTitle}> Planes</p>
                </div>

                <Image
                  width={15}
                  height={14}
                  alt="arrow"
                  src={"/aside-icons/chevron-up.png"}
                  className={asideBarStyles.icons}
                />
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
              isOpenCalendario ? asideBarStyles.isOpen : ""
            }`}
          >
            <button
              className={asideBarStyles.dropwdownBtn}
              onClick={() => toggleDropdown("calendario")}
            >
              <div className={asideBarStyles.buttonElements}>
                <div className={asideBarStyles.leftContent}>
                  <Image
                    width={15}
                    height={15}
                    alt="icon"
                    src={"/aside-icons/calendar-month.png"}
                    className={asideBarStyles.icons}
                  />
                  <p className={asideBarStyles.buttonTitle}> Calendario</p>
                </div>

                <Image
                  width={15}
                  height={14}
                  alt="arrow"
                  src={"/aside-icons/chevron-up.png"}
                  className={asideBarStyles.icons}
                />
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
