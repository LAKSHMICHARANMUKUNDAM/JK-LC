import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormGroup from '@mui/material/FormGroup';
import theme from "../../theme/theme";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import { deepOrange, } from '@mui/material/colors';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';

import { blue, } from '@mui/material/colors';

import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import NHUISLogo from '../../../src/assets/images/NHUIS-Logo.gif'

export default function Header() {
    const navigate = useNavigate();

    return (
        <>
            <Box
                boxSizing="border-box"
                height={{ xs: "70px", midsm: "90px" }}
                sx={{
                    backgroundColor: "#183084", position: "fixed", zIndex: "999", top: 0
                }}
                width="100%"
                alignItems="center"
            >
                <Stack direction="row" marginLeft={2} spacing={3} alignItems="center" height="100%" >
                    <img src={NHUISLogo} height="70px" />
                    <Stack>
                        <Stack><Typography color="white">NEW HAMPSHIRE UNEMPLOYMENT INSURANCE SYSTEM</Typography></Stack>
                        {/* <Stack><Typography></Typography></Stack> */}
                    </Stack>
                </Stack>

            </Box>
        </>
    )
}