import styles from "./styles.module.scss";

export default function Button({ text = "Click" }) {
    return (
        <button type="submit" className={styles.button}>
            {text}
        </button>
    );
}
