import styles from "./styles.module.scss";

export default function Form({ onSubmit, children }) {
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            {children}
        </form>
    );
}
