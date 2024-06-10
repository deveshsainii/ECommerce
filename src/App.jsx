import { Outlet } from "react-router"
import Navbar from "./component/navbar"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Qm } from './constants';  // Import Qm

function App() {

  return (
  <>
  <ToastContainer />
  <Navbar />
  <main className="py-3 ">
    <Outlet/>
  </main>
  </>
  )
}

export default App
