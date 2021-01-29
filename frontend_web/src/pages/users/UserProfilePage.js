import { useQuery } from '@apollo/react-hooks';
import React, { useState } from 'react'
import Input from '../../components/forms/Input';
import Modal from '../../components/modals/Modal_';
import { USERS_GET_ME } from '../../helpers/UsersGraphQL';
import ChangePasswordForm from './ChangePasswordForm';

export default function UserProfilePage() {
    const [formOpen, setFormOpen] = useState()
    let { loading, error, data } = useQuery(USERS_GET_ME);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const user = data.me;
    console.log(user)
    return (
        <div className="user-profile">
            <div className="info">
                <div className="profile-photo">
                    <label htmlFor="photo" className="photo">
                        <img src="/static/images/user.jpg" alt="User" />
                        <Input
                            type="file"
                            accept="image/*"
                            id="photo"
                            name="photo"
                        />
                    </label>
                </div>
                <div>
                    <h3>{user.username}</h3>
                    <small>
                        {user.isSuperuser ? <span>Administrator</span> : <span>User</span>}
                    </small>
                </div>
            </div>
            <table>
                <tbody>
                    <tr><th>First Name</th><td>{user.firstName}</td></tr>
                    <tr><th>Last Name</th><td>{user.lastName}</td></tr>
                    <tr><th>Email Name</th><td>{user.email}</td></tr>
                </tbody>
            </table>
            <div className="update">
                <button
                    onClick={() => setFormOpen(!formOpen)}
                >
                    Change password
                </button>
            </div>
            {formOpen && <Modal title="Change My Password" onClose={() => setFormOpen(false)}>
                <ChangePasswordForm onComplete={setFormOpen} />
            </Modal>}
        </div>
    )
}
