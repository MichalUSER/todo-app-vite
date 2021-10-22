<style global type="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		@apply bg-white dark:bg-custom-black transition;
	}
	h1 {
		@apply dark:text-white;
	}
	input {
		@apply dark:text-white dark:border-indigo-500 dark:focus:border-indigo-300;
	}

	.link {
		@apply m-4 text-3xl text-black dark:text-white;
	}

	.button1 {
		@apply px-6 py-1 rounded border-2 border-opacity-0 bg-indigo-400 cursor-pointer focus:border-indigo-600 focus:outline-none;
	}
</style>
