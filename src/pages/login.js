import { styled } from '@mui/system'
import { Button, Checkbox, Form, Input } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {
    const [user, setUser] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const onFinish = async () => {
        try {
            const res = await axios.post('https://contacts-api-a7x0.onrender.com/api/login', { user, password })
            toast(res.data.message)
            if (res.data.savedUser) {
                localStorage.setItem('test-user', res.data.savedUser)
                navigate('/home')
            }
        } catch (err) {
            console.log(err)
            toast(err.message)
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Component>

            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <h1>Login</h1>
                <Input placeholder='Username' value={user} onChange={(e) => setUser(e.target.value)} />
                <Input placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                <Button type="primary" htmlType="submit">
                    LogIn
                </Button>
                <br />
                <div><span>Don't have an account ? </span>

                    <Link to='/register'>Register</Link>
                </div>
            </Form>
        </Component >
    )
}
const Component = styled('div')({
    backgroundColor: '#393053',
    height: '100vh',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
    , form: {
        span: {
            color: 'white'
        },
        h1: {
            color: 'white',
            marginTop: '0px',
            marginBottom: '10px'
        },
        backgroundColor: 'black',
        Input: {
            color: 'white',
            width: '70%',
            "&::placeholder": {
                color: 'grey'
            },
            marginBottom: '20px',
            backgroundColor: 'black'
            , border: "solid blue 2px"
        },

        Checkbox: {
            color: 'white'
        },
        padding: '60px',
        height: "80vh",
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        border: 'solid black 2px',
        borderRadius: '50px'
    }
})
export default Login