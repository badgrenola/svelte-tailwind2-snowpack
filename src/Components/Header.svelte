<script>
  export let headerParas
</script>

<section class="flex flex-col space-y-8 print:space-y-6">

  <!-- Name + Photo -->
  <div class="flex flex-col space-y-8 items-center sm:items-start text-cv font-semibold tracking-tight print:flex-row print:space-y-0 print:justify-between print:items-center">
    <h1 class="hidden print:flex text-left text-4xl">Matt Brealey</h1>
    <img
      src="/profile.jpg"
      alt="Matt Brealey's head"
      class="w-24 h-24 rounded-full bg-gray-700 print:w-16 print:h-16"
    />
    <h1 class="flex print:hidden text-5xl text-cv font-semibold tracking-tight text-center sm:text-left">Matt Brealey</h1>
  </div>

  <!-- Contact -->
  <div class="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 print:items-start print:flex-row print:space-y-0 print:space-x-8 sm:space-x-8">
    <div class="flex space-x-4 tracking-wide">
      <div class="flex flex-col font-bold space-y-2 text-cv">
        <span>Location</span>
        <span>Web</span>
        <div class="flex flex-col space-y-2 sm:hidden print:hidden">
          <span>Email</span>
          <span>Phone</span>
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <span>Bristol, UK</span>
        <span>mattbrealey.com</span>
        <div class="flex flex-col space-y-2 sm:hidden print:hidden">
          <span>matt@mattbrealey.com</span>
          <span>+44 7846 639 461</span>
        </div>
      </div>
    </div>
    <div class="hidden sm:flex print:flex space-x-4">
      <div class="flex flex-col font-bold space-y-2 text-cv">
        <span>Email</span>
        <span>Phone</span>
      </div>
      <div class="flex flex-col space-y-2">
        <span>matt@mattbrealey.com</span>
        <span>+44 7846 639 461</span>
      </div>
    </div>
  </div>

  <!-- Paras -->
  <div class="flex flex-col space-y-2">
    {#each headerParas as para}
      <p>{@html para}</p>
    {/each}
  </div>  
</section>
<!-- <p>Whilst a large percentage of my freelance work currently involves both the Design and VFX industries, over the past several years I have also been using my skillset to develop novel applications to both process and increase the accessibility of publically available raw space imagery. Once such example of this is AreoBrowser, a web-app for viewing thousands of 3D models of the Martian surface.</p> -->