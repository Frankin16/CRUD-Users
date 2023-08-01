import "./styles/UserCard.css"

const UserCard = ({user, deleteUserById, setUpdateInfo, handleOpenForm }) => {

    const handleDelete = () => {

        deleteUserById('/users', user.id)

    }

    const handleUpdate = () => {
        setUpdateInfo(user)
        handleOpenForm()
    }
    
      return (
    <article className="userCard">
        <h2 className="userCard__title">{`${user.first_name} ${user.last_name}`}</h2>
        <hr className="userCard__line" />
        <ul className="userCard__list">
            <li className="userCard__item">
                <span className="userCard__item-title" >EMAIL</span>
                <span>{user.email}</span>
            </li>
            <li className="userCard__item">
                <span className="userCard__item-title" >BIRTHDAY</span>
                <span>{user.birthday}</span>
            </li>
        </ul>
        <hr className="userCard__line"/>
        <footer className="userCard__footer">
            <div className="userCard-btn__container">
            <button id="trash" className="userCard__btn" onClick={handleDelete} ><i className='bx bx-trash bx-sm'></i></button>
            <button className="userCard__btn" onClick={handleUpdate}><i className='bx bx-edit bx-sm' ></i></button>
            </div>
        </footer>
    </article>
  )
}

export default UserCard