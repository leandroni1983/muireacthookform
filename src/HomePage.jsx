import { AccountCircle } from '@mui/icons-material'
import { Button, Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'

const HomePage = () => {
    const [color, setColor] = useState('blue');

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('submiteando')

    }
    return (
        <div>
            <Grid>
                <form onSubmit={onSubmit}>

                    <TextField
                        onFocus={() => setColor('red')}
                        onBlur={() => setColor('blue')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <IconButton
                                        sx={{ color: color }}
                                    >
                                        <AccountCircle

                                        />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        type='submit'
                        variant='contained'
                        onClick={onSubmit}
                    >
                        Ingresar
                    </Button>
                </form>
            </Grid>
        </div >
    )
}

export default HomePage
