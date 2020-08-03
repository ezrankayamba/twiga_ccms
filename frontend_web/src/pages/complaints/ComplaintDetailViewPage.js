import React from "react";
import { withRouter } from "react-router";
import { GET_COMPLAINT } from "../../helpers/GraphQL";
import useProfile from "../../components/hooks/useProfile";
import { useQuery } from "@apollo/react-hooks";
import { NavLink } from "react-router-dom";
import MatIcon from "../../components/icons/MatIcon";

function ComplaintDetailViewPage({ match }) {
  useProfile();
  const { loading, error, data } = useQuery(GET_COMPLAINT, {
    variables: { id: match.params.id },
  });
  error && console.error(error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const {
    clientName,
    location,
    nature,
    openDate,
    details,
    actionPlan,
    closeDate,
    costCenter,
    dueDate,
    financialImpact,
    rca,
    responsiblePerson,
    results,
    status,
    assignedTo,
    assignedAt,
    assignedBy,
    closedBy,
  } = data.complaint;
  const fmtDate = (strDate) => {
    if (strDate) {
      let parsed = Date.parse(strDate);
      return new Date(parsed).toLocaleDateString("en-GB");
    }
    return null;
  };
  return (
    <div className="details">
      <div className="toolbar">
        <div className="titlebar">
          <NavLink to="/complaints" className="btn btn-light mr-1">
            <MatIcon name="keyboard_arrow_left" />
          </NavLink>
          <h5>Complete Complaint Information</h5>
        </div>
        <div className="status">
          <label>
            Status: <span>{status}</span>
          </label>
        </div>
      </div>
      <div className="grid-form-details">
        <div>
          <label>Client Name</label>
          <p>{clientName}</p>
        </div>
        <div>
          <label>Location</label>
          <p>{location.name}</p>
        </div>
        <div>
          <label>Nature</label>
          <p>{nature.name}</p>
        </div>
        <div>
          <label>Open Date</label>
          <p>{fmtDate(openDate)}</p>
        </div>
        <div className="span">
          <label>Details</label>
          <p>{details}</p>
        </div>
        <div className="span">
          <label>Details</label>
          <p>{details}</p>
        </div>
        <div>
          <label>Assigned To</label>
          <p>{assignedTo ? assignedTo.username : null}</p>
        </div>
        <div>
          <label>Assigned Date</label>
          <p>{fmtDate(assignedAt)}</p>
        </div>
        <div>
          <label>Action Plan</label>
          <p>{actionPlan}</p>
        </div>
        <div>
          <label>Root Cause Analysis</label>
          <p>{rca}</p>
        </div>
        <div className="span">
          <label>Results</label>
          <p>{results}</p>
        </div>
        <div className="span">
          <label>Financial Impact</label>
          <p>{financialImpact}</p>
        </div>
        <div>
          <label>Cost Center</label>
          <p>{costCenter}</p>
        </div>
        <div>
          <label>Responsible Person</label>
          <p>{responsiblePerson}</p>
        </div>

        <div>
          <label>Closed By</label>
          <p>{closedBy ? closedBy.username : null}</p>
        </div>
        <div>
          <label>Close Date</label>
          <p>{fmtDate(closeDate)}</p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ComplaintDetailViewPage);
