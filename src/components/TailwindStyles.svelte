<style global type="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		@apply bg-white dark:bg-custom-black transition;
	}

	.button1 {
		@apply px-6 py-1 rounded border-2 border-opacity-0 bg-indigo-400 cursor-pointer focus:border-indigo-600 focus:outline-none;
	}
</style>
