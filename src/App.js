import React, { useEffect, useState, createContext } from 'react';
import { ChatEngine } from 'react-chat-engine';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import NewHome from "./Pages/NewHome/NewHome";
import NewHome2 from "./Pages/NewHome2/NewHome2";
import Resume from "./Pages/Resume/Resume";
import NewResumePg from "./Pages/NewResumePg/NewResumePg";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Ambassador from "./Pages/Ambassador/Ambassador";
import NewConnectPg from "./Pages/NewConnectPg/NewConnectPg";
import Contactus from "./Components/Contactus/Contactus";
import Register from "./Components/Register/Register";
import Scholarship from "./Pages/Scholarship/Scholarship";
import NewScholarPg from "./Pages/NewScholar/NewScholarPg";
import AddScholarship from "./Components/Register/AddScholarship";
import CoursePg from "./Pages/CoursePg/CoursePg";
import Page4 from "./Pages/Page4/Page4";
import SettleInPg from "./Pages/SettleInPg/SettleInPg";
import Page5 from "./Pages/Page5/Page5";
import AlreadyInPg from "./Pages/AlreadyInPg/AlreadyInPg";
import GRE from "./Pages/GRE/GRE";
import Alldetails from "./Components/Register/Alldetails";
import Editscholarship from "./Components/Register/Editscholarship";
import EditUnivdetails from "./Components/Register/EditUnivdetails";
import AddCourses from "./Components/Register/AddCourses";
import EditCourses from "./Components/Register/EditCourses";
import Coursesdetails from "./Components/Scholarship/ScholarshipTables/Coursesdetails";
import University from "./Components/University/University";
import Example from "./Components/NewTable/Table";
import FindmyFriend from "./Pages/FindmyFriend/Findmyfriend";
import UniMarketHomePg from "./Pages/UniMarketHomePg/UniMarketHomePg";
import Chat from "./Pages/Chat/Chat";
import AdminPg from "./Pages/AdminPg/AdminPg";
import Product from "./Pages/ProductDetail/ProductPg";
import UniMarketFormPg from "./Pages/UniForm/UniFormPg";
import Login from './Components/Login/Login'
import Signup from "./Components/Signup/Signup";
import Profile from './Components/Profile/Profile'
import ProductDetailPg from "./Pages/ProductDetailPg/ProductDetailPg";
import DetailsPage from "./Pages/Detail/Detail";

const MyContext = createContext();


function App() {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<NewHome2 />}></Route>
          <Route path="/resume" element={<NewResumePg />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Connect" element={<NewConnectPg />}></Route>
          <Route path="/scholarship" element={<NewScholarPg />}></Route>
          <Route path="/course" element={<CoursePg />}></Route>
          <Route path="/SettleinUK" element={<SettleInPg />}></Route>
          <Route path="/AlreadyinUk" element={<AlreadyInPg />}></Route>
          <Route path="/Ielts-Gre" element={<GRE />}></Route>
          <Route path="/contact" element={<Contactus />}></Route>
          <Route path="/addunivdetails" element={<Register />}></Route>
          <Route path="/table" element={<Example />}></Route>
          <Route path="/data" element={<Alldetails />}></Route>
          <Route path="/addcourses" element={<AddCourses />}></Route>
          <Route path="/course/:name" element={<Coursesdetails />}></Route>
          <Route path="/university" element={<University />}></Route>
          <Route path="/findmyfriend" element={<FindmyFriend />}></Route>
          <Route path="/unimarkethome" element={<UniMarketHomePg />}></Route>
          <Route path="/unimarketchat" element={<Chat />}></Route>
          <Route path="/unimarketadmin" element={<AdminPg />}></Route>
          <Route path="/unimarketproduct" element={<Product />}></Route>
          <Route path="/unimarketform" element={<UniMarketFormPg />}></Route>
          <Route path="/productdetail" element={<ProductDetailPg />}></Route>
          <Route path="/unimarket/login" element={<Login/>}></Route>
          <Route path="/unimarket/signup" element={<Signup/>}></Route>
          <Route path="/unimarket/profile" element={<Profile/>}></Route>
          <Route path="/unimarket/productdetail" element={<DetailsPage/>}></Route>
        </Routes> 
      </Router> */}

      data.productData.length !== 0 &&
    <BrowserRouter>
      <MyContext.Provider value={value}>
        {
          isLoading===true && <div className='loader'><img src={Loader}/></div>
        }

        
        <Header data={data.productData} />
        <Routes>
        <Route path="/" element={<NewHome2 />}></Route>
          <Route path="/resume" element={<NewResumePg />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Connect" element={<NewConnectPg />}></Route>
          <Route path="/scholarship" element={<NewScholarPg />}></Route>
          <Route path="/course" element={<CoursePg />}></Route>
          <Route path="/SettleinUK" element={<SettleInPg />}></Route>
          <Route path="/AlreadyinUk" element={<AlreadyInPg />}></Route>
          <Route path="/Ielts-Gre" element={<GRE />}></Route>
          <Route path="/contact" element={<Contactus />}></Route>
          <Route path="/addunivdetails" element={<Register />}></Route>
          <Route path="/table" element={<Example />}></Route>
          <Route path="/data" element={<Alldetails />}></Route>
          <Route path="/addcourses" element={<AddCourses />}></Route>
          <Route path="/course/:name" element={<Coursesdetails />}></Route>
          <Route path="/university" element={<University />}></Route>
          <Route path="/findmyfriend" element={<FindmyFriend />}></Route>
          <Route path="/unimarkethome" element={<UniMarketHomePg />}></Route>
          <Route path="/unimarketchat" element={<Chat />}></Route>
          <Route path="/unimarketadmin" element={<AdminPg />}></Route>
          <Route path="/unimarketproduct" element={<Product />}></Route>
          <Route path="/unimarketform" element={<UniMarketFormPg />}></Route>
          <Route path="/productdetail" element={<ProductDetailPg />}></Route>
          <Route path="/unimarket/login" element={<Login/>}></Route>
          <Route path="/unimarket/signup" element={<Signup/>}></Route>
          <Route path="/unimarket/profile" element={<Profile/>}></Route>
          <Route path="/unimarket/productdetail" element={<DetailsPage/>}></Route>
        </Routes>
       <Footer/>
      </MyContext.Provider>
    </BrowserRouter>

    </div>
  );
}

export default App;

export { MyContext }