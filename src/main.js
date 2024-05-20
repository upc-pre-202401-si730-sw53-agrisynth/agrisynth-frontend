import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

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

import "primevue/resources/themes/aura-light-green/theme.css";
import "primeflex/primeflex.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

createApp(App)
    .use(router)
    .use(PrimeVue, {ripple: true})
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
    .mount("#app");
