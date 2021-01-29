import { useMutation } from '@apollo/react-hooks';
import React, { useRef, useState } from 'react'
import Input from '../../components/forms/Input'
import { CHANGE_PASSWORD, USERS, USERS_GET_ME } from '../../helpers/UsersGraphQL';
import { NavLink, Redirect } from "react-router-dom";

export default function ChangePasswordForm() {
    const [formData, setFormData] = useState(new Map());
    const [fail, setFail] = useState();
    let [changePassword, { loading }] = useMutation(CHANGE_PASSWORD)
    const [redirect, setRedirect] = useState(null);
    const formEl = useRef(null);
    function handleSubmit(e) {
        e.preventDefault();
        changePassword({
            variables: {
                ...formData,
            },
            refetchQueries: [{ query: USERS }, { query: USERS_GET_ME }],
        }).then(
            () => setRedirect("/login"),
            (res) => {
                setFail("Authentication failed, check your inputs")
                formEl.current.reset()
            }
        );
    }
    console.log(fail)
    function handleChange(e) {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    return redirect ? (
        <Redirect to={redirect} />
    ) : (
            <form ref={formEl} className="form" onSubmit={handleSubmit}>
                <div>
                    <Input
                        name="password"
                        label="Current Password"
                        onChange={handleChange}
                        required
                    />
                    <Input
                        name="newPassword"
                        label="New Password"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-footer">
                    <button onSubmit={handleSubmit}>Submit</button>
                </div>
                <small className="p-1 error">{fail}</small>
            </form>
        )
}
