import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Button, Grid, TextField, Link, InputAdornment, IconButton, Typography } from '@mui/material'
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from './AuthLayout'
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
const LoginPage = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [iconAccountCircleColor, seticonAccountCircleColor] = useState('inherit')
    const [iconVisibilityColor, setVisibilityColor] = useState('inherit')
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = data => console.log(data);


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };



    return (
        <AuthLayout title='LOgIn'>
            <Grid item sx={{ m: 2 }} >
                <form >
                    <Grid item xs={12} sx={{ m: 2 }}>
                        <TextField
                            margin='normal'
                            error={Boolean(errors.usuario)}
                            {...register("usuario", { required: true, maxLength: 20 })}
                            id="outlined-basic-usuario"
                            label="Usuario"
                            variant="outlined"
                            color="secondary"
                            type={'text'}
                            onFocus={() => seticonAccountCircleColor('secondary.main')}
                            onBlur={() => seticonAccountCircleColor('inherit')}
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

                    <Grid item xs={12} sx={{ m: 2 }}>
                        <TextField
                            margin='normal'
                            error={Boolean(errors.password)}
                            {...register("password", { required: true })}
                            id="outlined-basic-password"
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
                            }}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6} >
                            <Button
                                type="submit"
                                color='secondary'
                                variant='contained'
                                fullWidth
                                onClick={handleSubmit(onSubmit)}>
                                <Typography sx={{ mr: 1 }} >LogIn</Typography>  <LoginIcon />
                            </Button>

                        </Grid>

                        <Grid item xs={12} sm={6} >
                            <Button
                                color='error'
                                fullWidth
                                variant='contained'>
                                <GoogleIcon sx={{ color: 'white' }} /> <Typography sx={{ ml: 1, color: 'white' }} >Google</Typography>
                            </Button>

                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Link
                            sx={{ mt: 1 }}

                            component={RouterLink}
                            color="inherit"
                            to="/auth/register"
                            underline="none">
                            <Typography> LogUp</Typography>
                        </Link>
                    </Grid>
                </form>

            </Grid >
        </AuthLayout >
    )
}

export default LoginPage
