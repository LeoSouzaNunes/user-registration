import styles from "./styles.module.scss";

export default function Input({
    value = "",
    placeholder = "none",
    onChange = () => 0,
    label = "none",
    inputId = "none",
    type = "text",
}) {
    return (
        <>
            <label className={styles.label} htmlFor={inputId}>
                {label}
            </label>
            <input
                className={styles.input}
                id={inputId}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                type={type}
                required
            />
        </>
    );
}
