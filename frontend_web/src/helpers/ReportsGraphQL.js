import { gql } from "apollo-boost";

export const NATURE_SUMMARY = gql`
  query natureSummary {
    natureSummary {
      name
      countAll
      countDone
    }
  }
`;

export const STATUS_SUMMARY = gql`
  query statusSummary {
    statusSummary {
      name
      count
    }
  }
`;
