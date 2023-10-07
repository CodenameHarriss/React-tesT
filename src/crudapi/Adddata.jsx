import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Adddata() {

    const [newUser, setNewUser] = useState({
        fullname: '',
        phone: '',
        address: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newUser.fullname || !newUser.phone || !newUser.address || !newUser.email || !newUser.password) {
            alert("กรุณากรอกข้อมูลให้ครบถ้วน");
            return;
        }
        const data = {
            fullname: newUser.fullname,
            phone: newUser.phone,
            address: newUser.address,
            email: newUser.email,
            password: newUser.password
        }
        axios.post('http://127.0.0.1:3001/user/create', data)  //http://localhost:3001/user//create (localhost)
            .then((res) => {
                console.log(res.data)
                alert("เพิ่มข้อมูลสำเร็จ")
                navigate("/ListData")
            })
            .catch((error) => {
                console.error(error);
                alert("เกิดข้อผิดพลาดในการเพิ่มข้อมูล!!")
            })
    }

    return (
        <div className='container'>
            <h2 className='text-center fw-bold mt-2'>เพิ่มข้อมูล</h2>
            <form onSubmit={handleSubmit}>
                <div className='row g-2'>
                    <div className='col-md-6'>
                        <div className="form-floating">
                            <input type="text" className="form-control" name='fullname' placeholder="ชื่อ-นามสกุล" onChange={e => setNewUser({ ...newUser, fullname: e.target.value })} />
                            <label>ชื่อ-นามสกุล</label>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="form-floating">
                            <input type="number" className="form-control" name='phone' placeholder="หมายเลขโทรศัพท์" onChange={e => setNewUser({ ...newUser, phone: e.target.value })} />
                            <label>หมายเลขโทรศัพท์</label>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className="form-floating">
                            <input type="text" className="form-control" name='address' placeholder="ที่อยู่" onChange={e => setNewUser({ ...newUser, address: e.target.value })} />
                            <label>ที่อยู่</label>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="form-floating">
                            <input type="email" className="form-control" name='email' placeholder="Email" onChange={e => setNewUser({ ...newUser, email: e.target.value })} />
                            <label>Email</label>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="form-floating">
                            <input type="password" className="form-control" name='password' placeholder="password" onChange={e => setNewUser({ ...newUser, password: e.target.value })} />
                            <label>password</label>
                        </div>
                    </div>
                    <div className='float-start'>
                        <button className='btn btn-success me-2'>บันทึกข้อมูล</button>
                        <Link className='btn btn-danger' to={"/ListData"}>ย้อนกลับ</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Adddata