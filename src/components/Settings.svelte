<script>
    import { toggle } from "./TailwindTheme.svelte";
    import { settings } from "../stores";

    function exit() {
        $settings.visible = false;
    }
    function toggleDescription() {
        $settings.description = !$settings.description;
    }
</script>

<!-- 
Todo
    - Show/Hide todo's description
-->

<nav>
    <h1>Settings</h1>
    <button on:click={toggle}>Switch theme</button>
    <button on:click={toggleDescription}>Toggle todo's description</button>
    <button on:click={exit}>Exit</button>
</nav>

<style lang="postcss">
    nav {
        @apply fixed top-0 right-0 h-screen px-16 py-8 bg-indigo-300 flex flex-col items-center;
    }

    h1 {
        @apply text-custom-indigo text-4xl m-5;
    }

    button {
        @apply px-6 py-1 mt-5 rounded border-2 border-opacity-0 text-lg font-semibold bg-indigo-400 cursor-pointer focus:border-indigo-600 focus:outline-none;
    }
</style>
