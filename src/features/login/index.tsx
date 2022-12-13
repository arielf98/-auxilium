import { InputAdornment, Paper, TextField, TextFieldProps, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { globalStyle } from '../../globalStyle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React, { useRef, useState } from 'react';
import { Box } from '@mui/system';

export default function Login() {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const passwordRef = useRef(null)
    
    const handleShowPassword = () : void => {
        setIsShowPassword(!isShowPassword)
    } 

    const handleGetPasswordData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void => {
        setPassword(e.target.value)
    }

    return (
        <Container 
        maxWidth={'sm'}
        sx={{
            marginTop: 10,
        }}
        >
            <Paper
            style={globalStyle.center}
            sx={{
                backgroundColor: 'background.default',
                width: '500px',
                padding: '10px',
                flexDirection: 'column',
                gap: 1
            }}
            >
                <Typography>
                    Login
                </Typography>
                <Typography>
                    AUXILIUM
                </Typography>
                <Box m={2} mb={5}>
                <Typography>
                    Username
                </Typography>
                <TextField
                fullWidth
                placeholder='Masukkan username'
                >
                </TextField>
                <Typography sx={{mt:2}}>
                    Password
                </Typography>
                <TextField
                fullWidth
                placeholder='Masukkan password anda...'
                ref={passwordRef}
                type={isShowPassword ? 'text' : 'password'}
                onChange={(e) => handleGetPasswordData(e)}
                InputProps={{
                    endAdornment: <InputAdornment position='end'>
                        {isShowPassword ? 
                        <VisibilityIcon
                        onClick={() => handleShowPassword()}
                        sx={{
                            cursor: 'pointer'
                        }}
                        /> 
                        : 
                        <VisibilityOffIcon
                        onClick={() => handleShowPassword()}
                        sx={{
                            cursor: 'pointer'
                        }}
                        />
                        }
                        </InputAdornment>,
                }}
                value={password}
                >
                </TextField>
                </Box>
            </Paper>
        </Container>
    )
}
