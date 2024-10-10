import { NavLink } from "react-router-dom";
import { useLeads } from "./leadsContext";
import Lead from "./Lead";

function ViewLead() {
  // const leadsData = leads.map((lead) => <Lead key={lead.id} lead={lead} />);

  return (
    <ul>
      <div style={{ display: "flex" }}>
        <h2>Lead Id</h2>
        <h2>SRX</h2>
        <h2>SPM</h2>
        <h2>VBC</h2>
        <h2>Intra</h2>
        <h2>DVH</h2>
        <h2>HRA</h2>
        <h2>NDR</h2>
        <h2>Notes</h2>
      </div>
      <Lead />
    </ul>
  );
}

export default ViewLead;
