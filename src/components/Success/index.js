import successIcon from "../../assets/checkmark-done.svg";
import styles from "./styles.module.scss";

export default function Success({ paymentId }) {
    return (
        <div className={styles.div}>
            <img src={successIcon} alt="Payment made successfully" />
            <span>
                Thank you for your registration!
                <br />
                Here it's your register confirmation number:
            </span>
            <textarea value={paymentId} readOnly />
        </div>
    );
}
