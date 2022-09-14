<template>
<div>
<nav-header/>
    <div class="bg-white">
            <div class="mx-auto mt-0 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex items-baseline justify-between border-b border-gray-200 pt-6 pb-6">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900">Map Reporting</h1>
                    <router-link :to="{name:'stats'}" class="flex items-center justify-center rounded-md border border-transparent transition-all duration-500 px-4 py-2 text-sm font-medium bg-cyan-500 text-white shadow-sm hover:text-cyan-800 hover:bg-cyan-100">Statistics preview</router-link>
                </div>
                <section aria-labelledby="products-heading" class="pt-6 pb-24">
                   
                    <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-1">
                       

                        <!-- Product grid -->
                        <div class="lg:col-span-3">
                            <!-- Replace with your content -->
                            <div class="rounded-lg border-4 border-dashed border-gray-200 lg:h-[100vh]">
                            </div>
                            <!-- /End replace -->
                        </div>
                    </div>
                </section>
            </div>
        </div>
</div>

</template>

<script>
    export default {
        name: 'MapPreview'
    }
</script>