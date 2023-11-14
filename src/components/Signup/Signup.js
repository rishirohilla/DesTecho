// import React, { Component } from "react";
// import Slider from "react-slick";
// import "./signup.css"; // Import your CSS file

// class Signup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isSignup: true,
//     };
//   }

//   componentDidMount() {
//     const mainBoxHeight = document.querySelector(".main-box").clientHeight;
//     const images = document.querySelectorAll("img");
//     images.forEach((img) => (img.style.height = `${mainBoxHeight}px`));
//   }

//   initializeSlider = () => {
//     this.slider = new Slider(".signup-slider", {
//       dots: true,
//       arrows: false,
//       autoplay: true,
//       autoplaySpeed: 2000,
//     });
//   };

//   adjustImageHeight = () => {
//     const mainBoxHeight = document.querySelector(".main-box").clientHeight;
//     const images = document.querySelectorAll("img");
//     images.forEach((img) => (img.style.height = `${mainBoxHeight}px`));
//   };

//   toggleForm = (isSignup) => {
//     this.setState({ isSignup });
//   };

//   render() {
//     const { isSignup } = this.state;

//     return (
//       <div className="main-box">
//         <div className="slider-cont">
//           <div className="signup-slider">
//             <div className="img-txt">
//               <div className="img-layer"></div>
//               <h1>The hardest part of starting up is starting out for you.</h1>
//               <img
//                 src="https://static.pexels.com/photos/33972/pexels-photo.jpg"
//                 alt="Slider 1"
//               />
//             </div>
//             <div className="img-txt">
//               <div className="img-layer"></div>
//               <h1>
//                 We understand you and your business, We have the right solutions
//                 for you.
//               </h1>
//               <img
//                 src="https://static.pexels.com/photos/257897/pexels-photo-257897.jpeg"
//                 alt="Slider 2"
//               />
//             </div>
//             <div className="img-txt">
//               <div className="img-layer"></div>
//               <h1>Join US Now!</h1>
//               <img
//                 src="https://static.pexels.com/photos/317383/pexels-photo-317383.jpeg"
//                 alt="Slider 3"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="form-cont">
//           <div className="top-buttons">
//             <button
//               className={`to-signup ${isSignup ? "top-active-button" : ""}`}
//               onClick={() => this.toggleForm(true)}
//             >
//               Sign Up
//             </button>
//             <button
//               className={`to-signin ${!isSignup ? "top-active-button" : ""}`}
//               onClick={() => this.toggleForm(false)}
//             >
//               Sign In
//             </button>
//           </div>
//           {/* 
//           {isSignup ? (
//             <div className="form form-signup">
//               <form action="#">
//                 <label>FULL NAME</label>
//                 <input type="text" placeholder="Your full name" />
//                 <label>E-MAIL</label>
//                 <input type="email" placeholder="Your e-mail" />
//                 <label>PASSWORD</label>
//                 <input type="password" placeholder="Your password" />
//                 <p className="terms">
//                   <input type="checkbox" />
//                   I agree all statements in <a href="#" className="lined-link">terms of service</a>
//                 </p>
//                 <input type="submit" className="form-btn" value="Sign Up" />
//                 <br /><br />
//                 <a href="#" className="lined-link to-signin-link">I'm already a member</a>
//               </form>
//             </div>
//           ) : (
//             <div className="form form-signin">
//               <form action="#">
//                 <label>E-MAIL</label>
//                 <input type="email" placeholder="Your e-mail" />
//                 <label>PASSWORD</label>
//                 <input type="password" placeholder="Your password" />
//                 <input type="submit" className="form-btn" value="Sign In" />
//                 <br /><br />
//                 <a href="#" className="lined-link to-signup-link">Create new account</a>
//               </form>
//             </div>
//           )}
//         </div> */}
//           {isSignup ? (
//             <div className="form form-signup">
//               {/* ... signup form contents ... */}
//               <form action="#">
//                 <label>FULL NAME</label>
//                 <input type="text" placeholder="Your full name" />
//                 <label>E-MAIL</label>
//                 <input type="email" placeholder="Your e-mail" />
//                 <label>PASSWORD</label>
//                 <input type="password" placeholder="Your password" />
//                 <p className="terms">
//                   <input type="checkbox" />I agree all statements in{" "}
//                   <a href="#" className="lined-link">
//                     terms of service
//                   </a>
//                 </p>
//                 <input type="submit" className="form-btn" value="Sign Up" />
//                 <br />
//                 <br />
//                 <a href="#" className="lined-link to-signin-link">
//                   I'm already a member
//                 </a>
//               </form>
//             </div>
//           ) : (
//             <div className="form form-signin">
//               {" "}
//               {/* Change this class */}
//               {/* ... signin form contents ... */}
//               <form action="#">
//                 <label>E-MAIL</label>
//                 <input type="email" placeholder="Your e-mail" />
//                 <label>PASSWORD</label>
//                 <input type="password" placeholder="Your password" />
//                 <input type="submit" className="form-btn" value="Sign In" />
//                 <br />
//                 <br />
//                 <a href="#" className="lined-link to-signup-link">
//                   Create new account
//                 </a>
//               </form>
//             </div>
//           )}
//         </div>

//         <div className="clear-fix"></div>
//       </div>
//     );
//   }
// }

// export default Signup;
import React, { useState } from 'react';
import './styles.css';

function App() {
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
    };

    const handleSignInClick = () => {
        setIsSignUpActive(false);
    };

    return (
        <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start your journey with us</p>
                        <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                    </div>
                </div>
            </div>
            <footer>
                <p>
                    Created with <i className="fa fa-heart"></i> by
                    <a target="_blank" href="https://florin-pop.com">Florin Pop</a>
                    - Read how I created this and how you can join the challenge
                    <a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
                </p>
            </footer>
        </div>
    );
}

export default App;
