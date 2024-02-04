import React, { useEffect } from 'react'
import {Form,Input,message} from 'antd'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { loginUser } from '../api/api'
import Spinner from '../components/Spinner'
import '../styles/Loginpage.css'


const Login = () => {
    const [loading,setLoading] = useState(false);
    const navigate=useNavigate();
    const [formData,setFormData] = useState({
        userName:"",
        password:""
    });
    const {userName,password} = formData;

    const onChange = (e)=>{
        setFormData({...formData,[e.target.id]:e.target.value})
        console.log(formData)
    }

    const login =async()=>{
        try {
            setLoading(true);
            await loginUser(formData);
            message.success('Login Successful');
            setLoading(false);
            localStorage.setItem('userName',JSON.stringify(formData.userName));
            navigate('/');
        } catch (error) {
            setLoading(false);
            message.error("Invalid Username or Password");
        }

    }
    useEffect(()=>{
        if(localStorage.getItem('userName')){
            navigate('/')
        }
    },[navigate])

  return (
    <>
    <div className='login-page'>
        {loading && <Spinner/>}
        <Form layout='vertical'>
            <h1>Login</h1>
            <Form.Item label='userName'>
                <Input type='name' id='userName' placeholder='Enter your name' value={userName} onChange={(e)=>onChange(e)}/>
            </Form.Item>
            <Form.Item label='password'>
                <Input type='password' id='password' placeholder='Enter your password' value={password} onChange={(e)=>onChange(e)}/>
            </Form.Item>
            <div className="d-flex justify-content-between">
                <Link to='/register'>Not Registered? Click here to Register</Link>
                <button className="btn btn-primary" onClick={()=>login()}>Login</button>
            </div>
        </Form>
    </div>
    </>
  )
}

export default Login