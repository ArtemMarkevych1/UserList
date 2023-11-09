import { observer } from 'mobx-react'
import { useStore } from './store'
import DeleteUserModal from './DeleteUserModal'
import CreateUserModal from './CreateUserModal'

const UserList = observer(() => {
  const { userStore } = useStore()

  return (
    <div className="flex flex-col">
      <button
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => userStore.openCreateUserModal()}
      >
        Create User
      </button>

      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Surname</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userStore.users.map(user => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.surname}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => userStore.openDeleteUserModal(user)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <CreateUserModal />

      <DeleteUserModal />
    </div>
  )
})

export default UserList









