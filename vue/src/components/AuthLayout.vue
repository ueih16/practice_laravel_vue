<template>
    <div class="w-full h-screen bg-gradient-to-br from-red-50 via-violet-50 to-green-50">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full rounded-lg bg-none md:mt-0 sm:max-w-md xl:p-0">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>
