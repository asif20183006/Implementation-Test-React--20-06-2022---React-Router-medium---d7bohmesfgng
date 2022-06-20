import React from 'react'
 import {BrowserRouter,Routes,Route,Link } from "react-router-dom";
import { BackgroundColorChanger } from './Pages/BackgroundColorChanger'
import { Calculator } from './Pages/Calculator'
import { Index } from './Pages/Index'

export const AppRoutes = () =>{
    return (
   <>
  <div>
    <BrowserRouter>
<div>
<Link to='./Pages/Calculator>calculator</Link>
<Link to= './Pages/Index'>Index</Link>
 <Link to= './Pages/BackgroundColorChanger'>background</Link>
</div>

<div>
<Routes>
<Route path="./Pages/Calculator" element={<calculator/>}/>
<Route path="./Pages/Index" element={Index/>}/>
<Route path= element='./Pages/BackgroundColorChanger'{<background/>}/>
</Routes>
</div>
</BrowserRouter>
</div>
</>
  )
}
    )
}
