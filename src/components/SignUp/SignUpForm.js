import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import * as Yup from "yup";

import "./SignUpForm.css";

export default function SignUpForm() {
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

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
      <div id="signup__form__container">
        <div id="form__container">
          <div id="form__container__wrap">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div id="form__header">
                <h1 id="form__header-primary">Create an account</h1>
              </div>
              <div id="form__sub__header">
                <h4 id="form__sub__header-primary">
                  Required fields have an asterisk: <span id="asterisk">*</span>{" "}
                </h4>
              </div>
              <div id="form__names-container" className="form__item">
                <div id="firstname__container">
                  <div id="firstname__container__wrap">
                    <h3
                      id="form__firstname-title"
                      className="form__field-title"
                    >
                      First name*
                    </h3>
                    <input
                      id="form__firstname-input"
                      className="form__input"
                      placeholder="Firstname"
                      type="text"
                      name="firstname"
                      {...register("firstname", {
                        required: true,
                      })}
                    />
                  </div>
                  {errors?.firstname?.type === "required" && (
                    <span className="form__error">This field is required</span>
                  )}
                </div>
                <div id="lastname__container">
                  <div id="lastname__container__wrap">
                    <h3 id="form__lastname-title" className="form__field-title">
                      Last name*
                    </h3>
                    <input
                      id="form__lastname-input"
                      className="form__input"
                      placeholder="Lastname"
                      type="text"
                      name="lastname"
                      {...register("lastname", {
                        required: true,
                      })}
                    />
                  </div>
                  {errors?.lastname?.type === "required" && (
                    <span className="form__error">This field is required</span>
                  )}
                </div>
              </div>
              <div id="form__email" className="form__item">
                <h3 id="form__email-title" className="form__field-title">
                  Email*
                </h3>
                <input
                  id="form__email-input"
                  className="form__input"
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
                <div id="form__password-container">
                  <div id="form__password__sub-container">
                    <div id="form__password__input-container">
                      <span id="form__password__input">
                        <input
                          id="form__password-input"
                          className="form__input"
                          placeholder="Password"
                          type={passwordShown ? "text" : "password"}
                          name="password"
                          {...register("password", {
                            required: true,
                            minLength: 8,
                            maxLength: 30,
                            pattern: /[a-zA-Z]/,
                          })}
                        />
                        <div id="eyes__password">
                          <i
                            onClick={togglePasswordVisiblity}
                            class={
                              passwordShown
                                ? "fa-regular fa-eye-slash"
                                : "fa-regular fa-eye"
                            }
                          />
                        </div>
                      </span>
                    </div>
                  </div>
                </div>

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
              <div id="form__signup-btn" className="form__item">
                <button id="signup" type="submit">
                  Sign up
                </button>
              </div>
              <div id="form__to-login">
                <span>
                  Already have an account? <Link to="/login">Sign in</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
