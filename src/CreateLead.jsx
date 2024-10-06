import { useReducer } from "react";

const initialState = {
  leads: [],
  lead: "",
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
        srx: action.payload,
      };

    case "checkEsiSrx":
      return {
        ...state,
        esiSrx: action.payload,
      };
    case "checkSpm":
      return {
        ...state,
        spm: action.payload,
      };
    case "checkEsiSpm":
      return {
        ...state,
        esiSpm: action.payload,
      };
    case "checkVbc":
      return {
        ...state,
        vbc: action.payload,
      };
    case "checkIntra":
      return {
        ...state,
        intra: action.payload,
      };
    case "checkDvh":
      return {
        ...state,
        dvh: action.payload,
      };
    case "checkHra":
      return {
        ...state,
        hra: action.payload,
      };
    case "checkCharlie":
      return {
        ...state,
        charlie: action.payload,
      };
    case "checkNdr":
      return {
        ...state,
        ndr: action.payload,
      };
    case "checkFlossy":
      return {
        ...state,
        flossy: action.payload,
      };
    case "checkRetirable":
      return {
        ...state,
        retirable: action.payload,
      };
    case "addNotes":
      return {
        ...state,
        notes: action.payload,
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

function CreateLead({ onLeadData }) {
  const [
    {
      lead,
      srx,
      esiSrx,
      spm,
      esiSpm,
      vbc,
      intra,
      dvh,
      hra,
      charlie,
      ndr,
      flossy,
      retirable,
      notes,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if (!lead) return;

    const newLead = {
      id: lead,
      srx,
      esiSrx,
      spm,
      esiSpm,
      vbc,
      intra,
      dvh,
      hra,
      charlie,
      ndr,
      flossy,
      retirable,
      notes,
    };

    async function udpateLeads() {
      try {
        const response = await fetch(`http://localhost:8000/leads`, {
          method: "POST",
          body: JSON.stringify(newLead),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        onLeadData((prevData) => [...prevData, data]);
        dispatch({ type: "leads/updated", payload: data });
      } catch (error) {
        console.log(error);
      }
    }

    udpateLeads();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="lead">Lead Id: </label>
      <input
        type="text"
        id="lead"
        name="lead"
        value={lead}
        onChange={(e) => dispatch({ type: "addLead", payload: e.target.value })}
      />

      <label htmlFor="srx">SRx</label>
      <input
        type="checkbox"
        id="srx"
        name="srx"
        checked={srx}
        onChange={(e) =>
          dispatch({ type: "checkSrx", payload: e.target.checked })
        }
      />

      <label htmlFor="esiSrx">ESI</label>
      <input
        type="checkbox"
        id="esiSrx"
        name="esiSrx"
        checked={esiSrx}
        onChange={(e) =>
          dispatch({ type: "checkEsiSrx", payload: e.target.checked })
        }
      />

      <label htmlFor="spm">SPM</label>
      <input
        type="checkbox"
        id="spm"
        name="spm"
        checked={spm}
        onChange={(e) =>
          dispatch({ type: "checkSpm", payload: e.target.checked })
        }
      />

      <label htmlFor="esiSpm">ESI</label>
      <input
        type="checkbox"
        id="esiSpm"
        name="esiSpm"
        checked={esiSpm}
        onChange={(e) =>
          dispatch({ type: "checkEsiSpm", payload: e.target.checked })
        }
      />

      <label htmlFor="vbc">VBC</label>
      <input
        type="checkbox"
        id="vbc"
        name="vbc"
        checked={vbc}
        onChange={(e) =>
          dispatch({ type: "checkVbc", payload: e.target.checked })
        }
      />

      <label htmlFor="intra">Intra</label>
      <input
        type="checkbox"
        id="intra"
        name="intra"
        checked={intra}
        onChange={(e) =>
          dispatch({ type: "checkIntra", payload: e.target.checked })
        }
      />

      <label htmlFor="dvh">DVH</label>
      <input
        type="checkbox"
        id="dvh"
        name="dvh"
        checked={dvh}
        onChange={(e) =>
          dispatch({ type: "checkDvh", payload: e.target.checked })
        }
      />

      <label htmlFor="hra">HRA</label>
      <input
        type="checkbox"
        id="hra"
        name="hra"
        checked={hra}
        onChange={(e) =>
          dispatch({ type: "checkHra", payload: e.target.checked })
        }
      />

      <label htmlFor="charlie">Charlie</label>
      <input
        type="checkbox"
        id="charlie"
        name="charlie"
        checked={charlie}
        onChange={(e) =>
          dispatch({ type: "checkCharlie", payload: e.target.checked })
        }
      />

      <label htmlFor="ndr">NDR</label>
      <input
        type="checkbox"
        id="ndr"
        name="ndr"
        checked={ndr}
        onChange={(e) =>
          dispatch({ type: "checkNdr", payload: e.target.checked })
        }
      />

      <label htmlFor="flossy">Flossy</label>
      <input
        type="checkbox"
        id="flossy"
        name="flossy"
        checked={flossy}
        onChange={(e) =>
          dispatch({ type: "checkFlossy", payload: e.target.checked })
        }
      />

      <label htmlFor="retirable">Retirable</label>
      <input
        type="checkbox"
        id="retirable"
        name="retirable"
        checked={retirable}
        onChange={(e) =>
          dispatch({ type: "checkRetirable", payload: e.target.checked })
        }
      />

      <label htmlFor="notes">Notes: </label>
      <input
        type="text"
        id="notes"
        name="notes"
        value={notes}
        onChange={(e) =>
          dispatch({ type: "addNotes", payload: e.target.value })
        }
      />

      <button>Create</button>
    </form>
  );
}

export default CreateLead;
