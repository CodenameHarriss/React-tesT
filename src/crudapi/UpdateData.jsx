import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

function UpdateData() {

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/user/read/${id}`)
            .then(res => {
                // console.log(res.data)
                setUpUser(res.data[0])
            })
            .catch(err => console.log(err))
    }, [])

    const [upUser, setUpUser] = useState({
        fullname: '',
        phone: '',
        address: '',
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpUser({ ...upUser, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!upUser.fullname || !upUser.phone || !upUser.address || !upUser.email || !upUser.password) {
            alert("กรุณากรอกข้อมูลที่จะแก้ไขให้ครบถ้วน");
            return;
        }

        const confirmupdate = window.confirm("คุณแน่ใจหรือไม่ที่จะแก้ไขข้อมูลนี้?")

        if (confirmupdate) {

            axios.put(`http://127.0.0.1:3001/user/update/${id}`, upUser)  //http://localhost:3001/user/update/${id} (localhost)
                .then((res) => {
                    console.log(res);
                    alert("แก้ไขข้อมูลเรียบร้อย")
                    navigate("/ListData")
                })
                .catch((error) => {
                    console.error(error);
                    alert("เกิดข้อผิดพลาดในการแก้ไขข้อมูล!!")
                })
        }
    }

    return (
        <div className='container'>
            <h2 className='text-center fw-bold mt-2'>แก้ไขข้อมูล</h2>
            <form onSubmit={handleSubmit}>
                <div className='row g-2'>
                    <div className='col-md-6'>
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                name='fullname'
                                placeholder="ชื่อ-นามสกุล"
                                value={upUser.fullname}
                                onChange={handleInputChange} />
                            <label>ชื่อ-นามสกุล</label>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="form-floating">
                            <input
                                type="number"
                                className="form-control"
                                name='phone'
                                placeholder="หมายเลขโทรศัพท์"
                                value={upUser.phone}
                                onChange={handleInputChange} />
                            <label>หมายเลขโทรศัพท์</label>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                name='address'
                                placeholder="ที่อยู่"
                                value={upUser.address}
                                onChange={handleInputChange} />
                            <label>ที่อยู่</label>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="form-floating">
                            <input
                                type="email"
                                className="form-control"
                                name='email'
                                placeholder="Email"
                                value={upUser.email}
                                onChange={handleInputChange} />
                            <label>Email</label>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                name='password'
                                placeholder="password"
                                value={upUser.password}
                                onChange={handleInputChange} />
                            <label>password</label>
                        </div>
                    </div>
                    <div className='float-start'>
                        <button className='btn btn-warning text-white me-2'>แก้ไขข้อมูล</button>
                        <Link className='btn btn-danger' to={"/ListData"}>ย้อนกลับ</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UpdateData