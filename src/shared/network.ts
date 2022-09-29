import { Networking } from "@flamework/networking";

/*

	Server Recievers
	Network messages that can be sent from clients and recieved from the server

*/
interface ServerEvents {}

interface ServerFunctions {}

/*

	Client Recievers
	Network messages that will be sent from the server and recieved by client(s)

*/
interface ClientEvents {}

interface ClientFunctions {}

/*

	Initialization
	Creates and links the networking Remotes in ReplicatedStorage.

*/
export const GlobalEvents = Networking.createEvent<ServerEvents, ClientEvents>();
export const GlobalFunctions = Networking.createFunction<ServerFunctions, ClientFunctions>();
