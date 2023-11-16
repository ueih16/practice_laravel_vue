<template>

</template>

<script setup>
    import { onMounted } from "vue";
    import { Datepicker, Input, initTE } from "tw-elements";

    onMounted(() => {
        initTE({ Datepicker, Input });
    });
</script>
