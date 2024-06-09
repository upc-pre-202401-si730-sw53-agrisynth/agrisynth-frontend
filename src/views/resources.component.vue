<template>

    <resources-table-component></resources-table-component>

</template>

<script>
import { defineComponent } from 'vue'
import ResourcesTableComponent from "@/resources/pages/resources-table.component.vue";

export default defineComponent({
  components: { ResourcesTableComponent },
})
</script>

<style scoped></style>