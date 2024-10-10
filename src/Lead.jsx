import { NavLink } from "react-router-dom";
import { useLeads } from "./leadsContext";
function Lead() {
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

  //   TODO: add loading spinner so lead change doesn't show on screen
  return leadsData;
}

export default Lead;
