import { createContext, useContext, useEffect, useReducer } from "react";

const LeadsContext = createContext();

const initialState = {
  leads: [],
  lead: {
    id: "",
    srx: false,
    esiSrx: false,
    spm: false,
    esiSpm: false,
    vbc: false,
    intra: false,
    dvh: false,
    hra: false,
    charlie: false,
    ndr: false,
    flossy: false,
    retirable: false,
    notes: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "addLead":
      return {
        ...state,
        lead: { ...state.lead, id: action.payload },
      };

    case "checkSrx":
      return {
        ...state,
        lead: { ...state.lead, srx: action.payload },
      };

    case "checkEsiSrx":
      return {
        ...state,
        lead: { ...state.lead, esiSrx: action.payload },
      };
    case "checkSpm":
      return {
        ...state,
        lead: { ...state.lead, spm: action.payload },
      };
    case "checkEsiSpm":
      return {
        ...state,
        lead: { ...state.lead, esiSpm: action.payload },
      };
    case "checkVbc":
      return {
        ...state,
        lead: { ...state.lead, vbc: action.payload },
      };
    case "checkIntra":
      return {
        ...state,
        lead: { ...state.lead, intra: action.payload },
      };
    case "checkDvh":
      return {
        ...state,
        lead: { ...state.lead, dvh: action.payload },
      };
    case "checkHra":
      return {
        ...state,
        lead: { ...state.lead, hra: action.payload },
      };
    case "checkCharlie":
      return {
        ...state,
        lead: { ...state.lead, charlie: action.payload },
      };
    case "checkNdr":
      return {
        ...state,
        lead: { ...state.lead, ndr: action.payload },
      };
    case "checkFlossy":
      return {
        ...state,
        lead: { ...state.lead, flossy: action.payload },
      };
    case "checkRetirable":
      return {
        ...state,
        lead: { ...state.lead, retirable: action.payload },
      };
    case "addNotes":
      return {
        ...state,
        lead: { ...state.lead, notes: action.payload },
      };

    case "lead/loaded":
      return {
        ...state,
        lead: action.payload,
      };

    case "lead/deleted":
      return {
        ...state,
        leads: state.leads.filter((lead) => lead.id !== action.payload),
      };

    case "leads/loaded":
      return {
        ...state,
        leads: action.payload,
      };

    case "leads/updated":
      return {
        ...state,
        leads: [...state.leads, action.payload],
        lead: initialState.lead, // is this the correct approach
      };

    default:
      throw new Error("Unknown action type");
  }
}

function LeadsProvider({ children }) {
  const [{ leads, lead }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchLeads() {
      try {
        const response = await fetch(`http://localhost:8000/leads`);
        const data = await response.json();
        dispatch({ type: "leads/loaded", payload: data });
      } catch (error) {
        console.log(error);
      }
    }

    fetchLeads();
  }, []);

  async function fetchLead(id) {
    try {
      const response = await fetch(`http://localhost:8000/leads/${id}`);
      const data = await response.json();
      dispatch({ type: "lead/loaded", payload: data });
    } catch (error) {
      console.log(error);
    }
  }

  async function updateLeads() {
    try {
      const response = await fetch(`http://localhost:8000/leads`, {
        method: "POST",
        body: JSON.stringify(lead),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      dispatch({ type: "leads/updated", payload: data });
    } catch (error) {
      console.log(error);
    }
  }

  async function updateLead(id) {
    try {
      const response = await fetch(`http://localhost:8000/leads/${id}`, {
        method: "PATCH",
        body: JSON.stringify(lead),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteLead(id) {
    try {
      const response = await fetch(`http://localhost:8000/leads/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      dispatch({ type: "lead/deleted", payload: id });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <LeadsContext.Provider
      value={{ leads, lead, fetchLead, updateLeads, updateLead, deleteLead, dispatch }}
    >
      {children}
    </LeadsContext.Provider>
  );
}

function useLeads() {
  const context = useContext(LeadsContext);
  if (context === undefined)
    throw new Error(
      "LeadsContext access is restricted to child components of the LeadsContext Provider"
    );

  return context;
}

export { LeadsProvider, useLeads };
