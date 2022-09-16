<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <nav class="bg-gray-900 border-b-2 border-b-cyan-500">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 lg:py-1">
            <div class="relative flex h-16 items-center justify-between">

                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <router-link :to="{name:'Home'}" @click="updateRoute()" class="logo text-white">SNIA</router-link>
                    </div>

                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                    <!-- Profile dropdown -->
                    <div class="relative ml-3">
                        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0" v-if="msg=='home'">
                            <router-link :to="{name:'Filter'}" @click="updateRoute()" 
                                class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border-none border-transparent bg-cyan-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                Cartographier
                                les activités agricoles</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    </nav>
</template>

<script>
    export default {
        name: "NavbarHeader",
        props: {
            msg:String
        }
    
    }
</script>