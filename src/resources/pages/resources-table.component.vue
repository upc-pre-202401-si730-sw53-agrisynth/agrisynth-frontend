<script>
import { defineComponent} from "vue";
import { ResourceApiService } from "@/resources/services/resource.api.service.js";
import Resource_creation_dialog from "@/resources/components/resource-creation.dialog.vue";
import Resource_edition_dialog from "@/resources/components/resource-edition.dialog.vue";
import Resource_deletion_dialog from "@/resources/components/resource-deletion.dialog.vue";
export default defineComponent({
  name: "resources-table",
  components: { Resource_deletion_dialog, Resource_edition_dialog, Resource_creation_dialog},

  data() {
    return {
      resources: [],
      //selectedResource: null,
      isEditionDialogVisible: false,
      isDeletionDialogVisible: false,
      isCreationDialogVisible: false,

      //Service
      resourceService: null,

      //Resource Data
      resourceData: null,
      resourceId: 0,
    };
  },
  async mounted() {
    try {
      this.resourceService = new ResourceApiService();
      const response = await this.resourceService.getAllResources()
      this.resources = response.data;
    } catch (error) {
      console.error("Error al obtener los recursos:", error);
    }
  },
});
</script>


<template>
  <div class="main-content">
    <pv-card class="resources-card">
      <template #title>
        <div class="title-container">
          <h1 class="title">Resource Inventory</h1>
          <pv-button label="Add Resource" class="creation-button" @click="isCreationDialogVisible = true" />
        </div>
      </template>
      <template #content>
        <pv-data-table :value="resources" showGridlines tableStyle="width:100%">
          <pv-column field="name" header="Name"></pv-column>
          <pv-column field="quantity" header="Amount"></pv-column>
          <pv-column field="type" header="Type"></pv-column>
          <pv-column field="purchase" header="Purchase Price($ ~ 1kg)"></pv-column>
          <pv-column field="sale" header="Sale Price ($ ~ 1kg)"></pv-column>
          <pv-column header="Opciones" style="display: flex; justify-content: center; gap: 1rem">
            <template #body="slotProps">
              <div class="card flex justify-content-center">
                <pv-button label="Edit" style="background-color:lightgreen;color:white;padding:0.5rem"
                           @click="isEditionDialogVisible = true; resourceData = slotProps.data; resourceId = slotProps.data.id"/>
              </div>
              <div class="button-group">
                <pv-button label="Delete" style="background-color:red;color:white;padding:0.5rem" severity="danger"
                           @click="isDeletionDialogVisible = true; resourceData = slotProps.data; resourceId = slotProps.data.id" />
              </div>
            </template>
          </pv-column>
        </pv-data-table>
      </template>
    </pv-card>
  </div>

  <!--Resource Creation Dialog-->
  <resource_creation_dialog v-model:visible="isCreationDialogVisible"
                            @update:visible="isCreationDialogVisible = $event"
                            :resourceService="resourceService"></resource_creation_dialog>
  <!--Resource Edition Dialog-->
  <resource_edition_dialog v-model:visible="isEditionDialogVisible"
                           @update:visible="isEditionDialogVisible = $event"
                           :resourceService="resourceService"
                           :resourceId="resourceId"></resource_edition_dialog>
  <!--Resource Deletion Dialog-->
  <resource_deletion_dialog v-model:visible="isDeletionDialogVisible"
                            @update:visible="isDeletionDialogVisible = $event"
                            :resourceService="resourceService"
                            :resourceId="resourceId" :resourceData="resourceData"></resource_deletion_dialog>
</template>

<style scoped>
.main-content {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.resources-card{
  margin: 1.5rem 0 1.5rem 0;
  height: 100%;
}

.title-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.title{
  color: #4CAF50;
}

.creation-button{
  background-color:lightgreen;
  color:white;
  padding: 1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 3rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px 15px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
  color: #333;
}

.button-group {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 768px)  {
  .main-content{
    padding: 0.1rem 0.2rem 3rem 0.2rem;
  }

  .title-container{
    display: block;
    text-align: center;
  }
  .creation-button{
    width: 100%;
  }
}
</style>