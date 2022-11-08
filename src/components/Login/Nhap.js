import React from "react";
import { Link } from "react-router-dom";

export default function Nhap() {
  return (
    <div id="login__form__container">
      <div id="form__container">
        <div id="form__container__wrap">
          <form>
            <div id="form__header">
              <h1 id="form__header-primary">Signin to TodoList</h1>
            </div>
            <div id="form__email">
              <h3 id="form__email-title">Email</h3>
              <input id="form__email-input" placeholder="Email" />
            </div>
            <div id="form__password">
              <h3 id="form__password-title">Password</h3>
              <input id="form__password-input" placeholder="Password" />
            </div>
            <div id="form__forgot-password">
              <Link to="/forgot-password">
                <span>Forgot password?</span>
              </Link>
            </div>
            <div id="form__login-btn">
              <button id="signin">Sign in</button>
            </div>
            <div id="form__to-signup">
              <span>
                Don't have an account? <Link to="/sign-up">Sign up now</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
