<template>
  <div style="padding:2rem">
    <resources-table-component></resources-table-component>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import ResourcesTableComponent from "@/resources/components/resources-table.component.vue";

export default defineComponent({
  components: {ResourcesTableComponent},
})
</script>

<style lang="scss" scoped></style>