import React, { useEffect } from 'react'
import {Form,Input,message} from 'antd'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../api/api'
import Spinner from '../components/Spinner'
import '../styles/Registerpage.css'



const Register = () => {
    const [loading,setLoading] = useState(false);
    const navigate=useNavigate();
    const [formData,setFormData] = useState({
        userName:'',
        password:''
    });
    const {userName,password} = formData;

    const onChange = (e)=>{
        setFormData({...formData,[e.target.id]:e.target.value})
        console.log(formData)
    }


    const register =async()=>{
        try {
            setLoading(true);
            await registerUser(formData);
            message.success('Register Successful');
            setLoading(false);
            navigate('/login');
        } catch (error) {
            setLoading(false);
            message.error("User already exists");
        }

    }

    useEffect(()=>{
        if(localStorage.getItem('userName')){
            navigate('/')
        }
    },[navigate])

  return (
    <>
    <div className='register-page'>
        {loading && <Spinner/>}
        <Form layout='vertical'>
            <h1>Register</h1>
            <Form.Item label='userName'>
                <Input type='name' id='userName' placeholder='Enter your name' value={userName} onChange={(e)=>onChange(e)}/>
            </Form.Item>
            <Form.Item label='Password'>
                <Input type='password' id='password' placeholder='Enter your password' value={password} onChange={(e)=>onChange(e)}/>
            </Form.Item>
            <div className="d-flex justify-content-between">
                <Link to={"/login"}>Already Register ? Click here to login</Link>
                <button className="btn btn-primary" onClick={()=>register()}>Register</button>
            </div>
        </Form>
    </div>
    </>
  )
}

export default Register