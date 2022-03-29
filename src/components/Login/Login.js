import './Login.scss'
import axios from 'axios'
import * as ReactDOMClient from 'react-dom/client';
import { useEffect, useState } from 'react';

const Login = () => {
    const [user, setUser] = useState([])
    const [inputUser, setInputUser] = useState('')

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                const api = res.data
                setUser(api.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <div className="login">
            <label>Nhap Email cua ban: </label>
            <input value={inputUser} type='text' onChange={(event) => { setInputUser(event.target.value) }} />
            <ul>
                {
                    user.map(user => <li key={user.id}>{user.email}</li>)
                }
            </ul>
        </div>
    )
}

export default Login