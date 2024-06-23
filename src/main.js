import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import PrimeVue from "primevue/config";

//Components
import Card from "primevue/card";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Image from "primevue/image";
import Fieldset from "primevue/fieldset";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import Divider from "primevue/divider";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import FloatLabel from "primevue/floatlabel";
import TreeTable from "primevue/treetable";
import Dropdown from "primevue/dropdown";
import Panel from "primevue/panel";
import InputMask from "primevue/inputmask";
import Toolbar from "primevue/toolbar";
import Sidebar from "primevue/sidebar";
import FileUpload from "primevue/fileupload";

//Primevue
import "primevue/resources/themes/aura-light-green/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

//Pinia
import {createPinia} from "pinia";
const pinia = createPinia();

//Authentication Services
import ToastService from "primevue/toastservice";
import DialogService from "primevue/dialogservice";
import ConfirmationService from "primevue/confirmationservice";



createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(router)
    .use(pinia)
    .use(ToastService)
    .use(DialogService)
    .use(ConfirmationService)
    .component("pv-file-upload", FileUpload)
    .component("pv-input-text", InputText)
    .component("pv-dropdown", Dropdown)
    .component("pv-tree-table", TreeTable)
    .component("pv-dialog", Dialog)
    .component("pv-button", Button)
    .component("pv-card", Card)
    .component("pv-panel", Panel)
    .component("pv-icon-field", IconField)
    .component("pv-icon", InputIcon)
    .component("pv-fieldset", Fieldset)
    .component("pv-image", Image)
    .component("pv-divider", Divider)
    .component("pv-splitter", Splitter)
    .component("pv-splitter-panel", SplitterPanel)
    .component("pv-data-table", DataTable)
    .component("pv-column", Column)
    .component("pv-float-label", FloatLabel)
    .component("pv-input-mask", InputMask)
    .component('pv-toolbar', Toolbar)
    .component('pv-sidebar',Sidebar)
  .mount("#app");
