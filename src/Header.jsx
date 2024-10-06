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

function Header({ leadData }) {
  const tabulated = leadData && aggregateData(leadData);
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
