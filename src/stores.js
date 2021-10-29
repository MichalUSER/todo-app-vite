import { writable } from "svelte/store";

let storedTodos = [];
if (localStorage.getItem("todos") !== null) {
    storedTodos = JSON.parse(localStorage.getItem("todos"));
}

let storedSettings = {
    visible: false,
    description: true,
	completionStyles: true
};
if (localStorage.getItem("settings") !== null) {
    storedSettings = JSON.parse(localStorage.getItem("settings"));
}

export const { todos, settings } = {
    todos: writable(storedTodos),
    settings: writable(storedSettings)
};
