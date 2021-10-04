import React,{Component} from "react";

class LoginPage extends Component{
     render(){
         return(
             <div>
                 <h1 className="heading">Welcome to Login Page</h1>
                 <div>
                     <label className="lable-Text">Enter Your email Id:</label>
                     <input type="email" placeholder="Please enter your email id"/>
                 </div>

                 <div>
                     <label className="lable-Text">Enter your Password :</label>
                     <input type="password" placeholder="Please enter your password"/>
                 </div>
                 <div>
                     <button>Login</button>
                 </div>

             </div>

         )
     }
}
   
export default LoginPage;