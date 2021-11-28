import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {
    Container,
    Card, CardContent, CardHeader,
    Box, FormControl, TextField, Stack, Button
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Please provide valid email address.').required('Email address is required.'),
    password: Yup.string('Please enter your password.')
        .min(4, 'Password should be of minimum of 4 characters.')
        .required('Password is required.'),
})

const Login = () => {
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
        showPassword: false
    })
    const history = useNavigate();

    const onHandelClickShowPassword = () => {
        setFormValues({
            ...formValues,
            showPassword: !formValues.showPassword
        });
    }

    const onHandelRegistrationClick = () => {
        history("/signin")
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            console.log("Values: ", values);
            axios.post("http://localhost:3001/login", values)
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

            <Card sx={{ maxWidth: 500 }}>
                <CardHeader title="Login" />
                <CardContent>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl sx={{ m: 1, width: '40ch' }}>
                                <TextField
                                    id="email"
                                    label="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && formik.errors.email}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </FormControl>

                            <FormControl sx={{ m: 1, width: '40ch' }}>
                                <TextField
                                    id="password"
                                    label="Password"
                                    type={formValues.showPassword ? 'text' : 'password'}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && formik.errors.password}
                                    helperText={formik.touched.password && formik.errors.password}
                                    InputProps={{
                                        endAdornment: formValues.showPassword ? <VisibilityOff onClick={onHandelClickShowPassword} /> : <Visibility onClick={onHandelClickShowPassword} />
                                    }}
                                />
                            </FormControl>

                            <br /><br /><br />
                            <FormControl>
                                <Stack spacing={3} direction="row">
                                    <Button variant="contained"
                                        endIcon={<LoginIcon />}
                                        type="submit">Login</Button>
                                    <Button variant="contained"
                                        endIcon={<PersonIcon />}
                                        onClick={onHandelRegistrationClick}>Signup</Button>
                                </Stack>
                            </FormControl>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Login;