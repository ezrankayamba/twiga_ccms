import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Route, NavLink } from "react-router-dom";

import Table from "../components/tables/Table";
import MatIcon from "../components/icons/MatIcon";
import { COMPLAINTS } from "../helpers/GraphQL";
import NewComplaintRegisterPage from "./complaints/NewComplaintRegisterPage";
import Modal from "../components/modals/Modal";
import AssignComplaintPopup from "./complaints/AssignComplaintPopup";
import UpdateComplaintForm from "./complaints/UpdateComplaintForm";
import useProfile from "../components/hooks/useProfile";
import Pagination from "../components/tables/Pagination";
import { useEffect } from "react";
const PAGE_SIZE = 10;
function ComplaintsPage() {
  const [pageNo, setPageNo] = useState(1);
  useProfile();
  const complaintsQuery = useQuery(COMPLAINTS, {
    variables: { pageSize: PAGE_SIZE, pageNo: pageNo },
  });
  useEffect(() => {
    console.log("Page changed", complaintsQuery);
    complaintsQuery.refetch({
      variables: { pageSize: PAGE_SIZE, pageNo: pageNo },
    });
  }, [pageNo]);
  const [assign, setAssign] = useState(false);
  const [selected, setSelected] = useState(null);

  if (complaintsQuery.loading) return <p>Loading...</p>;
  if (complaintsQuery.error) return <p>Error :(</p>;

  const columns = [
    { name: "id", label: "ID" },
    { name: "clientName", label: "Client Name" },
    { name: "location_name", label: "Location" },
    { name: "openDate", label: "Open Date" },
    { name: "nature_name", label: "Nature of Complaint" },
    { name: "status", label: "Status" },
    {
      name: "assigned_to",
      label: "Assigned To",
      render: (row) =>
        row.assignedTo ? (
          <span>{row.assignedTo.username}</span>
        ) : (
          <button
            onClick={() => {
              setAssign(true);
              setSelected(row);
            }}
          >
            Assign
          </button>
        ),
    },
    { name: "details", label: "Details", className: "col-ellipsis" },
    {
      name: "viewDetails",
      label: "",
      render: (row) =>
        row.assignedTo ? (
          <NavLink
            className="btn-primary d-flex"
            to={`/complaints/details/${row.id}`}
          >
            {row.status === "COMPLETED" ? "View Details" : "Complete"}
            <MatIcon name="chevron_right" />
          </NavLink>
        ) : null,
    },
  ];
  const fmtDate = (strDate) => {
    let parsed = Date.parse(strDate);
    return new Date(parsed).toLocaleDateString("en-GB");
  };
  const records = complaintsQuery.data.complaints.map((r) => ({
    ...r,
    nature_name: r.nature.name,
    location_name: r.location ? r.location.name : "",
    openDate: fmtDate(r.openDate),
  }));
  return (
    <>
      <Route path="/complaints" exact>
        <div className="toolbar">
          <h5>List of complaints</h5>
          <NavLink
            className="d-flex btn has-left-icon"
            to="/complaints/new-complaint"
          >
            <MatIcon name="add" text="New Complaint" />
          </NavLink>
        </div>
        <Table columns={columns} data={records} />
        <Pagination
          pageNo={pageNo}
          onPageChanged={(newPageNo) => {
            setPageNo(newPageNo);
          }}
          lastPage={complaintsQuery.data.complaints.length < PAGE_SIZE}
        />
      </Route>
      <Route path="/complaints/new-complaint" exact>
        <NewComplaintRegisterPage />
      </Route>
      <Route path="/complaints/details/:id" exact>
        <UpdateComplaintForm />
      </Route>
      {assign && (
        <Modal title={selected.clientName} onClose={() => setAssign(false)}>
          <AssignComplaintPopup
            complaint={selected}
            onComplete={() => setAssign(false)}
          />
        </Modal>
      )}
    </>
  );
}

export default ComplaintsPage;
