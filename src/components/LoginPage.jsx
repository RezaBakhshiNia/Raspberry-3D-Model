import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { gapi } from "gapi-script";
// import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  const clientId =
    "777786950380-2mtpi6972qt7tcan8c42s7qp7105q8e1.apps.googleusercontent.com";

  toast.warn("رمز: هرچیزی، ایمیل: هرچیزی با فرمت ایمیل، مثل(a@a.com)");
  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({ clientId: clientId, scope: "" });
  //   }
  //   gapi.load("client:auth2", start);
  // }, []);
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required")
      .min(5, "Email should be at least 5 characters long")
      .max(50, "Email should not exceed 50 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password should be at least 8 characters long")
      .max(20, "Password should not exceed 20 characters"),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    console.log(values);
    navigate("/Home");
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1>Sign In</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} autoComplete="off">
              <div id="email-wrapper">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
              </div>
              <ErrorMessage name="email" component="small" />
              <div id="password-wrapper">
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" />
              </div>
              <ErrorMessage name="password" component="small" />
              <button className="submit-btn" type="submit">
                Login
              </button>
            </form>
          )}
        </Formik>
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              // localStorage.setItem(
              //   "credentialResponse",
              //   `${credentialResponse}`
              // );
              navigate("/home");
            }}
            onError={() => {
              toast.error("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default Login;
