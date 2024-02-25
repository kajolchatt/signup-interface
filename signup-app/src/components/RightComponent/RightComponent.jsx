import styles from "./RightComponent.module.css";
import InputForm from "../Form/InputForm";
function RightComponent() {
  return (
    <div className={styles.rightcontainer}>
    <h3>Create your account to get started.</h3>
      <InputForm/>
    </div>
  );
}
export default RightComponent;
