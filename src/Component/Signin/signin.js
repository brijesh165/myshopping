import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {
    Container,
    Card, CardContent, CardHeader,
    Box, FormControl, TextField, Stack, Button
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { useFormik } from 'formik';
import * as Yup from 'yup';


const signUpSchema = Yup.object().shape({
    email: Yup.string().email('Please provide valid email address.').required('Email address is required.'),
    password: Yup.string('Please enter your password.')
        .min(4, 'Password should be of minimum of 4 characters.')
        .required('Password is required.'),
    confirmPassword: Yup.string('Please enter confirm password.')
        .required('Confirm Password is required.')
        .oneOf([Yup.ref("password")], "Password does not match. Please try again."),
    firstname: Yup.string("Please enter first name.")
        .min(2, "First name should be of minimum 2 characters.")
        .required("First name is required."),
    lastname: Yup.string("Please enter last name.")
        .min(2, "Last name should be of minimum 2 characters.")
        .required("Last name is required."),
})

const Signin = (props) => {
    const [registrationForm, setRegistrationForm] = useState({
        showPassword: false,
        showConfirmPassword: false
    });
    const history = useNavigate();

    const onHandelClickShowPassword = () => {
        setRegistrationForm({
            ...registrationForm,
            showPassword: !registrationForm.showPassword
        });
    }

    const onHandelClickShowConfirmPassword = () => {
        setRegistrationForm({
            ...registrationForm,
            showConfirmPassword: !registrationForm.showConfirmPassword
        });
    }

    const onHandleCancel = () => {
        history("/")
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
            firstname: "",
            middlename: "",
            lastname: ""
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log("Values: ", values);
            axios.post("http://localhost:3001/registration", values)
                .then((resp) => {
                    console.log("Response: ", resp)
                })
                .catch((error) => {
                    console.log("Error: ", error)
                })

        }
    })

    return (
        <Container maxWidth="sm"
            sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <Card>
                <CardHeader title="Sign Up" />
                <CardContent>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl sx={{ m: 1, width: '50ch' }}>
                                {/* <InputLabel htmlFor="email">Email</InputLabel> */}
                                <TextField
                                    id="email"
                                    placeholder="Email"
                                    label="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && formik.errors.email}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                                {/* {formik.touched.email && formik.errors.email &&
                                <FormHelperText id="component-error-text" color="error">
                                    Please enter valid Email</FormHelperText>
                            } */}
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '50ch' }}>
                                {/* <InputLabel htmlFor="password">Password</InputLabel> */}
                                <TextField
                                    id="password"
                                    placeholder="Password"
                                    label="Password"
                                    type={registrationForm.showPassword ? 'text' : 'password'}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && formik.errors.password}
                                    helperText={formik.touched.password && formik.errors.password}
                                    InputProps={{
                                        endAdornment: registrationForm.showPassword ? <VisibilityOff onClick={onHandelClickShowPassword} /> : <Visibility onClick={onHandelClickShowPassword} />
                                    }}
                                // endAdornment={
                                //     <InputAdornment position="end">
                                //         <IconButton
                                //             aria-label="toggle password visibility"
                                //             onClick={onHandelClickShowPassword}
                                //             edge="end"
                                //         >
                                //             {registrationForm.showPassword ? <VisibilityOff /> : <Visibility />}
                                //         </IconButton>
                                //     </InputAdornment>
                                // }
                                />
                                {/* {registrationFormError.passwordError &&
                                <FormHelperText id="component-error-text" color="error">
                                    {registrationFormError.passwordMessage}</FormHelperText>
                            } */}
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '50ch' }}>
                                {/* <InputLabel htmlFor="confirmpassword">Confirm Password</InputLabel> */}
                                <TextField
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    label="Confirm Password"
                                    type={registrationForm.showConfirmPassword ? 'text' : 'password'}
                                    value={formik.values.confirmpassword}
                                    onChange={formik.handleChange}
                                    error={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                    InputProps={{
                                        endAdornment: registrationForm.showConfirmPassword ? <VisibilityOff onClick={onHandelClickShowConfirmPassword} /> : <Visibility onClick={onHandelClickShowConfirmPassword} />
                                    }}
                                // endAdornment={
                                //     <InputAdornment position="end">
                                //         <IconButton
                                //             aria-label="toggle password visibility"
                                //             onClick={onHandelClickShowConfirmPassword}
                                //             edge="end"
                                //         >
                                //             {registrationForm.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                //         </IconButton>
                                //     </InputAdornment>
                                // }
                                />
                                {/* {registrationFormError.confirmpasswordError &&
                                <FormHelperText id="component-error-text" color="error">
                                    {registrationFormError.confirmPasswordMessage}</FormHelperText>
                            } */}
                            </FormControl>

                            <Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 }, }}>
                                <FormControl>
                                    {/* <InputLabel htmlFor="firstname">First Name</InputLabel> */}
                                    <TextField
                                        id="firstname"
                                        placeholder="First Name"
                                        label="First Name"
                                        value={formik.values.firstname}
                                        onChange={formik.handleChange}
                                        error={formik.touched.firstname && formik.errors.firstname}
                                        helperText={formik.touched.firstname && formik.errors.firstname}
                                    />
                                    {/* {registrationFormError.firstnameError &&
                                    <FormHelperText id="component-error-text" color="error">
                                        Please enter first name.</FormHelperText>
                                } */}
                                </FormControl>
                                <FormControl>
                                    {/* <InputLabel htmlFor="middlename">Middle Name</InputLabel> */}
                                    <TextField
                                        id="middlename"
                                        placeholder="Middle Name"
                                        label="Middle Name"
                                        value={formik.values.middlename}
                                        onChange={formik.handleChange}
                                    />
                                </FormControl>
                                <FormControl>
                                    {/* <InputLabel htmlFor="lastname">Last Name</InputLabel> */}
                                    <TextField
                                        id="lastname"
                                        placeholder="Last Name"
                                        label="Last Name"
                                        value={formik.values.lastname}
                                        onChange={formik.handleChange}
                                        error={formik.touched.lastname && formik.errors.lastname}
                                        helperText={formik.touched.lastname && formik.errors.lastname}

                                    />
                                    {/* {registrationFormError.lastnameError &&
                                    <FormHelperText id="component-error-text" color="error">
                                        Please enter last name.</FormHelperText>
                                } */}
                                </FormControl>
                            </Box>
                            <FormControl>
                                <Stack spacing={2} direction="row">
                                    <Button variant="contained" type="submit">SignUp</Button>
                                    <Button variant="contained" onClick={onHandleCancel}>Cancel</Button>
                                </Stack>
                            </FormControl>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Signin;