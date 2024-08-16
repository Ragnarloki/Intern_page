import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import RegisterForm from "./componenets/RegisterForm"
import "./index.css"
import HomePage from './componenets/HomePage/HomePage';
import InternDetail from './componenets/internDetail/InternDetail';
import First_page from './componenets/First_page';
import DomainPage from './componenets/DomainPage/DomainPage';
import CourseDetails from './componenets/CourseDetails/CourseDetails';
import Explore from './componenets/Explore/Explore';
import Chart from './componenets/Explore/Chart'
import DayDetail from './componenets/Explore/DayDetail';
import Chart_without_line from './componenets/Explore/Chart_without_line';

function App() {
  
  return (
    <div>
    
    <BrowserRouter>
      <Routes>
        
         <Route path='/' element={<First_page/>}/>
         <Route path='/RegisterForm' element={<RegisterForm/>}/>
         <Route path='/HomePage' element={<HomePage/>}/>
         <Route path='/InternDetail' element={<InternDetail/>}/>
         <Route path='/DomainPage' element={<DomainPage/>}/>
         <Route path='/CourseDetails' element={<CourseDetails/>}/>
         <Route path='/Explore' element={<Explore/>}/>

        <Route path="/day/:day" element={<DayDetail />} />
      </Routes>
    </BrowserRouter>
    </div>
 
 )
}

export default App