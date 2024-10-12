import { useLeads } from "./leadsContext";
import styles from "./Header.module.css";

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

function calculateBonuses(tabulated, rates) {
  const bonuses = {};

  for (const service in tabulated) {
    if (tabulated.hasOwnProperty(service) && rates.hasOwnProperty(service)) {
      bonuses[service] = tabulated[service] * rates[service];
    }
  }
  return bonuses;
}

function calculateBonusTotal(bonuses) {
  let total = 0;

  for (const bonus in bonuses) {
    total += bonuses[bonus];
  }
  return total;
}

function Header() {
  const { leads } = useLeads();
  const rates = {
    srx: 12,
    spm: 11,
    vbc: 8,
  };
  const tabulated = leads && aggregateData(leads); // FIX: needs different logic???
  const bonuses = tabulated && calculateBonuses(tabulated, rates);
  const bonusTotal = bonuses && calculateBonusTotal(bonuses);
  const bonusesArray = Object.entries(bonuses);

  const bonusesComponent = (
    <ul>
      {bonusesArray.map(([service, value]) => (
        <li key={service}>
          <span>{service.toUpperCase()}:</span>
          <span>{value}</span>
        </li>
      ))}
    </ul>
  );

  if (leads.length < 1) return <p>Loading...</p>;
  return (
    <header>
      <span>
        SRX: {tabulated.srx} (${bonuses.srx})
      </span>
      <span>
        SPM: {tabulated.spm} (${bonuses.spm})
      </span>
      <span>VBC: {tabulated.vbc}</span>
      <span>HRA: {tabulated.hra}</span>
      <span>Intra: {tabulated.intra}</span>
      <span>DVH: {tabulated.dvh}</span>
      <span>Flossy: {tabulated.flossy}</span>
      <span>Retirable: {tabulated.retirable}</span>
      <span>NDR: {tabulated.ndr}</span>
      <span>Total: ${bonusTotal}</span>
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
