<script>
import {defineComponent, ref} from "vue";
import {getAllResources} from "@/resources/services/resource.api.service.js";

export default defineComponent({
  name: "resources-table",
  components: {},

  data() {
    return {
      resources: [],
      selectedresource: null,
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      value: ref(null),
    };
  },
  async mounted() {
    try {
      this.resources = await getAllResources();
    } catch (error) {
      console.error("Error al obtener los recursos:", error);
    }
  },
  methods: {
    closeDialog() {
      this.dialogVisible = false;
    },
  },
});
</script>

<template>
  <div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 3rem">
      <h1 style="margin: 0">Inventario de recursos</h1>
      <div class="card flex justify-content-center">
        <pv-button label="Añadir" style="background-color:lightgreen;color:white;padding:1rem"
                   @click="dialogVisible3 = true"/>
        <pv-dialog class="pv-dialog" v-model:visible="dialogVisible3" modal @md-closed="closeDialog" :draggable="false"
                   header="Añadir datos">
          <div class="flex flex-column align-items-start gap-2 mb-3">
            <label for="name" class="font-semibold">Nombre</label>
            <pv-input-text id="name" class="w-full" autocomplete="off"/>
          </div>
          <div class="flex flex-column align-items-start gap-2 mb-3">
            <label for="quantity" class="font-semibold">Cantidad</label>
            <pv-input-text id="quantity" class="w-full" autocomplete="off"/>
          </div>
          <div class="flex flex-column align-items-start gap-2 mb-3">
            <label for="type" class="font-semibold">Tipo</label>
            <pv-input-text id="type" class="w-full" autocomplete="off"/>
          </div>
          <div class="flex flex-column align-items-start gap-2 mb-3">
            <label for="quantity" class="font-semibold">Precio de compra</label>
            <pv-input-text id="quantity" class="w-full" autocomplete="off"/>
          </div>
          <div class="flex flex-column align-items-start gap-2 mb-3">
            <label for="type" class="font-semibold ">Precio de venta</label>
            <pv-input-text id="type" class="w-full" autocomplete="off"/>
          </div>

          <div class="flex justify-content-end gap-2">
            <pv-button type="button" style="background-color:red;color:white;padding:1rem" label="Cancelar"
                       severity="secondary"
                       @click="dialogVisible3 = false"></pv-button>
            <pv-button type="button" style="background-color:lightgreen;color:white;padding:1rem" label="Guardar"
                       @click="dialogVisible3 = false"></pv-button>
          </div>
        </pv-dialog>
      </div>
    </div>
    <pv-data-table :value="resources" showGridlines tableStyle="width:100%">
      <pv-column field="name" header="Nombre"></pv-column>
      <pv-column field="quantity" header="Cantidad"></pv-column>
      <pv-column field="type" header="Tipo"></pv-column>
      <pv-column field="purchase" header="Precio de compra ($ ~ 1kg)"></pv-column>
      <pv-column field="sale" header="Precio de venta ($ ~ 1kg)"></pv-column>
      <pv-column header="Opciones" style="display: flex; justify-content: center; gap: 1rem">
        <template #body>
          <div class="card flex justify-content-center">
            <pv-button label="Editar" style="background-color:lightgreen;color:white;padding:0.5rem"
                       @click="dialogVisible1 = true"/>
            <pv-dialog class="pv-dialog" v-model:visible="dialogVisible1" modal @md-closed="closeDialog"
                       :draggable="false" header="Editar datos">
              <div class="flex flex-column align-items-start gap-2 mb-3">
                <label for="name" class="font-semibold">Nombre</label>
                <pv-input-text id="name" class="w-full" autocomplete="off"/>
              </div>
              <div class="flex flex-column align-items-start gap-2 mb-3">
                <label for="quantity" class="font-semibold">Cantidad</label>
                <pv-input-text id="quantity" class="w-full" autocomplete="off"/>
              </div>
              <div class="flex flex-column align-items-start gap-2 mb-3">
                <label for="type" class="font-semibold">Tipo</label>
                <pv-input-text id="type" class="w-full" autocomplete="off"/>
              </div>
              <div class="flex flex-column align-items-start gap-2 mb-3">
                <label for="quantity" class="font-semibold">Precio de compra</label>
                <pv-input-text id="quantity" class="w-full" autocomplete="off"/>
              </div>
              <div class="flex flex-column align-items-start gap-2 mb-3">
                <label for="type" class="font-semibold ">Precio de venta</label>
                <pv-input-text id="type" class="w-full" autocomplete="off"/>
              </div>
              <div class="flex justify-content-end gap-2">
                <pv-button type="button" style="background-color:red;color:white;padding:0.5rem" label="Cancelar"
                           severity="secondary"
                           @click="dialogVisible1 = false"></pv-button>
                <pv-button type="button" style="background-color:lightgreen;color:white;padding:0.5rem" label="Guardar"
                           @click="dialogVisible1 = false"></pv-button>
              </div>
            </pv-dialog>
          </div>
          <div class="card flex justify-content-center">
            <pv-button label="Eliminar" style="background-color:red;color:white;padding:0.5rem" severity="danger"
                       @click="dialogVisible2 = true"/>
            <pv-dialog class="pv-dialog" v-model:visible="dialogVisible2" modal @md-closed="closeDialog"
                       :draggable="false" header="Eliminar datos">
              <div class="flex align-items-center gap-3 mb-3">
                <p>Estas seguro de eliminar estos datos?</p>
              </div>
              <div class="flex justify-content-end gap-2">
                <pv-button severity="danger" style="background-color:red;color:white;padding:0.5rem" label="Si"
                           @click="dialogVisible2 = false"></pv-button>
                <pv-button type="No" label="No" style="background-color:lightgreen;color:white;padding:0.5rem"
                           @click="dialogVisible2 = false"></pv-button>
              </div>
            </pv-dialog>
          </div>
        </template>
      </pv-column>
    </pv-data-table>
  </div>
</template>

<style >
h1 {
  color: #4CAF50; /* Color del título similar al de la imagen */
}

/* Estilos para la tabla */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px; /* Espacio antes de la tabla */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Sombra ligera para la tabla */
  border-radius: 8px; /* Bordes redondeados */
  overflow: hidden; /* Esconde el desbordamiento para mantener los bordes redondeados */
}

th, td {
  border: 1px solid #ddd;
  padding: 12px 15px; /* Ajuste de padding para mayor espacio */
  text-align: left;
}

th {
  background-color: #f4f4f4;
  color: #333; /* Color oscuro para el texto del encabezado */
}

/* Botones y acciones */
button {
  border: none;
  outline: none;
  padding: 8px 12px;
  margin-right: 8px; /* Espacio entre botones */
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Transición suave para el color de fondo */
}

button:hover {
  opacity: 0.9; /* Efecto al pasar el ratón por encima */
}

.pv-dialog {
  width: 100%;
  max-width: 30rem;
}

.table p-datatable-header {
  background-color: red;
}

@media (max-width: 600px) {
  .pv-dialog {
    width: 100%;
    max-width: 20rem;
  }
}
</style>