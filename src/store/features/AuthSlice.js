import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
const initialState = {
    Message: '',
    User: '',
    AccessToken: '',
    Error: '',
    Code : '',
    onAuth : false,
    loading: false
}

export const signInUser = createAsyncThunk('signinuser', async (body) => {
    const res = await fetch("http://127.0.0.1:5000/auth/login" , {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(body)
    })
    return await res.json()
})

export const signUpUser = createAsyncThunk('usersignup', async (body) => {
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem('token')
        },
        addUser: (state, action) => {
            state.token = localStorage.getItem('user')
        },
        logout: (state, action) => {
            state.token = null
            localStorage.clear();
        }
    },
    extraReducers: {
        [signUpUser.pending]: (state, action) => {
            state.loading = true
        },
        [signUpUser.fulfilled]: (state, { payload: { error, message } }) => {
            state.loading = false;
            if (error) {
                state.error = error
            } else {
                state.message = message;
            }
        },
        [signUpUser.rejected]: (state, action) => {
            state.loading = true
        },


        [signInUser.pending]: (state, action) => {
            state.loading = true
        },
        [signInUser.fulfilled]: (state, {payload: { Error, Message, AccessToken, User , Code }}) => {
            state.loading = false;
            if (Error) {
                state.Error = Error
            } else {
                state.Message = Message;
                state.AccessToken = AccessToken;
                state.User = User;
                state.Code  = Code;
                state.onAuth = true;
                
                localStorage.setItem('Code', Code)
                localStorage.setItem('Message', Message)
                localStorage.setItem('User', User)
                localStorage.setItem('AccessToken', AccessToken)
              
            }
        },
        [signInUser.rejected]: (state, action) => {
            state.loading = true
        }
    }
})

export const { addToken, addUser, logout } = authSlice.actions;
export default authSlice.reducer