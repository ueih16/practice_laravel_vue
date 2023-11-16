<template>
    <h1
        class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white"
    >
        Register
    </h1>
    <form class="space-y-4 md:space-y-6" action="#">
        <div>
            <label for="name" class="block mb-2 text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                Fullname
            </label>
            <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Fullname"
                required="true"
                autocomplete="off"
            />
        </div>
        <div>
            <label for="email" class="block mb-2 text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                Email address
            </label>
            <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email address"
                required="true"
                autocomplete="off"
            />
        </div>
        <div>
            <label for="password" class="block mb-2 text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                Password
            </label>
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="true"
                autocomplete="off"
            />
        </div>
        <div>
            <label for="password_confirmation" class="block mb-2 text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                Password confirmation
            </label>
            <input
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                placeholder="Password confirmation"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="true"
                autocomplete="off"
            />
        </div>
        <button
            type="submit"
            class="w-full text-white bg-black hover:opacity-70 rounded-lg text-sm leading-6 font-semibold px-5 py-2.5 text-center"
        >
            Register
        </button>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Have an account?
            <router-link :to="{ name: 'Login' }" class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Sign in
            </router-link>
        </p>
    </form>
</template>

<script setup></script>
