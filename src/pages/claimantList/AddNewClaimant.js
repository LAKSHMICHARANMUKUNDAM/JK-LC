import * as React from 'react';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import FormGroup from '@mui/material/FormGroup';
import theme from "../../theme/theme";
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default function AddNewClaimant(props) {
    const { closeModalPopup } = props;

    const handleSubmit = (event) => {

    }

    return (
        <>
            <DialogContent>
                <Stack width="100%" justifyContent="center" alignItems="center">

                    <Box sx={{ marginTop: 3, width: "100%" }} fullWidth>
                        <form onSubmit={handleSubmit}>

                            <FormGroup>
                                <Grid container alignItems="center">
                                    <Grid item md={5}>
                                        <Typography fontWeight="bold" color="#183084">Employer:</Typography>
                                    </Grid>
                                    <Grid item md={7}>
                                        <Typography>Hartford Industries</Typography>
                                    </Grid>
                                </Grid>

                                <Grid mt={2} container alignItems="center">
                                    <Grid item md={5}>
                                        <Typography fontWeight="bold" color="#183084">UI Account #:</Typography>
                                    </Grid>
                                    <Grid item md={7}>
                                        <Typography>000096876</Typography>
                                    </Grid>
                                </Grid>
                                <Grid mt={2} container alignItems="center">
                                    <Grid item md={5}>
                                        <Typography fontWeight="bold" color="#183084">Unit:</Typography>
                                    </Grid>
                                    <Grid item md={7}>
                                        <Typography>000</Typography>
                                    </Grid>
                                </Grid>

                                <Grid mt={2} container alignItems="center">
                                    <Grid item md={5}>
                                        <Typography fontWeight="bold" color="#183084">Mass Layoff #:</Typography>
                                    </Grid>
                                    <Grid item md={7}>
                                        <Typography>1265765</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container mt={2} alignItems="center">
                                    <Grid item md={5}>
                                        <Typography fontWeight="bold" color="#183084">Mass Layoff Date:</Typography>
                                    </Grid>
                                    <Grid item md={7}>
                                        <Typography>2/10/2023</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container mt={2} alignItems="center">
                                    <Grid item md={5}>
                                        <Typography fontWeight="bold" color="#183084">Recall Date:</Typography>
                                    </Grid>
                                    <Grid item md={7}>
                                        <Typography>2/17/2023</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container mt={2} alignItems="center">
                                    <Grid item md={5}>
                                        <Typography><span className='required'>*</span>Enter SSN:</Typography>
                                    </Grid>
                                    <Grid item md={7}>
                                        <TextField size='small' fullWidth />
                                    </Grid>
                                </Grid>
                                <Grid container mt={2} alignItems="center">
                                    <Grid item md={5}>
                                        <Typography><span className='required'>*</span>Reenter SSN:</Typography>
                                    </Grid>
                                    <Grid item md={7}>
                                        <TextField size='small' fullWidth />
                                    </Grid>
                                </Grid>
                            </FormGroup>

                        </form>
                    </Box>
                </Stack>
            </DialogContent>
            <DialogActions sx={{ margin: 2 }}>
                <Button variant="outlined" onClick={closeModalPopup}>Cancel</Button>
                <Button variant="contained">OK</Button>
            </DialogActions>
        </>
    )
}