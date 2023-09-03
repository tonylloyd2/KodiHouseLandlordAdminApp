import React, { useEffect } from "react";
import CustomInput from "../Components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch,useSelector} from "react-redux";
import { login } from "../features/auth/authSlice";


let schema = Yup.object().shape({
  email:Yup.
  string().
  email("Not a valid email").
  required("Email required"),
  password:Yup.string().required("Password required"),
 })


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema:schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  const authState = useSelector((state)=>state);

  const {user,isError,isSuccess,isLoading,message}=authState.auth;

  useEffect(()=>{
    if(isSuccess){
      navigate("admin");
    }else{
      navigate("")
    }
  },[user,isError,isSuccess,isLoading])
  return (
    <>
      <div
        className="py-2"
        style={{
          background: "#232f3e",
          minHeight: "100vh",
        }}
      >
        <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
          <h5 className="text-center title">Login</h5>
          <p className="text-center">Login to your account to continue.</p>
          <div className="error text-center">
            {message.message =="Rejected" ? "You are not an admin":""}
          </div>
          <form action="" onSubmit={formik.handleSubmit}>
            <CustomInput
              type="email"
              label="email"
              name="email"
              id="email"
              onChng={formik.handleChange("email")}
              onBlr={formik.handleBlur("email")}
              val={formik.values.email}
              />
                <div className="error">
                {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ):null}
                </div>
              
            <CustomInput
              type="password"
              name="password"
              label="password"
              id="pass"
              onChng={formik.handleChange("password")}
              onBlr={formik.handleBlur("password")}
              val={formik.values.password}
            />

        <div className="error">
        {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ):null}
        </div>
            <div className="d-flex align-item-center mt-4">
              <button  type="submit" className="button signup text-white w-100 ">
                Login
              </button>
            </div>
            <div className="mt-3 text-end">
              <Link
                to="/forgot-password"
                className="text-decoration-none text-dark"
              >
                Forgot Password
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
