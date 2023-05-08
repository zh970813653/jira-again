import React from "react";
import "./App.css";
// import Auth from "view/auth";
import { AuthContext } from "context/auth";
import {Spin} from 'antd'

const Auth = React.lazy(()=> import('view/auth'))
const ProjectApp = React.lazy(()=> import('./project-app'))

function App() {
  const {user} = AuthContext()
  return (
    <div>
       <React.Suspense fallback={<Spin />}>
        {user ?  <ProjectApp />:<Auth />} 
        </React.Suspense>
    </div>
  );
}

export default App;
