import React from 'react'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Product from './Product'
import Login from './Login'
import Card from './Card'


function Navbar(props) {


    function pleaseLogout(){
      window.location.pathname='/login'
    }

  return (
    <BrowserRouter>
    <div className='container' align='center'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="h">Ecommerce App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <button type="button" id='mypopover'data-html='true'className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
     sagittis lacus vel augue laoreet rutrum faucibus.">
      cart
    </button>
         
       {props.intial ? 
       <>
       <button className='btn btn-outline-light' onClick={pleaseLogout}>Logout</button>
       <li className="nav-item">
        <Link to='/home' className="nav-link" >Home</Link>
        </li>
        <li className="nav-item">
        <Link to='/product' className="nav-link" >Product</Link>
        </li> 
       </>
       : 
       
       <li className="nav-item">
        <Link to='/login' className="nav-link" >Login</Link>
        </li>}
       
            
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>

   <Routes>
      <Route path='/home' element={<Card/>}></Route>
      <Route path='/product' element={<Product/>}> </Route>
      <Route path='/Login' element={<Login info={props.data}/>}></Route>
      
      


      
      
   </Routes>

</BrowserRouter>
  )
}

export default Navbar