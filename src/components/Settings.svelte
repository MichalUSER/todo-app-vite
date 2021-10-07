<script>
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { toggle } from "./TailwindTheme.svelte";
    import { todos, settings } from "../stores";

    function save() {
        $settings.visible = false;
        localStorage.setItem("todos", JSON.stringify($todos));
        localStorage.setItem("settings", JSON.stringify($settings));
    }
    function toggleDescription() {
        $settings.description = !$settings.description;
    }
</script>

<!-- 
Todo
    - Add navbar animation - done
    - Show/Hide todo's description - done
    - Turn it into a checkbox - almost done, missing red/green colors
-->

<nav
    transition:fly={{
        duration: 100,
        x: 200,
        opacity: 0.4,
        easing: quintOut,
    }}
>
    <h1>Settings</h1>
    <button on:click={toggle}>Switch theme</button>
    <div class="checkbox_div">
        <div class="checkbox" on:click={toggleDescription} />
        <p>Toggle todo's description</p>
    </div>
    <button class="save" on:click={save}>Save stuff</button>
</nav>

<style lang="postcss">
    nav {
        @apply fixed top-0 right-0 h-screen w-screen md:w-auto px-16 py-8 bg-indigo-300 flex flex-col items-center;
    }

    h1 {
        @apply text-custom-indigo text-4xl m-5;
    }

    button {
        @apply px-6 py-1 mt-5 rounded border-2 border-opacity-0 text-lg font-medium bg-indigo-400 cursor-pointer focus:border-indigo-600 focus:outline-none;
    }
    .save {
        @apply fixed bottom-5 font-semibold;
    }
    .checkbox_div {
        @apply flex justify-start items-center h-4 mt-10;
    }
    .checkbox {
        @apply h-8 w-8 mr-2 rounded border-2 border-opacity-0 cursor-pointer bg-indigo-400;
    }
</style>
