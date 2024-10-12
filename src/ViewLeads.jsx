import { NavLink } from "react-router-dom";
import { useLeads } from "./leadsContext";
import styles from "./ViewLeads.module.css";
import Lead from "./Lead";

function ViewLeads() {
  // const leadsData = leads.map((lead) => <Lead key={lead.id} lead={lead} />);

  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <span>Lead Id</span>
        <span>SRX</span>
        <span>SPM</span>
        <span>VBC</span>
        <span>Intra</span>
        <span>DVH</span>
        <span>HRA</span>
        <span>NDR</span>
        <span>Notes</span>
      </div>
      <ul>
        <Lead />
      </ul>
    </div>
  );
}

export default ViewLeads;
