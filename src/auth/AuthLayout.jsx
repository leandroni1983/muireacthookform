import { Grid, Typography } from '@mui/material'
import React from 'react'

export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'secondary.main', padding: 4 }}>
            <Grid item
                boxShadow={"10px 10px 10px #ccc"}
                className='box-shadow'

                xs={3}
                sx={{ backgroundColor: 'primary.main', padding: 3, borderRadius: 2 }}>
                <Typography
                    variant='h3'
                    textAlign='center'
                    sx={{ mb: 1, color: 'secondary.main' }}>
                    {title}
                </Typography>

                {children}

            </Grid>
        </Grid>

    )
}
