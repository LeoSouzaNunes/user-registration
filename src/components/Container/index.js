import styles from "./styles.module.scss";

export default function Container({ children }) {
    return <main className={styles.main}>{children}</main>;
}
