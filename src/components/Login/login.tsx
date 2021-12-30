import React, { FC, useState } from 'react';
import classes from './login.module.scss'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { ILoginProps, ITokenAxiosReponse, ICredentialsObj, ICreadentials, LoginAndPassword} from './loginInterfaces'

const theme = createTheme({
  palette: {
    primary: {
      light: '#e9e6f7',
      main: '#d0cceb'
    }
  }
})

const Login: FC<ILoginProps> = ({ setToken }) => {

  const [values, setValues] = useState({
    login: '',
    password: '',
    showPassword: false
  })

  const loginUser = async (credentials: ICredentialsObj) => {
    const loginAndPassword: LoginAndPassword = {};
    loginAndPassword.login = credentials.values.login
    loginAndPassword.password = credentials.values.password
    const response = await axios.post<AxiosRequestConfig<ICredentialsObj>, AxiosResponse<ITokenAxiosReponse, ICredentialsObj>>('http://localhost:8080/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(loginAndPassword)
    })
    console.log(response)
    return response.data
  }


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const userToken = await loginUser({
      values
    });
    setToken(userToken.token);
  }

  const handleInputsChange = (prop: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: e.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    })
  }

  const handleMouseDownPassword = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className={classes.position}>

      <Box

        component='form'
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'column',
          border: 1,
          borderRadius: 2,
          bgcolor: theme.palette.primary.light,
          boxShadow: 3,
          width: 400,
          height: 300,
          position: 'absolute',

        }}
      >
        <h1>Login pls</h1>
        <TextField
          sx={{ m: 1, width: '20ch' }}
          required
          id="outlined-required"
          label="Login"
          size='small'
          value={values.login}
          onChange={handleInputsChange('login')}
        />
        <OutlinedInput
          sx={{ m: 1, width: '20ch' }}
          required
          id="outlined-adornment-password"
          placeholder='password'
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleInputsChange('password')}
          autoComplete="current-password"
          size='small'
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}

              </IconButton>
            </InputAdornment>
          }
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            width: 40,
            height: 30,
            alignSelf: 'flex-end',
            mr: 14
          }}
          onClick={handleSubmit}

        >
          login
        </Button>
      </Box>
    </div>
  )
}

export default Login;