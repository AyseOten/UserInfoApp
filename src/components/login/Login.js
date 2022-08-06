import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './Login.css';
import { useState } from 'react';
import { RestApi } from '../../utils/restapi/restapi';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({name:'',password:""});

    const handleSubmit = (event) => {
        event.preventDefault();

        RestApi.login(userInfo.name, userInfo.password).then((res)=> {
            if(res.data.name){
                navigate("/home")
            }
        })
    }
    return (
        <div className='Login'>
            <div className='card'>
                <h2>User Info System</h2>
                <form onSubmit={handleSubmit}>
                    <div className='p-field'>
                        <label className='p-d-block'>Username</label>
                        <InputText value={userInfo.name} onChange={(e) => setUserInfo({...userInfo, name:e.target.value})} />
                    </div>
                    <div className='p-field'>
                        <label className='p-d-block'>Password</label>
                        <InputText type='password' value={userInfo.password} onChange={(e) =>setUserInfo({...userInfo, password:e.target.value})} toggleMask feedback={false} />
                    </div>
                    <Button type='submit'>Login</Button>
                </form>
            </div>
        </div>
    )
}

export default Login