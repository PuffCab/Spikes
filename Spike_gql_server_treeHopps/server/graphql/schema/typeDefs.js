export const gql = String.raw;

const typeDefs = gql`
  enum MissionStatus {
    NOTSTARTED
    INPROGRESS
    COMPLETED
  }

  type Superhero {
    id: ID!
    name: String!
    secretIdentity: String!
    superpowers: [String!]!
    assignedMission: Mission
  }

  type Mission {
    id: ID!
    name: String!
    status: String!
    description: String!
    assignedTo: [Superhero]
  }

  type Query {
    superheroes: [Superhero]
    missions: [Mission]
    superhero(id: ID!): Superhero
    mission(id: ID!): Mission
  }

  type Mutation {
    addSuperhero(newSuperhero: NewSuperheroInputs!): Superhero
    deleteSuperhero(id: ID!): Superhero
    updateSuperhero(id: ID!, edits: EditSuperheroInputs!): Superhero
  }

  input NewSuperheroInputs {
    name: String
    secretIdentity: String
    superpowers: [String]
  }

  input EditSuperheroInputs {
    secretIdentity: String
    superpowers: [String]
  }
`;

export { typeDefs };
