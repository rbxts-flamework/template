import { Flamework } from "@flamework/core";

Flamework.addPaths("src/server/services");
Flamework.addPaths("src/server/components");
Flamework.addPaths("src/server/modding");

Flamework.addPaths("src/shared/components");
Flamework.addPaths("src/shared/modding");

Flamework.ignite();
