<script>
    import { fly } from "svelte/transition";
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
    - Turn it into a checkbox - almost done, missing red/green colors - done
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
        <div class="checkbox" />
        <p>Completion background</p>
    </div>
    <button class="button1 fixed bottom-5 font-semibold" on:click={save}
        >Save stuff</button
    >
</nav>

<style lang="postcss">
    nav {
        @apply fixed top-0 right-0 h-screen w-screen md:w-auto px-16 py-8 bg-indigo-300 flex flex-col items-center;
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
