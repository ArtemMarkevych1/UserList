import { observer } from 'mobx-react' 
import { useStore } from './store/store'

const DeleteUserModal = observer(() => {
  const { userStore } = useStore()

  if (!userStore.userToDelete) return null

  return (
    <div className="modal">
      <div className="modal-content">
        Are you sure you want to delete {userStore.userToDelete.name} {userStore.userToDelete.surname}?

        <button
          onClick={() => userStore.deleteUser()}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Confirm
        </button>

        <button
          onClick={() => userStore.closeDeleteUserModal()}
          className="ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  ) 
})

export default DeleteUserModal