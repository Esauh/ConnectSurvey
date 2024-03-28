/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateIncident = /* GraphQL */ `
  subscription OnCreateIncident($filter: ModelSubscriptionIncidentFilterInput) {
    onCreateIncident(filter: $filter) {
      id
      customerID
      agentID
      callStartTime
      startDate
      incidentDetails
      escalate
      resolutionDetails
      summary
      endDate
      callResponseTime
      resolved
      agentName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateIncident = /* GraphQL */ `
  subscription OnUpdateIncident($filter: ModelSubscriptionIncidentFilterInput) {
    onUpdateIncident(filter: $filter) {
      id
      customerID
      agentID
      callStartTime
      startDate
      incidentDetails
      escalate
      resolutionDetails
      summary
      endDate
      callResponseTime
      resolved
      agentName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteIncident = /* GraphQL */ `
  subscription OnDeleteIncident($filter: ModelSubscriptionIncidentFilterInput) {
    onDeleteIncident(filter: $filter) {
      id
      customerID
      agentID
      callStartTime
      startDate
      incidentDetails
      escalate
      resolutionDetails
      summary
      endDate
      callResponseTime
      resolved
      agentName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateAgent = /* GraphQL */ `
  subscription OnCreateAgent($filter: ModelSubscriptionAgentFilterInput) {
    onCreateAgent(filter: $filter) {
      id
      name
      email
      phone
      managerID
      Incidents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAgent = /* GraphQL */ `
  subscription OnUpdateAgent($filter: ModelSubscriptionAgentFilterInput) {
    onUpdateAgent(filter: $filter) {
      id
      name
      email
      phone
      managerID
      Incidents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAgent = /* GraphQL */ `
  subscription OnDeleteAgent($filter: ModelSubscriptionAgentFilterInput) {
    onDeleteAgent(filter: $filter) {
      id
      name
      email
      phone
      managerID
      Incidents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onCreateCustomer(filter: $filter) {
      id
      name
      email
      phone
      Incidents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onUpdateCustomer(filter: $filter) {
      id
      name
      email
      phone
      Incidents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onDeleteCustomer(filter: $filter) {
      id
      name
      email
      phone
      Incidents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateManager = /* GraphQL */ `
  subscription OnCreateManager($filter: ModelSubscriptionManagerFilterInput) {
    onCreateManager(filter: $filter) {
      id
      name
      email
      phone
      Agents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateManager = /* GraphQL */ `
  subscription OnUpdateManager($filter: ModelSubscriptionManagerFilterInput) {
    onUpdateManager(filter: $filter) {
      id
      name
      email
      phone
      Agents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteManager = /* GraphQL */ `
  subscription OnDeleteManager($filter: ModelSubscriptionManagerFilterInput) {
    onDeleteManager(filter: $filter) {
      id
      name
      email
      phone
      Agents {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
