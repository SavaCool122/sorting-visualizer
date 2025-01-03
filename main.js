import { mount } from 'svelte'
import app from './src/app.svelte'

export default mount(app, { target: document.getElementById('app') })
