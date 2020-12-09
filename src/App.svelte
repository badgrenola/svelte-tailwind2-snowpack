<script>
  import "./index.css"
  import { AppStore } from './Store/Store'

  $: console.log("The store changed!")
</script>

<style>
</style>

<main class="w-full h-full flex">
  <div class="w-full h-full flex flex-col sm:flex-row">

    <div class="flex-1 h-full flex justify-center items-center">
      <span class="font-extrabold text-9xl">
        {$AppStore.count}
      </span>
    </div>

    <div class="flex-1 h-full flex space-x-4 justify-center items-center">
      <button 
        class="w-16 h-16 focus:outline-none opacity-50 hover:opacity-100"
        on:click={AppStore.increaseCount}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      <button 
        class="w-16 h-16 focus:outline-none opacity-50 hover:opacity-100"
        on:click={AppStore.decreaseCount}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      <button 
        class="w-16 h-16 focus:outline-none opacity-50 hover:opacity-100"
        on:click={AppStore.resetCount}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>
    </div>

  </div>
</main>
