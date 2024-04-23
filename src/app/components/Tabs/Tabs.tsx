"use client";
import { useState } from "react";
import styles from "./tabs-styles.module.css";
import DatosBasicos from "../DatosBasicos/DatosBasicos";
import DatosMedicos from "../DatosMedicos/DatosMedicos";
import InstClases from "../InstClases/InstClases";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState<string>("1");

  const tabs = [
    {
      id: 1,
      tabTitle: "Datos Básicos",
      content: <DatosBasicos />
    },

    {
      id: 2,
      tabTitle: "Datos Médicos",
      content: <DatosMedicos />
    },

    {
      id: 3,
      tabTitle: "Instructores y Clases",
      content: <InstClases />
    }
  ];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentTab(event.currentTarget.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabsLayout}>
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              id={`${tab.id}`}
              disabled={currentTab === `${tab.id}`}
              onClick={handleClick}
              className={styles.button}
            >
              {tab.tabTitle}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.formContainer}>
        {tabs.map(
          (tab, index) =>
            currentTab === `${tab.id}` && (
              <div className={styles.content} key={index}>
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};
export default Tabs;
