import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLeads } from "./leadsContext";
import Form from "./Form";

function EditLead() {
  const { id } = useParams();
  const { lead, fetchLead, updateLead } = useLeads();

  useEffect(
    function () {
      fetchLead(id);
    },
    [id]
  );

  function handleSubmit(e) {
    e.preventDefault();
    updateLead(id);
  }

  if (!lead.id || lead.id !== id) return <p>Loading...</p>;
  return (
    <div>
      <h1>{lead.id}</h1>
      <Form buttonText="edit" onSubmit={handleSubmit} />
    </div>
  );
}

export default EditLead;
