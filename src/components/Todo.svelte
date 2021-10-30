<script>
	import { todos, settings } from "../stores.js";
	import Settings from "./Settings.svelte";
	import TodoItem from "./TodoItem.svelte";

	let todoTitle = "";
	let todoDescription = "";
	let defaultHeight = 40;

	function add() {
		if (todoTitle.length != 0) {
			$todos = [
				...$todos,
				{
					title: todoTitle,
					description: todoDescription,
					completed: false,
					height: defaultHeight,
				},
			];
			todoTitle = "";
			todoDescription = "";
		}
	}
</script>

<svelte:head>
	<title>Todos</title>
</svelte:head>

{#if $settings.visible}
	<Settings />
{:else}
	<button
		class="toggle"
		on:click={() => ($settings.visible = !$settings.visible)}>⚙️</button
	>
{/if}

<header>
	<h1 class="text-4xl dark:text-white">Todo app</h1>
</header>
<main>
	<div class="flex flex-col items-center">
		<div class="flex flex-col items-center md:flex-row">
			<input
				type="text"
				class="form_input dark:text-white dark:border-indigo-500 dark:focus:border-indigo-300"
				placeholder="Title"
				bind:value={todoTitle}
				on:keydown={(e) => e.key === "Enter" && add()}
			/>
			<button class="button1 mt-2" on:click={add}>Add</button>
		</div>
	</div>

	<div class="mt-8 flex flex-col items-center">
		{#each $todos as todo, index}
			<TodoItem
				{...todo}
				index={index}
			/>
		{/each}
	</div>
</main>

<style type="postcss">
	header {
		@apply mt-10 flex flex-col items-center;
	}
	main {
		@apply mt-8 md:mt-32 flex flex-col items-center;
	}

	.form_input {
		@apply mx-4 text-lg border border-indigo-600 bg-transparent px-3 py-2 focus:outline-none focus:border-indigo-300 transition;
	}

	.toggle {
		@apply text-2xl text-white cursor-pointer fixed top-0 right-0 m-4;
	}
</style>
