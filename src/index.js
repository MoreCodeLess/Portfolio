import express from 'express';
import { graphqlHTTP } from "express-graphql";

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: 'HELLO WORLD',
    })
});

const schema = {};

app.use('/api', graphqlHTTP({
    graphiql: true,
    schema: schema,
}));

app.listen(3000, () => console.log('Server on port 3000'));