import React, { useState } from "react";
import { NATURES, LOCATIONS, GET_STATUSES } from "../../helpers/GraphQL";
import FilterExport from "../../components/forms/FilterExport";
import { Dates } from "../../helpers/Dates";

function FilterForm({ handleSubmit, handleExport, filter = {} }) {
  console.log(filter);
  const [formData, setFormData] = useState(filter);
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - 30)
  const searchFields = [
    {
      name: "dateFrom",
      label: "From",
      type: "date",
      defaultValue: filter["dateFrom"] || Dates.fmt(startDate),
    },
    {
      name: "dateTo",
      label: "To",
      type: "date",
      defaultValue: filter["dateTo"] || Dates.fmt(Date.now()),
    },
  ];
  function handleChange(e) {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value || null });
  }

  return (
    <FilterExport
      handleSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formData);
      }}
      fields={searchFields}
      handleChange={handleChange}
      filterLabel='Refresh'
    />
  );
}

export default FilterForm;
