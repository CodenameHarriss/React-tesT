import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListData() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/user/read')
            .then((res) => {
                setUser(res.data)
            }).catch((error) => {
                console.error('เกิดข้อผิดพลาดในการดึงข้อมูล')
            })
    }, [])

    // const handleDelete = (id) => {
    //     axios.delete(`http://localhost:3001/user/delete/${id}`)
    //     .then((res) => {

    //     })
    // }

    return (
        <div className='container'>
            <h2 className='text-center fw-bold mt-2'>ข้อมูลผู้ใช้ระบบ</h2>
            <div className='row'>
                <div>
                    <Link className='btn btn-success float-end' to={"/AddData"}>เพิ่มข้อมูล</Link>
                </div>
                <br /><br />
                <div className='table-responsive'>
                    <table className="table">
                        <thead className='table-dark'>
                            <tr>
                                <th>#</th>
                                <th>ชื่อ-นามสกุล</th>
                                <th>หมายเลขโทรศัพท์</th>
                                <th>ที่อยู่</th>
                                <th>แก้ไข-ลบ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map(users => (
                                <tr key={users.id}>
                                    <td>{users.id}</td>
                                    <td>{users.fullname}</td>
                                    <td>{users.phone}</td>
                                    <td>{users.address}</td>
                                    <td>
                                        <Link to={`/UpdateData/${users.id}`} className='btn btn-warning me-2 btn-sm mt-1'>แก้ไข</Link>
                                        <button type='button' onClick={() => handleDelete(users.id)} className='btn btn-danger me-2 btn-sm mt-1'>ลบ</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListData