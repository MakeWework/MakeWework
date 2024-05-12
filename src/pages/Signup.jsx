import {useState} from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
function SignUp() {

  const [freelancerColor, setFreelancerColor] = useState('#28a74636'); 
  const [clientColor, setClientColor]= useState('#28a74636');

  const handleFreelancerClick = () => {
    setFreelancerColor(freelancerColor === '#28a74636' ? '#28a746' : '#28a74636');
    setClientColor('#28a74636');
  };
  const handleClientClick = () => {
    setClientColor(clientColor === '#28a74636' ? '#28a746' : '#28a74636');
    setFreelancerColor('#28a74636');
  };
  
    return (
      <div>
        <Navbar/>
        <div id="signup">
          
          <div id="signup-container">
            <div id= "usertype">
              
              <h3>Looking for a job?...</h3>

              <h3> Or searching for the right fit for the job?</h3>

              <p id="role">Please select your role</p>

              <div id= "freelancercard" style={{ backgroundColor: freelancerColor }} onClick={handleFreelancerClick}>

                    <div id= "freelancerPic">

                    </div>

                    <p>I am a freelancer looking for jobs</p>        

              </div>

              <div id= "clientcard" style={{ backgroundColor: clientColor }} onClick={handleClientClick}>

                    <div id= "clientPic"></div>

                    <p>I am a client looking for talent</p>        

              </div>
                
              <Link to= "/create_acct"><button id= "createacct">Create an account</button></Link>
              
              
                
                  
                
                

              <p id="have-acct">Already have an account? <a href="/">LOG IN</a></p>

            </div>

          </div>
          


          
          
        </div>
      </div>
        
    );
  }
  
  export default SignUp;