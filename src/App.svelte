<script>
  import "./index.css"
  import Header from './Components/Header.svelte'
  import Contact from './Components/Contact.svelte'
  import Experience from './Components/Experience.svelte'

  import { details } from '/companies/apple'

</script>

<main class="w-full font-inter p-8 leading-6 text-sm">
  <div class="container mx-auto lg:max-w-4xl print:mx-0 print:max-w-none">
    <Header headerParas={details.headerParas} />
    <hr class="mt-8 sm:mt-12"/>
    <Contact />
    <hr class="mt-8 sm:mt-12"/>
    <Experience jobs={details.jobs} hideSkills={details.hideSkills}/>
  </div>
</main>