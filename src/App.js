import logo from "./logo.svg";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Counter from "./component/Counter";
import Function from "./component/Function";
import State from "./component/State";
import CounterNew from "./component/CounterNew";
import ArrayState from "./component/ArrayState";
import React, {useContext} from 'react'
import  SatyamContext from "./context/SatyamContext";
import HookTimer from "./component/HookTimer";
import ControlledForm from "./ControlledForm";
import UnControlled from "./UnControlled";
import ReducerCounter from "./component/ReducerCounter";
import Hoc from "./Hoc";
import HocGreen from "./HocGreen";
import RenderApi from "./component/NewsPages/RenderApi";
import Header from "./component/Header/Header";
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import National from "./component/NewsPages/National";
import Business from "./component/NewsPages/Business";
import Sports from "./component/NewsPages/Sports";
import Page404 from "./component/Page404";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsDetail from "./component/NewsPages/NewsDetail";
import Protected from "./component/Protected";
export const UserContext = React.createContext()
function App() {
  // const userProfile = [
  //   {
  //     name:'satyam',
  //     age: 22,
  //     city : 'Delhi',
  //     key: 1
  //   },
  //   {
  //     name:'satyam1',
  //     age: 22,
  //     city : 'Delhi',
  //     key: 2
  //   },
  //   {
  //     name:'satyam2',
  //     age: 22,
  //     city : 'Delhi',
  //     key: 3
  //   },
  //   {
  //     name:'satyam3',
  //     age: 22,
  //     city : 'Delhi',
  //     key: 4
  //   },
  // ];
  // console.log(userProfile);
  // function parentAlert(data){
  //   alert(data)
  // }
  
  return (
     
    <div className="App">
       <BrowserRouter>
      
      <Header/>
        <Routes>
          <Route path="/" element={<Function/>}/>
            <Route path='/AllNews' element={<Protected Cmp={RenderApi}/>}/>
            <Route path='/National' element={<National/>}/>
            <Route path="/Business" element={<Business/>}/>
            <Route path="/Sports" element={<Sports/>}/> 
            <Route path="/detail/:id" element={<NewsDetail/>}/>
            <Route path='/*' element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
      {/* {
        userProfile.map(elm =>{
          return <Greet name={elm.name} age={elm.age} city={elm.city}  id={elm.key} alert = {parentAlert}   />
        })
      } */}

      {/* <Welcome/> */}
      {/* <Counter/> */}
      {/* <Hoc cmp={State}/>
      <HocGreen cmp={State}/> */}
      {/* <Function/> */}
     
      
      {/* <UserContext.Provider value={'satyam'}>
        <State/>
      </UserContext.Provider> */}
      

      {/* <HookTimer/> */}
      {/* <CounterNew/> */}

      {/* <ArrayState/> */}

      {/* Controlled Form */}
      {/* <ControlledForm/> */}
      {/* <UnControlled/> */}
      {/* <ReducerCounter/> */}
     
    </div>
  );
}

export default App;
