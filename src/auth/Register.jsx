import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Grid, TextField, Typography, Link, InputAdornment, IconButton } from '@mui/material'
import { AuthLayout } from './AuthLayout'
import { Link as RouterLink } from "react-router-dom";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [iconAccountCircleColor, seticonAccountCircleColor] = useState('inherit')
    const [iconVisibilityColor, setVisibilityColor] = useState('inherit')
    const [iconEmailIcon, setEmailIconColor] = useState('inherit')
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = data => console.log(data)


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <AuthLayout title='LOgUp'>
            <Grid item sx={{ m: 2 }} >
                <form >
                    <Grid item xs={12} sx={{ m: 1 }}>
                        <TextField
                            id="outlined-basic-usuario"
                            error={Boolean(errors.usuario)}
                            {...register("usuario", { required: true })}
                            margin='normal'
                            label="Usuario"
                            variant="outlined"
                            color="secondary"
                            onFocus={() => seticonAccountCircleColor('secondary.main')}
                            onBlur={() => seticonAccountCircleColor('inherit')}
                            type={'text'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton
                                            sx={{ color: errors.usuario ? 'error.main' : iconAccountCircleColor }}>
                                            <AccountCircle />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}

                        />
                    </Grid>

                    <Grid item xs={12} sx={{ m: 1 }}>
                        <TextField
                            margin='normal'
                            error={Boolean(errors.email)}
                            id="outlined-basic-email"
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }
                            })}
                            label="E-Mail"
                            variant="outlined"
                            color="secondary"
                            type={'email'}
                            onFocus={() => setEmailIconColor('secondary.main')}
                            onBlur={() => setEmailIconColor('inherit')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton
                                            sx={{ color: errors.email ? 'error.main' : iconEmailIcon }}>
                                            <EmailIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ m: 1 }}>
                        <TextField
                            margin='normal'
                            error={Boolean(errors.password)}
                            id="outlinedr-basic-password"
                            {...register("password", {
                                required: true,
                                pattern: {
                                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gim,
                                    message: 'Debe contener 8 caracteres, manyusculas y numeros'
                                }
                            })}
                            label="Password"
                            variant="outlined"
                            color="secondary"
                            type={showPassword ? 'text' : 'password'}
                            onFocus={() => setVisibilityColor('secondary.main')}
                            onBlur={() => setVisibilityColor('inherit')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment
                                        position="start">
                                        <IconButton
                                            sx={{ color: errors.password ? 'error.main' : iconVisibilityColor }}
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}>
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }} />
                        {errors.password ? <Typography color={'secondary'} fontSize={'10px'} >{errors.password.message}</Typography> : <></>}
                    </Grid>



                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6} >
                            <Button
                                type="submit"
                                color='secondary'
                                variant='contained'
                                fullWidth
                                onClick={handleSubmit(onSubmit)}>
                                <Typography sx={{ mr: 1 }} >LogUp</Typography>  <HowToRegIcon />
                            </Button>

                        </Grid>

                        <Grid item xs={12} sm={6} >
                            <Button
                                color='error'
                                fullWidth
                                variant='contained'
                            >
                                <GoogleIcon sx={{ color: 'white' }} /> <Typography sx={{ ml: 1, color: 'white' }} >Google</Typography>
                            </Button>

                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Link

                            sx={{ mt: 2 }}
                            component={RouterLink}
                            color="inherit"
                            underline='none'
                            to="/auth/login"
                        >
                            <Typography> LogIn</Typography>
                        </Link>
                    </Grid>
                </form >
            </Grid>
        </AuthLayout >
    )
}

export default Register
