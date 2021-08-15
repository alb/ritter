import { motion } from "framer-motion";
import { useState } from "react";
import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
    const [isActive, toggleActive] = useState(true);

    const toggleSidebar = () => {
      toggleActive(!isActive);
    };

    const sidebarVariants = {
        enter: {
          opacity: 1,
          rotateX: 0,
          transition: {
            duration: 0.5
          },
          display: "block"
        },
        exit: {
          opacity: 0,
          rotateX: -15,
          transition: {
            duration: 0.5,
          },
          transitionEnd: {
            display: "none"
          }
        }
    };

    const openerVariants = {
        enter: {
          opacity: 1,
          rotateX: 0,
          transition: {
            duration: 0.25,
            delay: 0.5
          },
          display: "block"
        },
        exit: {
          opacity: 0,
          rotateX: -15,
          transition: {
            duration: 0.25
          },
          transitionEnd: {
            display: "none"
          }
        }
    };

    return (
        <div>
            <motion.div
                className={styles.sidebar}
                initial="exit"
                animate={isActive ? "enter" : "exit"}
                variants={sidebarVariants}
            >
                <div className={styles.titleSection}>
                    <div className={styles.title}>
                        <img src="/layers.svg"/>
                        <span>Layers</span>
                    </div>
                    <img src="/x.svg" onClick={toggleSidebar}/>
                </div>
                <div className={styles.layers}>
                    <div className={styles.layer}>
                        Layer 1
                    </div>
                    <div className={styles.layer}>
                        Layer 2
                    </div>
                    <div className={styles.layer}>
                        Layer 3 
                    </div>
                </div>
            </motion.div>
            <motion.div
                className={styles.opener}
                initial="exit"
                animate={isActive ? "exit" : "enter"}
                variants={openerVariants}
                onClick={toggleSidebar}
            >
                <img src="/layers.svg"/>
            </motion.div>
        </div>
    )
};