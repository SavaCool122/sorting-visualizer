import { render } from 'solid-js/web'
import { App } from './src/components/SortVisualizer'
import './src/assets/styles/index.css'
import './index.css'

const rootElem = document.getElementById('app')
render(() => <App />, rootElem)
