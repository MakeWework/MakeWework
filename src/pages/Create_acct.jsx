import { FcGoogle } from "react-icons/fc";
import Navbar from "../components/Navbar";

function CreateAcct() {
  return (
    <div>
      <Navbar />

      <div id="create-acct-container">
        <div id="create-acct-form">
          <div id="google-signup">
            <FcGoogle id="google-icon" />
            Continue with Google
          </div>

          <p>OR</p>

          <div id="name">
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>
          </div>

          <div id="email">
            <input type="text" placeholder="Email Address"></input>
          </div>

          <div id="password">
            <input
              type="Password"
              placeholder="Password (8 or more characters)"
            ></input>
          </div>

          <div id="confirm-pass">
            <input type="Password" placeholder="Confirm Password)"></input>
          </div>

          <div id="phone">
            <input type="text" placeholder="+234 000 0000 000"></input>
          </div>

          <div id="promotional-email">
            <label>
              <input type="checkbox" />
            </label>
            <p>Send me promotional emails and tips on how to find talent</p>
          </div>

          <div id="acknowledgement">
            <label>
              <input type="checkbox" />
            </label>
            <p>
              I acknowledge and agree to MakeWeWork terms of use, user
              agreement, and privacy policies.
            </p>
          </div>

          <button type="submit">Sign Up</button>

          <p>
            Looking for work? <a href="/">Join as a talent.</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateAcct;
