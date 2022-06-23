<script>
  import "./index.css"
  import Header from './Components/Header.svelte'
  import Experience from './Components/Experience.svelte'
  import Personal from './Components/Personal.svelte'

  import { details } from '/companies/apple'

</script>

<main class="w-full font-inter p-8 text-sm print:text-xs leading-6 print:leading-5">
  <div class="container mx-auto lg:max-w-4xl print:mx-0 print:max-w-none">
    <Header headerParas={details.headerParas} />
    <hr class="mt-8 sm:mt-12 print:mt-6"/>
    <Experience jobs={details.jobs} hideSkills={details.hideSkills}/>
    <hr class="mt-8 sm:mt-12 print:mt-6"/>
    <Personal />
  </div>
</main>