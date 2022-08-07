import './Home.css'
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { RestApi } from '../../utils/restapi/restapi';
import { Button } from 'primereact/button';
import UserAdd from '../user/UserAdd';
import UserDelete from '../user/UserDelete';
import EditOperator from '../operator/EditOperator';
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext';

const Home = () => {

  const sortTypes = [
    { name: 'Sort By Name', code: 'name' },
    { name: 'Sort By ID', code: 'id' },
  ];

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [addUserMode, setAddUserMode] = useState(false)
  const [deleteUserMode, setDeleteUserMode] = useState(false)
  const [editOperatorMode, setEditOperatorMode] = useState(false)
  const [selectedSortType, setSelectedSortType] = useState(false)

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    RestApi.getUsers().then((res) => {
      setUsers(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const addNewUser = () => {
    setAddUserMode(true)
  }
  const deleteUser = () => {
    setDeleteUserMode(true)
  }
  const userDeleteCallback = () => {
    setDeleteUserMode(false)
    getUsers()
  }
  const userAddCallback = () => {
    setAddUserMode(false)
    getUsers()
  }
  const operatorEditCallback = () => {
    setEditOperatorMode(false)
    getUsers()
  }
  const operatorEdit = () => {
    setEditOperatorMode(true)
  }

  const onSortTypeChange = (e) => {
    setSelectedSortType(e.value)

    if (!(e.value)) {
      return
    }
    else if (e.value.code === "name") {
      const sortedData = users.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
      setUsers(sortedData)
    }
    else if (e.value.code === "id") {
      const sortedData = users.sort((a, b) => a.id - b.id);
      setUsers(sortedData)
    }
  }

  const onChangeFilter = (e) => {
    console.log(e.target.value)
    const filteredUser = users.filter((user) => user.name.includes(e.target.value))
    setUsers(filteredUser)

    if (e.target.value === "") {
      getUsers();
    }
  }

  return (
    <div className="Home">
      <div className="right">
        <div className="navbar">
        </div>
        <div className="content">
          <div style={{ "display": "flex", "justifyContent": "space-between" }}>
            <div style={{ "display": "flex" }}>
              <Button style={{ "width": "auto" }} onClick={addNewUser}> Add User</Button>
              <Button style={{ "width": "auto" }} disabled={!selectedUser.name} onClick={deleteUser}> Delete User</Button>
              <Button style={{ "width": "auto" }} disabled={!selectedUser.name} onClick={operatorEdit}> Operator Add/Delete</Button>
            </div>
            <div style={{ "display": "flex", "alignItems": "center" }}>
              <InputText style={{ "width": "auto" }} onChange={onChangeFilter} placeholder="Filter By Name" />
              <Dropdown value={selectedSortType} options={sortTypes} onChange={onSortTypeChange} optionLabel="name" placeholder="Select sort type" />
            </div>
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
      {deleteUserMode && <UserDelete user={selectedUser} onClose={userDeleteCallback}/>}
      {addUserMode && <UserAdd onClose={userAddCallback} />}
      {editOperatorMode && <EditOperator user={selectedUser}  onClose={operatorEditCallback}/>}
    </div>
  )
}

export default Home