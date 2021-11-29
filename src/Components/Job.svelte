<script>
  export let title = ""
  export let company = null
  export let startDate = ""
  export let endDate = ""
  export let summaryText = ""
  export let detailsText = ""
</script>

<div>

  <div class="flex justify-between sm:items-center flex-col sm:flex-row sm:p-2 sm:bg-gray-100 sm:-mx-2">
    <h4 class="font-medium text-pink-500 text-xl">{title}</h4>
    {#if company}
      <span class="mx-2 text-gray-300 text-xl">/</span>
      <h5 class="text-gray-800 font-medium sm:text-xl sm:text-gray-400 sm:font-normal">{company}</h5>
    {/if}
    <span class="sm:mt-0 text-gray-500 flex-1 sm:text-right">{startDate} - {endDate}</span>
  </div>

  <div class="mt-2 flex flex-col space-y-2 text-justify">
    <p class="font-semibold text-gray-600">{summaryText}</p>
    <p>{detailsText}</p>
  </div>
</div>