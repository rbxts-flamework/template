import { Networking } from "@flamework/networking";

/**
 * Server Events
 * @description Client -> Server events
 */
interface ServerEvents {}

/**
 * Server Functions
 * @description Client -> Server functions
 */
interface ServerFunctions {}

/**
 * Client Events
 * @description Server -> Client events
 */
interface ClientEvents {}

/**
 * Client Functions
 * @description Server -> Client functions
 */
interface ClientFunctions {}

// Network:
export const GlobalEvents = Networking.createEvent<ServerEvents, ClientEvents>();
export const GlobalFunctions = Networking.createFunction<ServerFunctions, ClientFunctions>();
