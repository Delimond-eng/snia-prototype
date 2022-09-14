<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <nav class="bg-gray-800 border-b-2 border-b-cyan-500">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 lg:py-1">
            <div class="relative flex h-16 items-center justify-between">

                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <router-link :to="{name:'Home'}" @click="updateRoute()" class="logo">SNIA</router-link>
                    </div>

                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                    <!-- Profile dropdown -->
                    <div class="relative ml-3">
                        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0" v-if="msg=='home'">
                            <router-link :to="{name:'Filter'}" @click="updateRoute()" 
                                class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-cyan-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                Cartographier
                                les activités agricoles</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pt-2 pb-3">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    aria-current="page">Dashboard</a>

                <a href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

                <a href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                <a href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
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