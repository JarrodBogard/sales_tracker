import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./AppLayout";
import CreateLead from "./CreateLead";
import ViewLeads from "./ViewLeads";
import EditLead from "./EditLead";
import Charts from "./Charts";
import { LeadsProvider } from "./leadsContext";

function App() {
  return (
    <BrowserRouter>
      <LeadsProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="create" />} />
            <Route path="create" element={<CreateLead />} />
            <Route path="view" element={<ViewLeads />} />
            <Route path="edit/:id" element={<EditLead />} />
            <Route path="charts" element={<Charts />} />
          </Route>
        </Routes>
      </LeadsProvider>
    </BrowserRouter>
  );
}

export default App;
