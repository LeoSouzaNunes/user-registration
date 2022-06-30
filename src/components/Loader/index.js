import spinner from "../../assets/spinner.svg";
import styles from "./styles.module.scss";

export default function Loader({ width = "200px", height = "200px" }) {
    return (
        <div className={styles.div}>
            <img src={spinner} alt="Loading..." width={width} height={height} />
        </div>
    );
}
