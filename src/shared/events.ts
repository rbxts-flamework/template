import { Networking } from "@flamework/networking";

interface ServerEvents {}

interface ClientEvents {}

export const GlobalEvents = Networking.createEvent<ServerEvents, ClientEvents>();
