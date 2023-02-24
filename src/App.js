import React from 'react';
import StateMore from "./components/state";
import UseEffctEx from './components/effct';
import Refrance from './components/Refrance';
import UseRedccerEx from './components/useRedccer';
// import CustomHook from './components/customHook';
import UseAxios from './components/Axios';
import Header from "./Header";
import Footer from "./footer";
import NavBar from "./components/NavBar";
import CardCompo from "./components/CardCompo";
import FormInput from "./components/Form";
import  { Button,Badge } from 'react-bootstrap';
import NotFound from "./components/NotFound";
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import a1 from './images/a1.jpg';
import a2 from './images/a2.jpg';
import a4 from './images/a4.jpg';

const App = () =>{
  const data = [
    {title:'title1' , description:'this first text' , img:a1},
    {title:'title2' , description:'This second text' , img:a2},
    {title:'title3' , description:'This Thieerd text' , img:a4},
    {title:'title4' , description:'this four text' , img:a1}
    
  ]
      const PrintTitle = (message)=>{
          alert('this from app page ' + message)
      }
      const onClickEvt = ()=>{
        alert('this is Event click')
      }
      const onchangInput = (e) =>{
        console.log(e)
      }

      
  return (
      
   <div /*className="style0"*/>
        <NavBar />
        
        <Button onClick={onClickEvt} className="btn btn-info p-2 m-2">click</Button>
      
        <input onChange={onchangInput} placeholder="write" className="p-2 m-2"/>
       <BrowserRouter>
       <Routes>
        <Route path="/cards" element= {
          data.length ? (data.map((item) =>{
            return (
              <div className="cardo">
                
              <CardCompo title={item.title} description={item.description}
               img={item.img} clickMe={PrintTitle} >
                
                <h1>heloo</h1>
                <p>lol</p>
               </CardCompo>
               </div>
            )
          })) : (<h3><NotFound message="No Cards In This Pages "/></h3>)
        } />
          <Route path="/header" element={<Header/>} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="/forms" element={<FormInput/>} />
       </Routes>
       </BrowserRouter>
       
        <h1 className="style1">welcom world! App</h1>
        <h2 className="style1">hello frinds</h2>
        <h1>
        Example heading <Badge bg="secondary">New</Badge>
        </h1>
        <h3>
        Example heading <Badge bg="secondary">New</Badge>
        </h3>
        
        <Button className="btn btn-dark">click me</Button>{' '}
        <Button variant="primary">click me</Button>

        
          <div>
            <StateMore/>
            <UseEffctEx/>
            <Refrance/>
            <UseRedccerEx/>
            {/* <CustomHook/> */}
            <UseAxios/>
          </div>
        
          
        
  </div>
    )
  }

export default App ;