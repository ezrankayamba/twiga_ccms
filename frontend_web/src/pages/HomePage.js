import React from "react";
import ComplaintsByNatureGraph from "./dashboard/ComplaintsByNatureGraph";
import ComplaintsByStatusGraph from "./dashboard/ComplaintsByStatusGraph";

function HomePage() {
  return (
    <div className="dashboard">
      <ComplaintsByStatusGraph />
      <ComplaintsByNatureGraph />
    </div>
  );
}

export default HomePage;
