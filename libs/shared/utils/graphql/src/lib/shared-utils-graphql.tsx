import { config } from "@belajar-nx/shared/environments";
import { GraphQLClient } from "graphql-request";

export const Graphql = new GraphQLClient(config.api.SERVER_GRAPHQL);
