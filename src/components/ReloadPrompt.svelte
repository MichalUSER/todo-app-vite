<script>
    import { useRegisterSW } from "virtual:pwa-register/svelte";

    const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
        onRegistered(swr) {
            console.log(`SW registered: ${swr}`);
        },
        onRegisterError(error) {
            console.log("SW registration error", error);
        },
    });

    function close() {
        offlineReady.set(false);
        needRefresh.set(false);
    }

    $: toast = $offlineReady || $needRefresh;
</script>

{#if toast}
    <div class="pwa-toast" role="alert">
        <div class="message">
            {#if $offlineReady}
                <span> App ready to work offline </span>
            {:else}
                <span>
                    Update available
                </span>
            {/if}
        </div>
        {#if $needRefresh}
            <button on:click={() => updateServiceWorker(true)}> Reload </button>
        {/if}
        <button on:click={close}>Close</button>
    </div>
{/if}

<style type="postcss">
    .pwa-toast {
        @apply fixed bottom-0 right-0 m-4 px-24 py-6 border border-indigo-500 rounded bg-transparent flex items-center flex-col;
    }
    .pwa-toast .message {
        @apply my-1 text-2xl font-medium text-white;
    }
    .pwa-toast button {
        @apply px-6 py-1 mt-2 rounded border text-base bg-indigo-300 border-indigo-300 cursor-pointer focus:border-indigo-500 focus:outline-none;
    }
</style>
