import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './Login.css';
import { useState } from 'react';

const Login = () => {

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit")
    }
    return (
        <div className='Login'>
            <div className='card'>
                <h2>User Info System</h2>
                <form onSubmit={handleSubmit}>
                    <div className='p-field'>
                        <label className='p-d-block'>Username</label>
                        <InputText value={value1} onChange={(e) => setValue1(e.target.value)} />
                    </div>
                    <div className='p-field'>
                        <label className='p-d-block'>Password</label>
                        <InputText type='password' value={value2} onChange={(e) => setValue2(e.target.value)} toggleMask feedback={false} />
                    </div>
                    <Button type='submit'>Login</Button>
                </form>
            </div>
        </div>
    )
}

export default Login