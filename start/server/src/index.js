const { ApolloServer } = require('apollo-server'); // importing ApolloServer class from apollo-server
const typeDefs = require('./schema'); // import schema from src/schema.js 

const server = new ApolloServer({ typeDefs }); 
// creating instance of ApolloServer and pass schema to the typeDefs prop on the cofiguration object 

// writing your graph's schema
// schema's are at their best when they are designed around the needs of the clients taht are consuming them
// schemas sit between clients and underlying services, middle ground for front and backend teams 
// schema first development = agree upon teh schema first before any API  development begins 


// What does our app need ?
// fetch all upcoming rocket launches 
// fetch a specific launch by ID 
// login the user
// book launch trips if the user is logged in
// cancel launch trips if the user is logged in  -- go to ./schema.js

server.listen().then(({ url }) => {
    console.log(`🚀 server ready at ${url}`)
})