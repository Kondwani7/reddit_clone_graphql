import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: `${process.env.STEPZEN_API_LINK}`,
    headers: {
        Authorization:`Apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`
    },
    cache: new InMemoryCache(),

});

export default client;