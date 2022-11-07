import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./LoginForm.css";

export default function LoginForm() {
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // // const { login } = useAuth();
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  // const history = useNavigate();

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   try {
  //     setError("");
  //     setLoading(true);
  //     history.push("/");
  //   } catch {
  //     setError("Failed to log in");
  //   }

  //   setLoading(false);
  // }

  return (
    <>
      <div id="login__form__container">
        <div id="form__container">
          <div id="form__container__wrap">
            <form>
              <div id="form__header" className="form__item">
                <h1 id="form__header-primary">Sign in to TodoList</h1>
              </div>
              <div id="form__email" className="form__item">
                <h3 id="form__email-title" className="form__field-title">
                  Email
                </h3>
                <input id="form__email-input" placeholder="Email" />
              </div>
              <div id="form__password" className="form__item">
                <h3 id="form__password-title" className="form__field-title">
                  Password
                </h3>
                <span>
                  <input id="form__password-input" placeholder="Password" />
                  <i class="fa-regular fa-eye" />
                  <i class="fa-regular fa-eye-slash" />
                </span>
              </div>
              <div id="form__forgot-password" className="form__item">
                <Link to="/forgot-password">
                  <span>Forgot password?</span>
                </Link>
              </div>
              <div id="form__login-btn" className="form__item">
                <button id="signin">Sign in</button>
              </div>
              <div id="form__to-signup" className="form__item">
                <span>
                  Don't have an account? <Link to="/sign-up">Sign up now</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
