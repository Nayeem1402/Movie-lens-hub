 
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

export default function Root() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
