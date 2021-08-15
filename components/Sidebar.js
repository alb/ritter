import { motion } from "framer-motion";
import { useState } from "react";
import { setIndex } from '../store/features/geoSlice';
import { useSelector, useDispatch } from "react-redux";
import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
    const geoJson = useSelector(state => state.geoReducer.geoJson);
    const dispatch = useDispatch();

    const [isActive, toggleActive] = useState(true);

    const toggleSidebar = () => {
      toggleActive(!isActive);
    };

    function toggleLayer(index) {
      let newLayer = JSON.parse(JSON.stringify(geoJson[index]));
      if(!newLayer.properties.hidden) {
        newLayer.properties.hidden = true;
      } else {
        newLayer.properties.hidden = false;
      }
        console.log(newLayer)

      dispatch(setIndex({
        index: index,
        value: newLayer
      }));
    }

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
                  {geoJson.map((layer, index) => (
                    <div className={styles.layer} key={index}>
                      <div className={styles.layerName}>
                        <span>{layer.properties.name}</span>
                      </div>
                      <div className={styles.layerToggle} onClick={() => toggleLayer(index)}>
                        {!layer?.properties.hidden
                          ? <img src="/eye.svg"/>
                          : <img src="/eye-off.svg"/>
                        }
                      </div>
                    </div>
                  ))}
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