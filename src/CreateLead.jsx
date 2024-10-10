import { useLeads } from "./leadsContext";
import Form from "./Form";

function CreateLead() {
  const { lead, updateLeads } = useLeads();
  // TODO: create dispatch to reset lead on component render (new useEffect? cleanup fx in context?)
  function handleSubmit(e) {
    e.preventDefault();
    if (!lead.id) return;
    updateLeads();
  }

  return <Form create={true} buttonText="Create" onSubmit={handleSubmit} />;
}

export default CreateLead;
