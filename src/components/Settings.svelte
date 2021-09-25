<script>
    import { fade } from "svelte/transition";
</script>

<div transition:fade={{ duration: 100 }}>
    <p>Settings</p>
</div>

<style lang="postcss">
    p {
        @apply text-2xl cursor-pointer fixed top-0 right-0 m-4;
    }
</style>
