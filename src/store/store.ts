import { makeAutoObservable } from 'mobx'
import { fetchUsers } from './api'

class UserStore {
  users = []
  newUserName = ''
  newUserSurname = ''
  showCreateUserModal = false
  userToDelete = null

  constructor() {
    makeAutoObservable(this)
  }

  loadUsers = async () => {
    this.users = await fetchUsers()
  }

  openCreateUserModal = () => {
    this.showCreateUserModal = true
  }

  closeCreateUserModal = () => {
    this.showCreateUserModal = false
  }

  setNewUserName = name => {
    this.newUserName = name
  }

  setNewUserSurname = surname => {
    this.newUserSurname = surname
  }

  createUser = () => {
    // call API to create user

    this.closeCreateUserModal()
    this.newUserName = ''
    this.newUserSurname = ''
  }

  openDeleteUserModal = user => {
    this.userToDelete = user
  }

  closeDeleteUserModal = () => {
    this.userToDelete = null
  }

  deleteUser = () => {
    // call API to delete user

    this.closeDeleteUserModal()
  }
}

export const userStore = new UserStore()