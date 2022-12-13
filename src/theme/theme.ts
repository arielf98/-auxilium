import { createTheme } from '@mui/material/styles';
import { blue, green, grey, red, yellow } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        background: {
            default: grey[100],
        },
        primary: {
            main: green[300],
        },
        secondary: {
            main: blue[400],
        },
    }
})