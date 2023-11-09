import { observer } from 'mobx-react'
import { useStore } from './store/store'

const CreateUserModal = observer(() => {
  const { userStore } = useStore()

  if (!userStore.showCreateUserModal) return null

  return (
    <div className="modal">
      <div className="modal-content">
        <form
          onSubmit={e => {
            e.preventDefault()
            userStore.createUser()
          }}
        >
          <label>
            Name:
            <input
              value={userStore.newUserName}
              onChange={e => userStore.setNewUserName(e.target.value)}
            />
          </label>

          <label>
            Surname:
            <input
              value={userStore.newUserSurname}
              onChange={e => userStore.setNewUserSurname(e.target.value)}
            />
          </label>

          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  )
})

export default CreateUserModal