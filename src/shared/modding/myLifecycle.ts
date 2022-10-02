import { Modding } from "@flamework/core";

export interface OnMyLifeCycle {
	onMyLifeCycle(): void;
}

const listeners = new Set<OnMyLifeCycle>();
Modding.onListenerAdded<OnMyLifeCycle>((object) => listeners.add(object));
Modding.onListenerRemoved<OnMyLifeCycle>((object) => listeners.delete(object));

for (const listener of listeners) {
	task.spawn(() => listener.onMyLifeCycle());
}
