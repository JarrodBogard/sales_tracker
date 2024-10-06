import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./AppLayout";
import CreateLead from "./CreateLead";
import ViewLeads from "./ViewLeads";
import Charts from "./Charts";

function App() {
  const [leadData, setLeadData] = useState([]);

  useEffect(function () {
    async function fetchLeadData() {
      try {
        const response = await fetch(`http://localhost:8000/leads`);
        const data = await response.json();
        setLeadData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchLeadData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout leadData={leadData} />}>
          <Route index element={<Navigate replace to="create" />} />
          <Route
            path="create"
            element={<CreateLead onLeadData={setLeadData} />}
          />
          <Route path="view" element={<ViewLeads leadData={leadData} />} />
          <Route path="charts" element={<Charts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
