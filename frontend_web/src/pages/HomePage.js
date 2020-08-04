import React from "react";
import ComplaintsByNatureGraph from "./dashboard/ComplaintsByNatureGraph";
import ComplaintsByStatusGraph from "./dashboard/ComplaintsByStatusGraph";
import ComplaintsByLocationGraph from "./dashboard/ComplaintsByLocationGraph";

function HomePage() {
  return (
    <div className="dashboard">
      <ComplaintsByStatusGraph />
      <ComplaintsByLocationGraph />
      <ComplaintsByNatureGraph />
    </div>
  );
}

export default HomePage;
