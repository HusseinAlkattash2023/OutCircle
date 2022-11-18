import React from 'react'
import {BrowserRouter , Routes , Router  , Route} from 'react-router-dom'
import HomeAr from './pages/Home/HomeAr';
import WhyUsAr from './pages/WhyUs/WhyUsAr'
import GoalsAr from './pages/Goals/GoalsAr'
function AppAr() {
    const routes = [
        {
            path:"/",
            element:<HomeAr/>
        },{
          path:"/whyus",
          element:<WhyUsAr/>
      },{
        path:"/goals",
        element:<GoalsAr/>
    }
    ]
  return (
    <BrowserRouter>
    <Routes>
        {
        routes.map(({path, element}, key) => <Route exact path={path} element={element}  key={key} />)
        }
    </Routes>
</BrowserRouter>
  )
}

export default AppAr
