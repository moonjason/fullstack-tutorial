const { gql } = require('apollo-server'); // importing gql from ApolloServer

const typeDefs = gql`
    # your schema will go here 
    # language we use to write schema will be GraphQL's schema definition language (SDL)

    # all types in GraphQL are nullable by default
    # add ! to indicate that query will always return data 
    type Query { # query type: entry point into schema, describes what data we can fetch 
        launches: [Launch]! #this query returns an array of launches, which will never be null
        launch(id: ID!): Launch #single launch id 
        # Queries for the current user
        me: User #current user's data 
    }
    # to define what properties are exposed by "Launch" and "User" we neded to define a graphQL object type 
    type Launch {
        id: ID! # scalar type: ID, String, Boolean, or Int, there are also custom scalars like Date 
        site: String
        mission: Mission  # Mission, and Rocket are object types, defined below 
        rocket: Rocket 
        isBooked: Boolean!
    }
    type Rocket { 
        id: ID!
        name: String
        type: String
    }
    type User {
        id: ID!
        email: String!
        trips: [Launch]!
    }
    type Mission {
        name: String
        missionPatch(size: PatchSize): String
    }
    enum PatchSize {
        SMALL
        LARGE
    }
    #define Mutation type 
    #Mutation type is the entry point into our graph for modifying data. 
    # just like Query type, the Mutation type is a special object type 
    type Mutation {
        # if false, booking trips failed -- check errors
        bookTrips(launchIDs: [ID]!): TripUpdateResponse! 

        # if false, cancellation failed -- check errors
        cancelTrip(launchID: ID!): TripUpdateResponse!

        login(email: String): String # login token
        # both the bookTrips and cancelTrip mutations take an argument and return a TripUpdateResponse
    }
    type TripUpdateResponse {
        success: Boolean!
        message: String
        launches: [Launch]
    }
`

module.exports = typeDefs; 
