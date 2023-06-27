import AuthPage from "./page/AuthPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import CreateGroup from "./page/CreateGroup";

const router = createBrowserRouter([
{path:'/' , element:<AuthPage/>},
{path:'/dashboard' , element:<Home/>},
{path:'/group' , element:<CreateGroup/>}
])

function App() {
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
