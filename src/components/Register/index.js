import Login from "../Login";
import Signup from "../Signup";
import styles from "./styles.module.css";
import next from "../../assets/next.png";

const Register = ({ setIsLoggedIn }) => {
  return (
    <div className={styles.register}>
      <Signup />
      <img src={next} alt="" style={{ height: "24px", width: "24px" }} />
      <Login setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default Register;
