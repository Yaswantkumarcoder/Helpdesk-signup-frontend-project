import "./Signup.css";
const Signup = () => {
  return <div className="signupage">
            <div className="signupform-container">
                <div className="signup-form-contents">
                     <h1>Helpdesk System</h1>
                      <h2>sign up here</h2>
                      <div className="input-section">
                        <input type="text"placeholder="username"/>
                        <input type="text"placeholder="password"/>
                        <input type="text"placeholder="Email"/>
                      </div>
                        <button>Sign-up</button>
                     <div className="bottom-section">
                      <span>Forgot password</span>
                          <span>Sign in</span>
                     </div>
                </div>
              
            </div>
  </div>;
};

export default Signup;
