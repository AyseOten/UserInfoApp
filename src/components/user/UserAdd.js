import React, { useState } from 'react'
import { RestApi } from '../../utils/restapi/restapi';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const UserAdd = () => {
    const [displayBasic, setDisplayBasic] = useState(true);
    const [user, setUser] = useState({name:'',job:"",address:"",operator1:"",operator2:"",operator3:""});

    const onHide = () => {
        setDisplayBasic(false);
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        RestApi.addUser(user).then((res) => {
            console.log(res)
        }).then((err) => {
            console.log(err)
        })
        onHide();
        RestApi.getUsers().then((res) => {
            console.log(res)
        })
    }

    return (
        <div className='Add'>
            <Dialog header="Add User" visible={displayBasic} style={{ width: '50vw' }} onHide={onHide}>
                <form onSubmit={handleSubmit}>
                    <InputText value={user.name} placeholder="name" onChange={(e) => setUser({...user, name:e.target.value})} />
                    <InputText value={user.job}  placeholder="job" onChange={(e) => setUser({...user, job:e.target.value})} />
                    <InputText value={user.address}  placeholder="address" onChange={(e) => setUser({...user, address:e.target.value})} />
                    <InputText value={user.operator1}  placeholder="operator1" onChange={(e) => setUser({...user, operator1:e.target.value})} />
                    <InputText value={user.operator2} placeholder="operator2" onChange={(e) => setUser({...user, operator2:e.target.value})} />
                    <InputText value={user.operator3} placeholder="operator3" onChange={(e) => setUser({...user, operator3:e.target.value})} />
                    <div style={{ "display": "flex", justifyContent: "flex-end" }}>
                        <Button type='submit' style={{ width: 'auto' }} > Kaydet </Button>
                        <Button onClick={onHide} style={{ width: 'auto' }}  >İptal</Button>
                    </div>
                </form>
            </Dialog>
        </div>
    )
}

export default UserAdd