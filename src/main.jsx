import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/App/App'
import store from './store/store'
import { Provider } from 'react-redux'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import AppNewTask from './containers/NewTask/NewTask'
import AppEditTask from './containers/EditTask/EditTask'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "/new",
    element:<AppNewTask/>,
  },
  {
    path: "/edit/:slug",
    element:<AppEditTask/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
)
