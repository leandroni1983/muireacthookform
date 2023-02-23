import { Box, Grid, Paper, TextField, Typography } from "@mui/material"

const HomePage = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ backgroundColor: 'primary.main', mt: 3, height: '450px' }}>
            <Typography variant="h1">Home App</Typography>

        </Grid >
    )
}
export default HomePage
