// import React from "react";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../components/Style/Signup.css";

function SignUp() {
  const cardOriginalColor = "rgba(255, 255, 255, 0.6)";
  const cardClicked = "rgba(40, 167, 70, 0.6)";

  const [freelancerColor, setFreelancerColor] = useState(cardOriginalColor);
  const [clientColor, setClientColor] = useState(cardOriginalColor);

  const handleFreelancerClick = () => {
    setFreelancerColor(
      freelancerColor === cardOriginalColor ? cardClicked : cardOriginalColor
    );
    setClientColor(cardOriginalColor);
  };
  const handleClientClick = () => {
    setClientColor(
      clientColor === cardOriginalColor ? cardClicked : cardOriginalColor
    );
    setFreelancerColor(cardOriginalColor);
  };

  return (
    <>
      <Navbar />
      <section id="signup">
        <div id="signup-container">
          <div id="usertype">
            <h3>Looking for a job?...</h3>

            <h3> Or searching for the right fit for the job?</h3>

            <p id="role">Please select your role</p>

            {/* Freelancer card */}
            <div
              id="freelancercard"
              style={{
                backgroundColor: freelancerColor,
              }}
              onClick={handleFreelancerClick}
            >
              <div id="freelancerPic"></div>

              <p>I am a freelancer looking for jobs</p>
            </div>

            {/* Client Card */}
            <div
              id="clientcard"
              style={{
                backgroundColor: clientColor,
              }}
              onClick={handleClientClick}
            >
              <div id="clientPic"></div>

              <p>I am a client looking for talent</p>
            </div>
            <div className="create-btn">
              <Link to="/create_acct">
                <button id="createacct">Create an account</button>
              </Link>
            </div>

            <p id="have-acct">
              Already have an account?{" "}
              <Link to="/login" className="Link">
                LOG IN
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;