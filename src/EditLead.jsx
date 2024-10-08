import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function EditLead() {
  const [leadData, setLeadData] = useState(null);
  const { id } = useParams();

  useEffect(
    function () {
      async function fetchLead() {
        try {
          const response = await fetch(`http://localhost:8000/leads/${id}`);
          const data = await response.json();
          setLeadData(data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchLead();
    },
    [id]
  );
  console.log(leadData);
  return <div>{leadData.id}</div>;
}

export default EditLead;
