function ViewLead({ leadData }) {
  console.log(leadData);
  const leads = leadData.map((lead) => (
    <li key={lead.id}>
      {lead.id}
      {lead.srx}
      {lead.spm}
      {lead.vbc}
      {lead.intra}
      {lead.hra}
      {lead.dvh}
      {lead.ndr}
      {lead.notes}
    </li>
  ));

  return <ul>{leads}</ul>;
}

export default ViewLead;
