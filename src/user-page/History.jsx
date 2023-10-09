import React, { useState, useEffect } from 'react'
import axios from 'axios'

function History() {

    const [history, setHistory] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/sale/read/1`)
            .then((res) => {
                setHistory(res.data)
            })
            .catch((error) => {
                console.error("เกิดข้อผิดพลาดในการดึงข้อมูล", error)
            })
    }, [])

    return (
        <div className='container'>
            <div className='card shadow border border-0 mt-3'>
                <div className='card-header bg-info text-white fw-bold'>ประวัติ</div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='table-responsive'>
                            <table className="table table-hover">
                                <thead className='table-info'>
                                    <tr>
                                        <th>#</th>
                                        <th>ชื่อ - นามสกุล</th>
                                        <th>หมายเลขโทรศัพท์</th>
                                        <th>ที่อยู่</th>
                                        <th>วันที่</th>
                                        <th>สถานะ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(history) && history.length > 0 ? (
                                        history.map(items => (
                                            <tr key={items.sale_id}>
                                                <td>{items.sale_id}</td>
                                                <td>{items.fullname}</td>
                                                <td>{items.phone}</td>
                                                <td>{items.address}</td>
                                                <td>{items.sale_date}</td>
                                                <td><span className='badge text-bg-success'>{items.status}</span></td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className='text-center'>ไม่มีข้อมูลผู้ใช้</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History