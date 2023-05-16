import * as React from 'react';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import theme from "../../theme/theme";
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import * as yup from "yup";
import { Formik,ErrorMessage } from "formik";
import {FormControl, FormHelperText } from "@mui/material";
export default function AddNewMSL(props) {
    const { closeModalPopup } = props;
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setError(false);
    };
    const handleSubmit = (event) => {

    }
    const validationSchema=yup.object().shape({
        MassLayOff:yup.number().required(" massLayOff is required"),
        MassLayOffDate: yup.date().required('MassLayOffDate is required'),
        RecallDate: yup.date().required(' RecallDate is required')
      })

    return (
        <>
         <Formik
        initialValues={{
          uiAccount: "",
          Unit: "",
          MassLayOff: "",
          MassLayOffDate:"",
          RecallDate:"",
          deductibleIncome: "",
          setFieldValue:""
        }}
        onSubmit={(values) => {
          console.log("form valyes", values);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
            <><DialogContent>
                        <Stack width="100%" justifyContent="center" alignItems="center">
                            <Box sx={{ marginTop: 3, width: "100%" }} fullWidth>
                            <form onSubmit={formik.handleSubmit}>
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
                                        <Grid container mt={2} alignItems="center">
                                            <Grid item md={5}>
                                                <Typography><span className='required'>*</span>Mass Layoff #:</Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    name="MassLayOff"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.MassLayOff}
                                                    error={formik.touched.MassLayOff && Boolean(formik.errors.MassLayOff)}
                                                    helperText={formik.touched.MassLayOff && formik.errors.MassLayOff} />
                                            </Grid>
                                        </Grid>
                                        <Grid container mt={2} alignItems="center">
                                            <Grid item md={5}>
                                                <Typography><span className='required'>*</span>Mass Layoff Date:</Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <LocalizationProvider dateAdapter={AdapterMoment}>
                                                <FormControl  error={ formik.touched.MassLayOffDate && Boolean(formik.errors.MassLayOffDate)}>
                                                    <DatePicker
                                                    name="MassLayOffDate"
                                                    label="MassLayOffDate"
                                                    value={formik.values.MassLayOffDate}
                                                    onChange={(value) => formik.setFieldValue('MassLayOffDate', value)}
                                                    onBlur={formik.handleBlur&&formik.MassLayOff==null}
                                                        slotProps={{ textField: { size: 'small', fullWidth: true } }} />
                                                         {formik.touched.MassLayOffDate && formik.errors.MassLayOffDate && (
                                                      <FormHelperText>{formik.errors.MassLayOffDate}</FormHelperText>
                                                      )}
                                                   </FormControl>
                                                </LocalizationProvider>
                                            </Grid>
                                        </Grid>
                                        <Grid container mt={2} alignItems="center">
                                            <Grid item md={5}>
                                                <Typography><span className='required'>*</span>Recall Date:</Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                            <LocalizationProvider dateAdapter={AdapterMoment}>
                      <FormControl error={formik.touched.RecallDate && Boolean(formik.errors.RecallDate)}>
                      <DatePicker
                   name="RecallDate"
                  label="RecallDate"
                  value={formik.values.RecallDate}
                  onChange={(value) => formik.setFieldValue('RecallDate', value)}
                  onBlur={formik.handleBlur}
                  />
                  {formik.touched.RecallDate && formik.errors.RecallDate && (
                <FormHelperText>{formik.errors.RecallDate}</FormHelperText>
                   )}
                  </FormControl>
                 
    
                  
                      

         
    </LocalizationProvider>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="center">
                                            <Grid item md={5}>
                                                <Typography>Deductible Income:</Typography>
                                            </Grid>
                                            <Grid item md={7}>
                                                <RadioGroup
                                                    aria-labelledby="demo-error-radios"
                                                    name="searchBy"
                                                    value={value}
                                                    onChange={handleRadioChange}
                                                >
                                                    <Stack direction="row" spacing={2}>
                                                        <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                                    </Stack>

                                                </RadioGroup>
                                            </Grid>
                                        </Grid>
                                    </FormGroup>
                                    <DialogActions sx={{ margin: 2 }}>
                    <Button variant="outlined" onClick={closeModalPopup}>
                      Cancel
                    </Button>
                    <Button variant="contained" type="submit">
                      OK
                    </Button>
                  </DialogActions>
                                </form>
                            </Box>
                        </Stack>
                    </DialogContent></>
             )}
             </Formik>
        </>
    )
}