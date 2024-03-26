import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Blogs from './Pages/Blogs/Blogs';
import { Route, Routes } from 'react-router-dom';
import './style.css'


function App() {

  return (

<div> 
<Navbar/>
<div className='my-2'></div>
<Routes>
<Route path='/:category' Component={Blogs}/>

</Routes>
 

</div>


 
    
  )
}

export default App
