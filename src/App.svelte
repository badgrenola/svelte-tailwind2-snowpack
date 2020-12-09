<script>
  import "./index.css"
  import Counter from './Components/Counter.svelte'
  import Controls from './Components/Controls.svelte'
</script>

<style>
</style>

<main class="w-full h-full flex">
  <div class="w-full h-full flex flex-col sm:flex-row">
    <Counter />
    <Controls />
  </div>
</main>
