import './register.css'


export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
        <label>Username</label>
            <input type="text" placeholder="Enter your Username"/>
            <label>Email</label>
            <input type="text" placeholder="Enter your email"/>
            <label>Password</label>
            <input type="text" placeholder="Enter your password"/>
            <button className="registerButton">Register</button>
            <button className="registerLoginButton">Login</button>


        </form>
      
    </div>
  )
}
