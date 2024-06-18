import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import RegistrationForm from './Form';
import { routeConstant } from '../../../Routes/constant';
import { signUpAPI } from '../../../Redux/Auth/SignUp';

const Registration = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavigateToSignIn = () => {
        navigate(routeConstant.signIn)
    }

    const formik = useFormik({
        initialValues: { email: '', password: '', username: '' },
        validationSchema: Yup.object({
            username: Yup.string().required("username is required."),
            email: Yup.string().email("Invalid Email Address.").required('Email is required.').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),
            password: Yup.string().min(8).required('password is required.')
        }),
        onSubmit: values => {
            dispatch(signUpAPI(values)).then((response:any) => {
                if (response?.payload) {
                    navigate(routeConstant?.signIn);
                }
            }).catch();
        }
    });
    return (
        <>
            <RegistrationForm formik={formik} handleNavigate={handleNavigateToSignIn}/>
        </>
    )
}

export default Registration