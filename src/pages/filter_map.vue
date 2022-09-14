<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
  <div>
  <nav-header/>
    <!--
    Mobile menu

    Off-canvas menu for mobile, show/hide based on off-canvas menu state.
  -->
    <!-- Links -->
    <div class="mt-2">

      <!-- 'Women' tab panel, show/hide based on tab state. -->
      <div class="space-y-10 px-4 pt-10 pb-8">
        <div class="relative inset-x-0 top-full text-sm text-gray-500">
          <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
          <div class="absolute inset-0 top-0 bg-white shadow" aria-hidden="true"></div>

          <div class="relative bg-white">
            <div class="mx-auto max-w-7xl px-8 pb-4">
              <div class="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                <div class="col-start-2 grid grid-cols-1 gap-x-8">
                  <div class=" w-full px-4 sm:px-6">
                    <div
                      class="h-full w-full px-4 flex flex-col align-middle justify-center border-4 border-dashed rounded-[15px] border-gray-200"
                      aria-hidden="true">
                      <h2 class="text-center text-red-900">Veuillez sélectionner dont vous voulez obtenir les
                        informations</h2>
                    </div>
                  </div>
                </div>
                <div class="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                  <div>
                    <p id="Clothing-heading" class="font-medium text-gray-900">Clothing</p>
                    <div class="mt-4 space-y-4">
                      <div class="flex items-start">
                        <div class="flex h-5 items-center">
                          <input id="comments" name="comments" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="comments" class="font-medium text-gray-700">Comments</label>

                        </div>
                      </div>
                      <div class="flex items-start">
                        <div class="flex h-5 items-center">
                          <input id="candidates" name="candidates" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="candidates" class="font-medium text-gray-700">Candidates</label>

                        </div>
                      </div>
                      <div class="flex items-start">
                        <div class="flex h-5 items-center">
                          <input id="offers" name="offers" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="offers" class="font-medium text-gray-700">Offers</label>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p id="Clothing-heading" class="font-medium text-gray-900">Clothing</p>
                    <div class="mt-4 space-y-4">
                      <div class="flex items-start">
                        <div class="flex h-5 items-center">
                          <input id="comments" name="comments" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="comments" class="font-medium text-gray-700">Comments</label>

                        </div>
                      </div>
                      <div class="flex items-start">
                        <div class="flex h-5 items-center">
                          <input id="candidates" name="candidates" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="candidates" class="font-medium text-gray-700">Candidates</label>

                        </div>
                      </div>
                      <div class="flex items-start">
                        <div class="flex h-5 items-center">
                          <input id="offers" name="offers" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="offers" class="font-medium text-gray-700">Offers</label>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p id="Clothing-heading" class="font-medium text-gray-900">Clothing</p>
                    <div class="mt-4 space-y-4">
                      <div class="flex items-start">
                        <div class="flex h-5 items-center">
                          <input id="comments" name="comments" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="comments" class="font-medium text-gray-700">Comments</label>

                        </div>
                      </div>
                      <div class="flex items-start">
                        <div class="flex h-5 items-center">
                          <input id="candidates" name="candidates" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="candidates" class="font-medium text-gray-700">Candidates</label>

                        </div>
                      </div>
                      <div class="flex items-start">
                        <div class="flex h-5 items-center">
                          <input id="offers" name="offers" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="offers" class="font-medium text-gray-700">Offers</label>

                        </div>
                      </div>
                    </div>
                  </div>

                 
                </div>
              </div>
              <div class="mt-3 mb-3 sm:mt-0 sm:ml-3">
              <router-link :to="{name:'map'}" class="flex shadow items-center transition-all duration-500 justify-center rounded-md border border-transparent bg-cyan-100 px-8 py-3 text-base font-medium text-gray-800 hover:bg-cyan-200 md:py-4 md:px-10 md:text-lg"> Preview result</router-link>
            </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'FilterPage',
    data() {
      return {}
    },
  }
</script>