<script>
	import { todos, settings } from "../stores.js";
	import Settings from "./Settings.svelte";
	import TodoItem from "./TodoItem.svelte";
	import Form from "./Form.svelte";
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
	<Form />
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

	.toggle {
		@apply text-2xl text-white cursor-pointer fixed top-0 right-0 m-4;
	}
</style>
