import React from "react";
import "./App.css";
// import Auth from "view/auth";
import { AuthContext } from "context/auth";
import {Spin} from 'antd'

const Auth = React.lazy(()=> import('view/auth'))
const Project = React.lazy(()=> import('view/project'))

function App() {
  const {user} = AuthContext()
  return (
    <div>
       <React.Suspense fallback={<Spin />}>
        {user ?  <Project />:<Auth />} 
        </React.Suspense>
    </div>
  );
}

export default App;
