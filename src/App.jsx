import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './componets/UserCard'
import FormUser from './componets/FormUser'


function App() {

  const [ updateInfo, setUpdateInfo ] = useState()
  const [closeForm, setCloseForm] = useState(true)

  const baseUrl = 'https://users-crud.academlo.tech'
  const [ 
    users,
    getAllUsers, 
    createNewUser, 
    deleteUserById, 
    updateUserById 
  ] = useFetch(baseUrl, setCloseForm)

  useEffect (() => {
    getAllUsers('/users')
  }, [])
  
  const handleOpenForm = () => {
    setCloseForm(false)
  }

  return (
    <>
    <div>
      <div className='userSection-container' ><h1>Users</h1>
      <button onClick={handleOpenForm} className='userSection__btn'>Create new user</button>
      </div>
      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo = {setUpdateInfo}
        closeForm = {closeForm}
        setCloseForm = {setCloseForm}
        handleOpenForm = {handleOpenForm}
      />
    
       <div className='userCard__container'>
        {
         users?.map(user =>(
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo = {setUpdateInfo}
              handleOpenForm={handleOpenForm}
              
              
              
          />
        ))
      }
      </div>
     </div>
    </>
  )
}

export default App
