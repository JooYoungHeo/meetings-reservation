import Koa from 'koa';
import {ApolloServer} from 'apollo-server-koa';
import models from '../models';

import {typeDefs} from './Schema';
import {resolvers} from './Resolvers';

const app = new Koa();
const port = 4000;

const server = new ApolloServer({typeDefs, resolvers, context: {models}});

server.applyMiddleware({app});

app.listen(port, () => {
    console.log(`graphql server start #${port}`);
});