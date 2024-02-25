import styles from "./LeftComponent.module.css";
import ListPoint from "../List/ListPoint";
function LeftComponent() {
  const points = [
    "Bulk upload files to check for AI.",
    "Review AI results per submission.",
    "Export results for bulk uploads.",
    "Access API key.",
  ];
  return (
    <div className={styles.leftContainer}>
      <h1>Sign up to gain access to the Checkfor.ai dashboard</h1>
      <ListPoint dataPoints={points}/>
    </div>
  );
}
export default LeftComponent;
