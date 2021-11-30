<script>
  export let title = ""
  export let company = null
  export let startDate = ""
  export let endDate = ""
  export let skills = []
  export let detailsText = ""
</script>

<div>

  <div class="flex justify-between sm:items-center flex-col sm:flex-row sm:px-2 sm:py-1 sm:rounded-sm sm:-mx-2 tracking-wide sm:bg-gradient-to-r sm:from-gray-100 sm:to-white">
    <h4 class="font-medium text-cv text-lg">{title}</h4>
    {#if company}
      <span class="hidden sm:flex mx-2 text-gray-300 text-lg">/</span>
      <h5 class="text-gray-800 font-medium sm:text-lg sm:text-gray-500 sm:font-normal">{company}</h5>
    {/if}
    <span class="sm:mt-0 text-gray-600 flex-1 sm:text-right">{startDate} - {endDate}</span>
  </div>

  <div class="mt-2 sm:mt-4 flex flex-col space-y-4 text-justify">
    <p>{detailsText}</p>
    <ul class="flex text-xs text-white font-semibold tracking-wider flex-wrap">
      {#each skills.sort() as skill}
        <li class="p-1 sm:px-2 sm:py-1 bg-cv rounded-sm opacity-80 mr-2 mb-2">{skill}</li>
      {/each}
    </ul>
  </div>
</div>