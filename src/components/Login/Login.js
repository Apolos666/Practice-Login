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
    }, [])

    const compareData = () => {
        let accountEmail = user.map(item => item.email)
        let compareUser = accountEmail.filter(item => item == inputUser)
        if (compareUser.length == 0) {
            alert('Dang nhap khong thanh cong')
        } else {
            alert('Dang nhap thanh cong')
        }

    }

    return (
        <div className="login">
            <label>Nhập Email của bạn: </label>
            <input value={inputUser} type='text' onChange={(event) => { setInputUser(event.target.value) }} />
            <div className='btn-login'>
                <button onClick={() => { compareData() }}>Đăng Nhập</button>
            </div>

        </div>
    )
}

export default Login