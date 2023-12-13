
import App from "./app" 
// import  ReactDOM  from "react-dom"
// ReactDOM.render(<RefList/>, document.getElementById('root'))

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />)