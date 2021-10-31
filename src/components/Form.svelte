<script>
import { todos, settings } from "../stores.js";

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

<style type="postcss">
.form_input {
	@apply text-lg bg-transparent mx-4 px-3 py-2 focus:outline-none transition;
	@apply border border-indigo-600 focus:border-indigo-300;
}
</style>
