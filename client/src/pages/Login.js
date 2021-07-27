import React ,{useEffect, useState} from "react";
import Container from "../components/Container";
import axios from "axios"
import '../components/LoginForm/style.css'
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      alert("Logging in...")
  
  axios.post(`/api/user/login`, {userName: email, password: password})
  .then(res => {
    console.log(res)
  })
  .catch(err => console.error(err))
}

const history = useHistory()
const routeChange = () =>{ 
    let path = `loading`; 
    history.push(path);
}
  
    return (
      <Container>
          <form onSubmit = {handleSubmit} className="login-form">
              <div className="mb-4">
                  <div className="">
                      <input type="text" 
                      className="input-field" 
                      id="email-input" 
                      onChange = {e => setEmail(e.target.value)}
                      placeholder="Username"/>
                  </div>
              </div>
              <div className="mb-4">
                  <div className="">
                      <input type="password" 
                      className="input-field" 
                      id="password-input" 
                      onChange = {e => setPassword(e.target.value)}
                      placeholder="Password"/>
                  </div>
              </div>
              <div className="d-grid gap-2">
                  <button type="submit" onClick={routeChange} href="/loading" id="login-btn" className="btn btn-light">Login</button>
              </div>
              <p id="login-text" 
              className="mt-4 text-center" >Don't have an account?<a type="button" href="/signUp" className="p-1 signup">Sign up</a></p>
          </form>
      </Container>
  )

}


export default Login