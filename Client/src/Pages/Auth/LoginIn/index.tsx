import { useRef } from 'react';
import * as Yup from 'yup';
import { useFormik } from "formik";
import {useDispatch} from 'react-redux';
import { routeConstant } from "../../../Routes/constant";
import LoginForm from "./Form"
import { useNavigate } from 'react-router-dom';
import { signInAPI } from '../../../Redux/Auth/SignIn';

const Login = () => {
  const navigate = useNavigate();
  const recaptcha:any = useRef();
  const dispatch = useDispatch();

  const handleNavigateToSignUp = () => {
    navigate(routeConstant.signUp)
  }

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email Address.").required('Email is required.').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),
      password: Yup.string().min(8).required('password is required.')
    }),
    onSubmit: (values:any) => {
      const captchaValue = recaptcha.current.getValue()
      if (!captchaValue) {
          alert('Please verify the reCAPTCHA!')
        } else {
          dispatch(signInAPI(values)).then((response:any) => {
              localStorage.setItem("user-token", JSON.stringify(response?.payload?.token));
              navigate(routeConstant?.dashboard);
          }).catch();
        }
    }
  });

  return (
    <>
      <LoginForm formik={formik} handleNavigate={handleNavigateToSignUp} recaptcha={recaptcha}/>
    </>
  )
}

export default Login