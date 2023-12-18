
import App from "./app" 
// import  ReactDOM  from "react-dom"
// ReactDOM.render(<RefList/>, document.getElementById('root'))
import store from "./pages/store";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
)