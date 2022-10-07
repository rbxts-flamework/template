import { Networking } from "@flamework/networking";

// Client -> Server events
interface ServerEvents {}

// Client -> Server functions
interface ServerFunctions {}

// Server -> Client events
interface ClientEvents {}

// Server -> Client functions
interface ClientFunctions {}

export const GlobalEvents = Networking.createEvent<ServerEvents, ClientEvents>();
export const GlobalFunctions = Networking.createFunction<ServerFunctions, ClientFunctions>();
