import './Home.css'
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { RestApi } from '../../utils/restapi/restapi';
import { Button } from 'primereact/button';
import UserAdd from '../user/UserAdd';
import UserDelete from '../user/UserDelete';

const Home = () => {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [addUserMode, setAddUserMode] = useState(false)
  const [deleteUserMode, setDeleteUserMode] = useState(false)

  useEffect(() => {
    RestApi.getUsers().then((res) => {
      setUsers(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, []);

  const addNewUser = () => {
    setAddUserMode(true)
  }
  const deleteUser = () => {
    setDeleteUserMode(true)
  }

  return (
    <div className="Home">
      <div className="left">
      </div>
      <div className="right">
        <div className="navbar">
        </div>
        <div className="content">
          <div>
            <Button style={{"width":"auto"}} onClick={addNewUser}> + Add User</Button>
            <Button style={{"width":"auto"}} disabled={!selectedUser.name} onClick={deleteUser}> - Delete User</Button>
          </div>
          <div className="table">
            <DataTable value={users} responsiveLayout="scroll" showGridlines selectionMode="single" selection={selectedUser} onSelectionChange={e => setSelectedUser(e.value)}>
              <Column field="id" header="ID"></Column>
              <Column field="name" header="Name"></Column>
              <Column field="job" header="Job"></Column>
              <Column field="address" header="Address"></Column>
              <Column field="operator1" header="Operator 1"></Column>
              <Column field="operator2" header="Operator 2"></Column>
              <Column field="operator3" header="Operator 3"></Column>
            </DataTable>
          </div>
        </div>
      </div>
      {deleteUserMode && <UserDelete user={selectedUser}/>}
      {addUserMode && <UserAdd/>}
    </div>
  )
}

export default Home