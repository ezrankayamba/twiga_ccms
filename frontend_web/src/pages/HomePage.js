import React, { useEffect, useState } from "react";
import ComplaintsByNatureGraph from "./dashboard/ComplaintsByNatureGraph";
import ComplaintsByStatusGraph from "./dashboard/ComplaintsByStatusGraph";
import ComplaintsByLocationGraph from "./dashboard/ComplaintsByLocationGraph";
import ComplaintsKPIGraph from "./dashboard/ComplaintsKPIGraph";
import FilterForm from "./dashboard/FilterForm";


function HomePage() {
  const [filter, setFilter] = useState(new Map());
  const handleSubmit = (formData) => {
    setFilter({ ...formData })
  }

  return (
    <div className="dashboard-container">
      <div className="toolbar">
        {(
          <FilterForm
            handleSubmit={handleSubmit}
            filter={filter} />
        )}
      </div>
      <div className="dashboard">
        <ComplaintsByStatusGraph filter={filter} />
        <ComplaintsByLocationGraph filter={filter} />
        <ComplaintsByNatureGraph filter={filter} />
        <ComplaintsKPIGraph filter={filter} />
      </div>
    </div>
  );
}

export default HomePage;
