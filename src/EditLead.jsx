import { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

const initialState = {
  lead: {
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
        lead: action.payload,
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

    case "leads/updated":
      return {
        ...state,
        leads: [...state.leads, action.payload],
      };

    default:
      throw new Error("Unknown action type");
  }
}

function EditLead() {
  const [{ lead }, dispatch] = useReducer(reducer, initialState);
  const { id } = useParams();

  useEffect(
    function () {
      async function fetchLead() {
        try {
          const response = await fetch(`http://localhost:8000/leads/${id}`);
          const data = await response.json();
          dispatch({ type: "lead/loaded", payload: data });
        } catch (error) {
          console.log(error);
        }
      }
      fetchLead();
    },
    [id]
  );

  function handleSubmit(e) {
    e.preventDefault();
    async function updateLead() {
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

    updateLead();
  }

  console.log(lead);
  if (!lead) return <p>Loading...</p>;
  return (
    <div>
      <h1>{lead.id}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="srx">SRx</label>
        <input
          type="checkbox"
          id="srx"
          name="srx"
          checked={lead.srx}
          onChange={(e) =>
            dispatch({ type: "checkSrx", payload: e.target.checked })
          }
        />
        <label htmlFor="esiSrx">ESI</label>
        <input
          type="checkbox"
          id="esiSrx"
          name="esiSrx"
          checked={lead.esiSrx}
          onChange={(e) =>
            dispatch({ type: "checkEsiSrx", payload: e.target.checked })
          }
        />

        <label htmlFor="spm">SPM</label>
        <input
          type="checkbox"
          id="spm"
          name="spm"
          checked={lead.spm}
          onChange={(e) =>
            dispatch({ type: "checkSpm", payload: e.target.checked })
          }
        />

        <label htmlFor="esiSpm">ESI</label>
        <input
          type="checkbox"
          id="esiSpm"
          name="esiSpm"
          checked={lead.esiSpm}
          onChange={(e) =>
            dispatch({ type: "checkEsiSpm", payload: e.target.checked })
          }
        />

        <label htmlFor="vbc">VBC</label>
        <input
          type="checkbox"
          id="vbc"
          name="vbc"
          checked={lead.vbc}
          onChange={(e) =>
            dispatch({ type: "checkVbc", payload: e.target.checked })
          }
        />

        <label htmlFor="intra">Intra</label>
        <input
          type="checkbox"
          id="intra"
          name="intra"
          checked={lead.intra}
          onChange={(e) =>
            dispatch({ type: "checkIntra", payload: e.target.checked })
          }
        />

        <label htmlFor="dvh">DVH</label>
        <input
          type="checkbox"
          id="dvh"
          name="dvh"
          checked={lead.dvh}
          onChange={(e) =>
            dispatch({ type: "checkDvh", payload: e.target.checked })
          }
        />

        <label htmlFor="hra">HRA</label>
        <input
          type="checkbox"
          id="hra"
          name="hra"
          checked={lead.hra}
          onChange={(e) =>
            dispatch({ type: "checkHra", payload: e.target.checked })
          }
        />

        <label htmlFor="charlie">Charlie</label>
        <input
          type="checkbox"
          id="charlie"
          name="charlie"
          checked={lead.charlie}
          onChange={(e) =>
            dispatch({ type: "checkCharlie", payload: e.target.checked })
          }
        />

        <label htmlFor="ndr">NDR</label>
        <input
          type="checkbox"
          id="ndr"
          name="ndr"
          checked={lead.ndr}
          onChange={(e) =>
            dispatch({ type: "checkNdr", payload: e.target.checked })
          }
        />

        <label htmlFor="flossy">Flossy</label>
        <input
          type="checkbox"
          id="flossy"
          name="flossy"
          checked={lead.flossy}
          onChange={(e) =>
            dispatch({ type: "checkFlossy", payload: e.target.checked })
          }
        />

        <label htmlFor="retirable">Retirable</label>
        <input
          type="checkbox"
          id="retirable"
          name="retirable"
          checked={lead.retirable}
          onChange={(e) =>
            dispatch({ type: "checkRetirable", payload: e.target.checked })
          }
        />

        <label htmlFor="notes">Notes: </label>
        <input
          type="text"
          id="notes"
          name="notes"
          value={lead.notes}
          onChange={(e) =>
            dispatch({ type: "addNotes", payload: e.target.value })
          }
        />
        <button>Edit</button>
      </form>
    </div>
  );
}

export default EditLead;
