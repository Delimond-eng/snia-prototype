<template>
  <!-- Search Box -->
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="hero-search h-[100vh] overflow-hidden">
    <div class="content">
      <div class="container sm:text-center lg:text-center">
        <h1 class="text-[38px] font-semibold tracking-tight text-yellow-50">
          <span class="block xl:inline">Tout ce que vous voulez savoir à <br> propos des activités agricoles de la <br>
          </span>
          <span
            class="block text-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-yellow-300 to-red-500  xl:inline shadow-sm ">République
            Démocratique du Congo</span>
        </h1>
        <div class="mt-1 flex rounded-md shadow-sm">
          <input type="text" name="company-website" id="company-website"
            class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Recherche...">
        </div>
      </div>
    </div>
    <div class="image-overlay">
    <img src="assets/img/congo-dr.svg" class="img-responsive" alt="">
    </div>
  </div>

</template>

<script>
  export default {
    name: "homePage",
  };
</script>