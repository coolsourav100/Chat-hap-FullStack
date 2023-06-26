import AuthPage from "./page/AuthPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";

const router = createBrowserRouter([
{path:'/' , element:<AuthPage/>},
{path:'/dashboard' , element:<Home/>}
])

function App() {
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
