<script>
  export let headerParas
</script>

<section class="flex flex-col space-y-8">
  <div class="flex flex-col space-y-8 items-center sm:items-start">
    <img
      src="/profile.jpg"
      alt="Matt Brealey's head"
      class="w-24 h-24 rounded-full bg-gray-700"
    />
    <h1 class="text-5xl text-cv font-semibold tracking-tight text-center sm:text-left">Matt Brealey</h1>
  </div>
  <div class="flex flex-col space-y-2">
    {#each headerParas as para}
      <p>{@html para}</p>
    {/each}
  </div>  
</section>
<!-- <p>Whilst a large percentage of my freelance work currently involves both the Design and VFX industries, over the past several years I have also been using my skillset to develop novel applications to both process and increase the accessibility of publically available raw space imagery. Once such example of this is AreoBrowser, a web-app for viewing thousands of 3D models of the Martian surface.</p> -->