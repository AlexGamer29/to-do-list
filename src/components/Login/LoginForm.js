import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div id="login__form__container">
        <div id="form__container">
          <div id="form__container__wrap">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div id="form__header" className="form__item">
                <h1 id="form__header-primary">Sign in to TodoList</h1>
              </div>
              <div id="form__email" className="form__item">
                <h3 id="form__email-title" className="form__field-title">
                  Email
                </h3>
                <input
                  id="form__email-input"
                  placeholder="Email"
                  type="email"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                />
                {errors?.email?.type === "required" && (
                  <span className="form__error">This field is required</span>
                )}
                {errors?.email?.type === "pattern" && (
                  <span className="form__error">Use a valid email address</span>
                )}
              </div>
              <div id="form__password" className="form__item">
                <h3 id="form__password-title" className="form__field-title">
                  Password
                </h3>
                <span>
                  <input
                    id="form__password-input"
                    placeholder="Password"
                    type="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      maxLength: 30,
                      pattern: /[a-zA-Z]/,
                    })}
                  />
                  <i class="fa-regular fa-eye" />
                  <i class="fa-regular fa-eye-slash" />
                </span>
                {errors?.password?.type === "required" && (
                  <span className="form__error">This field is required</span>
                )}
                {errors?.password?.type === "minLength" && (
                  <span className="form__error">
                    Password length minimum is 8 characters
                  </span>
                )}
                {errors?.password?.type === "maxLength" && (
                  <span className="form__error">
                    Password length maximum is 30 characters
                  </span>
                )}
                {errors?.password?.type === "pattern" && (
                  <span className="form__error">
                    Password can only contain Latin letters
                  </span>
                )}
              </div>
              <div id="form__forgot-password" className="form__item">
                <Link to="/forgot-password">
                  <span>Forgot password?</span>
                </Link>
              </div>
              <div id="form__login-btn" className="form__item">
                <button id="signin" type="submit">
                  Sign in
                </button>
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
