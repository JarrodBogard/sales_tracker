import { HiMiniFolderPlus } from "react-icons/hi2";
import { useLeads } from "./leadsContext";
import styles from "./Form.module.css";

function Form({ create, buttonText, onSubmit }) {
  const { lead, dispatch } = useLeads();

  return (
    // <form onSubmit={onSubmit} className={!create ? styles.altForm : ""}>
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="lead">Lead Id: {lead.id}</label>
        {create && (
          <input
            className={styles.leadId}
            type="text"
            id="lead"
            name="lead"
            value={lead.id}
            onChange={(e) =>
              dispatch({ type: "addLead", payload: e.target.value })
            }
          />
        )}
      </div>

      <div>
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
      </div>

      <div>
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
      </div>

      <div>
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
      </div>

      <div>
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
      </div>

      <div>
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
      </div>

      <div>
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
      </div>

      <div>
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
      </div>

      <div>
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
      </div>

      <div>
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
      </div>

      <div>
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
      </div>

      <div>
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
      </div>

      <div>
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
      </div>

      <div>
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
      </div>

      <button>
        <HiMiniFolderPlus size={22} />
      </button>
    </form>
  );
}

export default Form;
