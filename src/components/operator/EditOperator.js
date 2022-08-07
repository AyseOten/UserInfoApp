import React, { useState, useEffect } from 'react'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { RestApi } from '../../utils/restapi/restapi';
import { InputText } from 'primereact/inputtext';

const EditOperator = (props) => {
    const [displayBasic, setDisplayBasic] = useState(true);
    const [user, setUser] = useState({ name: '', job: "", address: "", operator1: "", operator2: "", operator3: "" });

    console.log(user)

    useEffect(() => {
        setUser((user) => ({
            ...user,
            name: props.user.name,
            job: props.user.job,
            address: props.user.address,
            operator1: props.user.operator1,
            operator2: props.user.operator2,
            operator3: props.user.operator3,
        }));
    }, [props]);

    const onHide = () => {
        setDisplayBasic(false);
    }
    const editOperator = () => {
        RestApi.editOperator(props.user.id, user).then((res) => {
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
        <div className='Operator'>
            <Dialog header="Edit Operator" visible={displayBasic} style={{ width: '50vw' }} onHide={onHide}>
                <div style={{"display":"flex", "flexDirection":"column"}}>
                    <div style={{"display":"flex"}}>
                        <InputText value={user.operator1} onChange={(e) => setUser({ ...user, operator1: e.target.value })} />
                    </div>
                    <div style={{"display":"flex"}}>
                        <InputText value={user.operator2} onChange={(e) => setUser({ ...user, operator2: e.target.value })} />
                    </div>
                    <div style={{"display":"flex"}}>
                        <InputText value={user.operator3} onChange={(e) => setUser({ ...user, operator3: e.target.value })} />
                    </div>
                </div>
                <div style={{ "display": "flex", justifyContent: "flex-end" }}>
                    <Button onClick={editOperator} style={{ width: 'auto' }} > Kaydet </Button>
                    <Button onClick={onHide} style={{ width: 'auto' }}  >İptal</Button>
                </div>
            </Dialog>
        </div>
    )

}

export default EditOperator