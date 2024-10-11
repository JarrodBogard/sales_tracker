import { useLeads } from "./leadsContext";

function aggregateData(data) {
  const tabulatedData = {};

  data.forEach((entry) =>
    Object.entries(entry).forEach(([key, value]) => {
      if (typeof value === "boolean") {
        if (!tabulatedData[key]) tabulatedData[key] = 0;
        if (value) tabulatedData[key]++;
      }
    })
  );

  return tabulatedData;
}

function Header() {
  const { leads } = useLeads();
  const tabulated = leads && aggregateData(leads); // FIX: needs different logic???

  if (leads.length < 1) return <p>Loading...</p>;
  return (
    <header>
      <span>SRX: {tabulated.srx}</span>
      <span>ESI-SRX: {tabulated.esiSrx}</span>
      <span>SPM: {tabulated.spm}</span>
      <span>ESI-SPM: {tabulated.esiSpm}</span>
      <span>VBC: {tabulated.vbc}</span>
      <span>hra: {tabulated.hra}</span>
      <span>Intra: {tabulated.intra}</span>
      <span>DVH: {tabulated.dvh}</span>
      <span>Flossy: {tabulated.flossy}</span>
      <span>Retirable: {tabulated.retirable}</span>
      <span>NDR: {tabulated.ndr}</span>
    </header>
  );
}

export default Header;

/*
const serviceTotals = {
  serviceA: 10,
  serviceB: 5,
  serviceC: 8
};

// Corresponding dollar amounts per service
const serviceRates = {
  serviceA: 15,  // $15 per unit for serviceA
  serviceB: 20,  // $20 per unit for serviceB
  serviceC: 12   // $12 per unit for serviceC
};

// Function to calculate total bonus for each service
function calculateBonus(serviceTotals, serviceRates) {
  const serviceBonuses = {};

  for (const service in serviceTotals) {
    if (serviceTotals.hasOwnProperty(service) && serviceRates.hasOwnProperty(service)) {
      // Multiply the total by the rate for each service
      serviceBonuses[service] = serviceTotals[service] * serviceRates[service];
    }
  }

  return serviceBonuses;
}

// Example usage
const bonuses = calculateBonus(serviceTotals, serviceRates);
*/
