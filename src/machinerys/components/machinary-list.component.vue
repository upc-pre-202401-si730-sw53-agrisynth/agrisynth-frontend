<script>
import MachinaryCard from "@/machinerys/components/machinary-card.component.vue";
import { defineComponent } from "vue";
import { getAllMachinary } from "@/machinerys/services/machinary.api.service.js";
export default defineComponent({

  name: "machinary-list",
  components: { MachinaryCard },
  data() {
    return {
      machinarys: [],
      searchQuery: "",
    };
  },
  async mounted() {
    try {
      this.machinarys = await getAllMachinary();
    } catch (error) {
    }
  }
})


</script>

<template>
  <div class="body">
    <div class="machinery-list">
      <h1 class="title">Available Machineries</h1>
      <div class="card flex flex-wrap justify-content-end gap-3">
        <pv-icon-field iconPosition="right">
          <pv-icon class="pi pi-search"></pv-icon>
          <pv-input-text v-model="searchQuery" placeholder="Search" />
        </pv-icon-field>
      </div>
    </div>

    <div class="machinary-card-container">
      <machinary-card v-for="machinary in machinarys" :key="machinary.id" :machinary="machinary" />
    </div>
  </div>


</template>

<style scoped>
.machinery-list {
  padding: 20px;
}

.title {
  margin-bottom: 20px;
  padding-right: 800px;
}

.machinary-card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 70px;
}

@media (max-width: 767px) {
  .machinary-card-container {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

.body {
  padding: 3rem;
}
</style>
