/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIncident = /* GraphQL */ `
  query GetIncident($id: ID!) {
    getIncident(id: $id) {
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
export const listIncidents = /* GraphQL */ `
  query ListIncidents(
    $filter: ModelIncidentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIncidents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const incidentsByCustomerID = /* GraphQL */ `
  query IncidentsByCustomerID(
    $customerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelIncidentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    incidentsByCustomerID(
      customerID: $customerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const incidentsByAgentID = /* GraphQL */ `
  query IncidentsByAgentID(
    $agentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelIncidentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    incidentsByAgentID(
      agentID: $agentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getAgent = /* GraphQL */ `
  query GetAgent($id: ID!) {
    getAgent(id: $id) {
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
export const listAgents = /* GraphQL */ `
  query ListAgents(
    $filter: ModelAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        managerID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const agentsByManagerID = /* GraphQL */ `
  query AgentsByManagerID(
    $managerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    agentsByManagerID(
      managerID: $managerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        phone
        managerID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getManager = /* GraphQL */ `
  query GetManager($id: ID!) {
    getManager(id: $id) {
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
export const listManagers = /* GraphQL */ `
  query ListManagers(
    $filter: ModelManagerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManagers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
