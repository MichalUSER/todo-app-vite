<script>
    import { fly } from "svelte/transition";
    import { toggle } from "./TailwindTheme.svelte";
    import { todos, settings } from "../stores";

	let msg = "";

    function save() {
        $settings.visible = false;
        localStorage.setItem("todos", JSON.stringify($todos));
        localStorage.setItem("settings", JSON.stringify($settings));
    }
    function toggleDescription() {
        $settings.description = !$settings.description;
    }
	function toggleCompletionStyle() {
        $settings.completionStyle = !$settings.completionStyle;
	}

	async function send() {
		let response = await fetch(`http://localhost:8080/add/michal`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify($todos[0]),
		});
		msg = await response.json();
		msg = msg.status;
    }
</script>

<!-- 
Todo
    - Turn it into a checkbox - done, maybe missing red/green colors
-->

<nav
    transition:fly={{
        duration: 200,
        x: 200,
        opacity: 0.4,
    }}
>
    <h1>Settings</h1>
    <button class="button1" on:click={toggle}>🌙</button>
    <div class="checkbox_div">
        <div
            class="checkbox"
            class:checkbox_toggled={$settings.description}
            on:click={toggleDescription}
        />
        <p>Todos description</p>
    </div>
    <div class="checkbox_div">
		<div 
		 	class="checkbox" 
			class:checkbox_toggled={$settings.completionStyle}
			on:click={toggleCompletionStyle}
		 />
        <p>Strike through todo name</p>
    </div>
	<button class="button1 mt-10" on:click={send}>Send to server</button>
	<p>{msg}</p>
	<button 
		class="button1 fixed bottom-5 font-semibold"
		on:click={save}
	>
		Save stuff
	</button>
</nav>

<style lang="postcss">
    nav {
        @apply bg-indigo-300 top-0 right-0 h-screen w-screen md:w-auto px-16 py-8;
		@apply flex flex-col items-center fixed z-10;
    }

    h1 {
        @apply text-custom-indigo text-4xl m-5;
    }
    .checkbox_div {
        @apply flex justify-start items-center h-4 mt-10;
    }
    .checkbox {
        @apply h-6 w-6 mr-2 rounded border border-indigo-900 cursor-pointer bg-transparent transition;
    }
    .checkbox_toggled {
        @apply bg-gray-900;
    }
</style>
