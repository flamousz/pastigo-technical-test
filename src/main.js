import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css";

const app = createApp(App)

const option = {
    position: "bottom-left",
    timeout: 1968,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: false,
    icon: true,
    rtl: false,
    transition: "Vue-Toastification__fade"
}

app.use(router)
app.use(Toast, option)
app.mount('#app')
