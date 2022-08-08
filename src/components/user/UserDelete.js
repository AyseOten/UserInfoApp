import React, {useState} from 'react'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { RestApi } from '../../utils/restapi/restapi';

const UserDelete = (props) => {
    const [displayBasic, setDisplayBasic] = useState(true);

    const onHide = () => {
        setDisplayBasic(false);
        props.onClose()
    }
    const deleteAction = () => {
        RestApi.deleteUser(props.user.id).then((res)=>{
            onHide();
        }).then((err)=> {
            console.log(err)
        })
        
    }

    return (
        <div className='Delete'>
            <Dialog header="Delete User" visible={displayBasic} style={{ width: '50vw' }} onHide={onHide}>
                <p>Seçilen kullanıcıyı silmek istediğinize emin misiniz?</p>
                <div style={{"display":"flex", justifyContent:"flex-end"}}>
                    <Button onClick={deleteAction} style={{ width: 'auto' }} > Evet </Button>
                    <Button onClick={onHide} style={{ width: 'auto' }}  >Hayır</Button>
                </div>
            </Dialog>
        </div>
    )
}

export default UserDelete