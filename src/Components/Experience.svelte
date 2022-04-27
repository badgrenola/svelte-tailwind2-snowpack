<script>
  import Job from './Job.svelte'
  export let jobs = []
</script>
<section>
  <h3 class="mt-8 text-3xl text-cv tracking-wide">Experience</h3>
  <div class="mt-4 sm:mt-8 flex flex-col space-y-12">
    {#each jobs as job}
      <Job {...job} />
    {/each}
  </div>
</section>