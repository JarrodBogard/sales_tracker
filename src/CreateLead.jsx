import { useEffect } from "react";
import { useLeads } from "./leadsContext";
import Form from "./Form";

function CreateLead() {
  const { lead, updateLeads, dispatch } = useLeads();

  useEffect(function () {
    dispatch({ type: "lead/reset" });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!lead.id) return;
    updateLeads();
  }

  return <Form create={true} buttonText="Create" onSubmit={handleSubmit} />;
}

export default CreateLead;
