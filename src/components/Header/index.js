import styles from "./styles.module.scss";

export default function Header({ title = "Registration" }) {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
        </header>
    );
}
