import { mount } from 'svelte'
import app from './src/appp.svelte'

export default mount(app, { target: document.getElementById('app') })
