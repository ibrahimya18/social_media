import React,{useState} from 'react'
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme
} from "@mui/material"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from 'formik';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../state';
import Dropzone from 'react-dropzone';
import FlexBetween from '../../components/FlexBetween';
import { Palette } from '@mui/icons-material';

const registerSchema =yup.object().shape({
    firtsName: yup.string().required("required"),
    lastName:yup.string().required("required"),
    email:yup.string().email("invalid email").required("required"),
    password:yup.string().required("required"),
    location:yup.string().required("required"),
    occupation:yup.string().required("required"),
    picture:yup.string().required("required"),
})

const loginSchema =yup.object().shape({
    email:yup.string().email("invalid email").required("required"),
    password:yup.string().required("required"),
});

const initialValuesRegister={
    firtsName:"",
    lastname:"",
    email:"",
    password:"",
    location:"",
    occupation:"",
    picture:"",
}

const initialValuesLogin={
    email:"",
    password:"",
}


const From = () => {
   const [pageType,setPageType]=useState("login");
   const {Palette}=useTheme();
   const dispatch= useDispatch();
   const navigate=useNavigate();
   const isLogin=pageType==="login";
   const isRegister =pageType==="register";

   const handleFormSubmit=async(values, onsubmitProps)={};

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={isLogin? initialValuesLogin:initialValuesRegister}
            validationSchema={isLogin?loginSchema:registerSchema}
            >
                {
                ({values,
                    errors,touched,handleBlur,handleChange,handleSubmit,setFieldValue,resetForm
                })
                }

        </Formik>
    )
}

export default From