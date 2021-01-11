import { gql } from "apollo-boost";

export const NATURE_SUMMARY = gql`
  query natureSummary(
    $dateFrom: Date
    $dateTo: Date
    ) {
    natureSummary(
      dateFrom: $dateFrom
      dateTo: $dateTo
      ) {
      name
      status
      count
    }
  }
`;

export const STATUS_SUMMARY = gql`
  query statusSummary(
    $dateFrom: Date
    $dateTo: Date
    ) {
    statusSummary(
      dateFrom: $dateFrom
      dateTo: $dateTo
      ) {
      name
      count
    }
  }
`;

export const LOCATION_SUMMARY = gql`
  query getLocSummary(
    $dateFrom: Date
    $dateTo: Date
    ) {
    locationSummary(
      dateFrom: $dateFrom
      dateTo: $dateTo
      ) {
      locName
      locCount
    }
  }
`;

export const KPI_SUMMARY = gql`
  query kpi(
    $dateFrom: Date
    $dateTo: Date
    ) {
    kpiSummary(
      dateFrom: $dateFrom
      dateTo: $dateTo
      ) {
      name
      count
      natureName
    }
  }
`;
