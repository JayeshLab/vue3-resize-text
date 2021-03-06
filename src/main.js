import { createApp } from 'vue'
import Demo from './Demo.vue'
import VueResizeText from './index.js'

const app = createApp(Demo)
app.use(VueResizeText)
app.mount('#app')
