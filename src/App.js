import Sidebar from "./component/Sidebar";
import Dashboard from "./component/Dashboard";
import AddUser from "./component/AddUser"
import Profile from './component/Profile'
import PendingRequest from './component/PendingRequest'
import Task from "./component/Task";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import ProfileDetails from "./component/ProfileDetails";
import ResetPassword from "./component/ResetPassword";
import React from "react";
import UserContextComponent from "./context/UserContextComponent"
import DashboardContextComponent from "./context/DashboardContextComponent";

function App() {
  return <>
  <BrowserRouter>
    <div id="wrapper">
        <Sidebar/>
        <Routes>
          <Route path="/dashboard" element={
            <DashboardContextComponent>
              <UserContextComponent>
                <Dashboard/>
              </UserContextComponent>
            </DashboardContextComponent>
            }/>
            
          <Route path="/add-user" element={
            <UserContextComponent>
              <AddUser/>
            </UserContextComponent>}/>
          <Route path="/edit-user/:id" element={
            <UserContextComponent>
              <AddUser/>
            </UserContextComponent>}/>
          <Route path="/profile" element={<Profile/>}>
              <Route path='details' element={<ProfileDetails/>}/>
              <Route path='reset-password' element={<ResetPassword/>}/>
          </Route>
          <Route path="/pending-request" element={<PendingRequest/>}/>
          <Route path="/task" element={<Task/>}/>
          <Route path="*" element={<Navigate to='/dashboard'/>}/>
        </Routes>
    </div>
  </BrowserRouter>
  </>
}

export default App;