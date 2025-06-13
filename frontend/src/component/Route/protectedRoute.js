import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({isAdmin,user,loading, isAuthenticated,children }) => {
       if(loading===false){
        if( isAuthenticated ===false ){
          return <Navigate to="/login" replace />
           }

           if( isAdmin===true && user.role!=="admin"){
            return <Navigate to="/login" replace />
              }
        return children;
       }
           
      
     
};

export default ProtectedRoute;