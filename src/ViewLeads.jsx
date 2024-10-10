import { NavLink } from "react-router-dom";
import { useLeads } from "./leadsContext";

function ViewLead() {
  const { leads, deleteLead } = useLeads();
  function handleClick(id) {
    deleteLead(id);
  }
  const leadsData = leads.map((lead) => (
    <li key={lead.id}>
      <span>{lead.id}</span>
      <span>{lead.srx ? "yes" : "no"}</span>

      <span>{lead.spm ? "yes" : "no"}</span>

      <span>{lead.vbc ? "yes" : "no"}</span>

      <span>{lead.intra ? "yes" : "no"}</span>

      <span>{lead.dvh ? "yes" : "no"}</span>

      <span>{lead.hra ? "yes" : "no"}</span>

      <span>{lead.ndr ? "yes" : "no"}</span>

      <span>{lead.notes}</span>
      <button onClick={() => handleClick(lead.id)}>Delete</button>
      <NavLink to={`/edit/${lead.id}`}>Edit</NavLink>
    </li>
  ));

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
      {leadsData}
    </ul>
  );
}

export default ViewLead;
