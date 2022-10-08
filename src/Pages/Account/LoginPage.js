import React, { useState } from 'react'
import { Avatar, Button, Card, CardActions, CardContent, Grid, TextField } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import LockIcon from '@mui/icons-material/Lock';
import Toastify from '../../Components/Toastify';
import {Login} from '../../Scripts/Auth'

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');


    const LoginHandle = () => {
        Login({ "UserName": username, "Password": password})
    
    }

    return (
        <Grid
            container
            spacing={3}
            justifyContent='center'
        >
            <Toastify />
            <Grid item xs={10} xl={12}></Grid>
            <Grid item xs={10} xl={4} md={4} lg={4}>
                <Card
                    sx={{ width: "fit-content" }}
                    elevation={5}
                    style={{}}
                >
                    <CardContent>
                        <Grid
                            container
                            spacing={3}
                            justifyContent='center'
                        >
                            <Grid item xs={2} xl={2}>
                                <Avatar >
                                    <LockIcon />
                                </Avatar>
                            </Grid>
                            <Grid item xs={12} xl={12}>
                                <TextField
                                    variant='outlined'
                                    placeholder='Username'
                                    label='Username'
                                    fullWidth
                                    name='username'
                                    type='text'
                                    id='username'
                                    autoComplete="current-username"
                                    onChange={(event) => { setUsername(event.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12} xl={12}>
                                <TextField
                                    variant='outlined'
                                    placeholder='Password'
                                    label='Password'
                                    fullWidth
                                    name='password'
                                    type='password'
                                    id='password'
                                    autoComplete="current-password"
                                    onChange={(event) => { setpassword(event.target.value) }}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Grid
                            container
                            spacing={0}
                            direction='column'
                            alignItems='center'
                            justifyItems='center'
                        >
                            <Grid
                                item
                                xs={2}
                                xl={12}
                            >
                                <Button
                                    variant='outlined'
                                    startIcon={<LoginIcon />}
                                    onClick={LoginHandle}
                                >
                                    Log In
                                </Button>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}

export default LoginPage