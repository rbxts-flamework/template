import { Networking } from "@flamework/networking";

// Client -> Server
interface ServerEvents {}

interface ServerFunctions {}

// Server -> Client
interface ClientEvents {}

interface ClientFunctions {}

export const GlobalEvents = Networking.createEvent<ServerEvents, ClientEvents>();
export const GlobalFunctions = Networking.createFunction<ServerFunctions, ClientFunctions>();
