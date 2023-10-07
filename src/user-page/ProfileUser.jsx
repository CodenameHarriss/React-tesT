import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProfileUser() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/user/read/1`)
            .then((res) => {
                setUser(res.data)
            })
            .catch((error) => {
                console.error("เกิดข้อผิดพลาดในการดึงข้อมูล", error)
            })
    }, [])

    return (
        <div className='container'>
            <div className='card shadow border border-0 mt-3'>
                <div className='card-header bg-primary text-white fw-bold'>ข้อมูลส่วนตัว</div>
                <div className='card-body'>
                    {user.map((users) => (
                        <div key={users.id}>
                            <label className='fw-bold'>ชื่อ - นามสกุล :</label>
                            <p><strong>{users.fullname}</strong></p>
                            <label className='fw-bold'>หมายเลขโทรศัพท์ :</label>
                            <p><strong>{users.phone}</strong></p>
                            <label className='fw-bold'>ที่อยู่ :</label>
                            <p><strong>{users.address}</strong></p>
                            <div>
                                <Link to={`/UpdateProfile/${users.id}`} className='btn btn-warning btn-sm text-white'>แก้ไขข้อมูล</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProfileUser