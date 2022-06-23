<script>
  import Job from './Job.svelte'
  export let jobs = []
  export let hideSkills = false
</script>

<section>
  <h3 class="mt-8 text-3xl text-cv tracking-wide print:text-2xl">Experience</h3>
  <div class="mt-4 sm:mt-8 space-y-12 print:space-y-8">
    {#each jobs as job}
      <Job {...job} {hideSkills}/>
    {/each}
  </div>
</section>