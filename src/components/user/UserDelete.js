import React, {useState} from 'react'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { RestApi } from '../../utils/restapi/restapi';

const UserDelete = (props) => {
    const [displayBasic, setDisplayBasic] = useState(true);

    console.log(props.user)

    const onHide = () => {
        setDisplayBasic(false);
    }
    const deleteAction = () => {
        RestApi.deleteUser(props.user.id).then((res)=>{
            console.log(res)

        }).then((err)=> {
            console.log(err)
        })
        onHide();
        RestApi.getUsers().then((res)=> {
            console.log(res)
        })
    }

    return (
        <div className='Delete'>
            <Dialog header="Delete User" visible={displayBasic} style={{ width: '50vw' }} onHide={onHide}>
                <p>Seçilen kullanıcıyı silmek istediğinize emin misiniz?</p>
                <div style={{"display":"flex", }}>
                    <Button onClick={deleteAction} style={{ width: 'auto' }} > Evet </Button>
                    <Button onClick={onHide} style={{ width: 'auto' }}  >Hayır</Button>
                </div>
            </Dialog>
        </div>
    )
}

export default UserDelete