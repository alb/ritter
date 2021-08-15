import styles from '../../styles/Loader.module.css';

export default function Loader() {
    return (
        <div className={styles.loader}>
            <img src="/ritter.svg"/>
        </div>
    )
};