<script>
  import "./index.css"
  import Header from './Components/Header.svelte'
  import Experience from './Components/Experience.svelte'

  import { isotropix } from '/isotropix'

</script>

<main class="w-full font-inter p-8 leading-6 text-sm">
  <div class="container mx-auto lg:max-w-4xl">
    <Header headerParas={isotropix.headerParas} />
    <hr class="mt-8 sm:mt-12"/>
    <Experience jobs={isotropix.jobs} />
  </div>
</main>