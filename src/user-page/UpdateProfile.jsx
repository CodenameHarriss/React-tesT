import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'

function UpdateProfile() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        fullname: '',
        phone: '',
        address: ''
    })

    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/user/read/${id}`)
            .then(res => {
                setUser(res.data[0])
            })
            .catch(err => console.log(err))
    }, [])

    const handleUpdateChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!user.fullname || !user.phone || !user.address) {
            alert("กรุณากรอกข้อมูลที่จะแก้ไขให้ครบถ้วน");
            return;
        }

        const confirmupdate = window.confirm("คุณแน่ใจหรือไม่ที่จะแก้ไขข้อมูลนี้?")

        if (confirmupdate) {

            axios.put(`http://127.0.0.1:3001/user/update/${id}`, user)  //http://localhost:3001/user/update/${id} (localhost)
                .then((res) => {
                    console.log(res);
                    alert("แก้ไขข้อมูลเรียบร้อย")
                    navigate("/ProfileUser")
                })
                .catch((error) => {
                    console.error(error);
                    alert("เกิดข้อผิดพลาดในการแก้ไขข้อมูล!!")
                })
        }
    }

    return (
        <div className='container'>
            <div className='card shadow border border-0 mt-3'>
                <div className='card-header bg-warning text-white fw-bold'>แก้ไขข้อมูลส่วนตัว</div>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <div className='row g-2'>
                            <div className='col-md-6'>
                                <label className='fw-bold'>ชื่อ-นามสกุล :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='fullname'
                                    placeholder="ชื่อ-นามสกุล"
                                    value={user.fullname}
                                    onChange={handleUpdateChange} />
                            </div>
                            <div className='col-md-6'>
                                <label className='fw-bold'>หมายเลขโทรศัพท์ :</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name='phone'
                                    placeholder="หมายเลขโทรศัพท์"
                                    value={user.phone}
                                    onChange={handleUpdateChange} />
                            </div>
                            <div className='col-md-12'>
                                <label className='fw-bold'>ที่อยู่ :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='address'
                                    placeholder="ที่อยู่"
                                    value={user.address}
                                    onChange={handleUpdateChange} />
                            </div>
                            <div className='float-start'>
                                <button className='btn btn-warning btn-sm text-white me-2'>แก้ไขข้อมูล</button>
                                <Link className='btn btn-danger btn-sm' to={"/ProfileUser"}>ย้อนกลับ</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile