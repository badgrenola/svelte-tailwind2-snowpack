<script>
  export let title = ""
  export let company = null
  export let startDate = ""
  export let endDate = ""
  export let skills = []
  export let detailsText = ""
  export let hideSkills = false
  export let pageBreak = false
</script>

<div style={pageBreak ? "page-break-after: always; page-break-inside: avoid;" : ""}>

  <!-- Stack -->
  <div class="flex justify-between flex-col tracking-wide sm:hidden print:hidden">
    <h4 class="font-medium text-cv text-lg">{title}</h4>
    {#if company}
      <span class="hidden mx-2 text-gray-300 text-lg">/</span>
      <h5 class="text-gray-800 font-medium ">{company}</h5>
    {/if}
    <span class="text-gray-600 flex-1">{startDate} - {endDate}</span>
  </div>

  <!-- Bar -->
  <div class="hidden justify-between items-center flex-row px-2 py-1 rounded-sm -mx-2 tracking-wide bg-gradient-to-r from-gray-100 to-white sm:flex print:flex">
    <h4 class="font-medium text-cv text-lg print:text-sm">{title}</h4>
    {#if company}
      <span class="flex mx-2 text-gray-300 text-lg print:text-sm">/</span>
      <h5 class="text-lg print:text-sm text-gray-500 font-normal">{company}</h5>
    {/if}
    <span class="mt-0 text-gray-600 flex-1 text-right">{startDate} - {endDate}</span>
  </div>

  <div class="mt-2 sm:mt-4 flex flex-col space-y-4 text-justify print:mt-2">
    <p>{@html detailsText}</p>
    {#if !hideSkills}
      <ul class="flex text-xs text-white font-semibold tracking-wider flex-wrap">
        {#each skills.sort() as skill}
          <li class="p-1 sm:px-2 sm:py-1 bg-cv rounded-sm opacity-80 mr-2 mb-2">{skill}</li>
        {/each}
      </ul>
    {/if}
  </div>
</div>