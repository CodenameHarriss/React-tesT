import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Follow() {

    const [follow, setFollow] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/sale/read/1`)
            .then((res) => {
                setFollow(res.data)
            })
            .catch((error) => {
                console.error("เกิดข้อผิดพลาดในการดึงข้อมูล", error)
            })
    }, [])

    const [data, setData] = useState([]);

    const getData = () => {
        axios.get(`http://localhost:3001/sale/read/1`)
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => {
                console.error("เกิดข้อผิดพลาดในการดึงข้อมูล", error)
            })
    }

    return (
        <>
            <div className='container'>
                <div className='card shadow border border-0 mt-3'>
                    <div className='card-header bg-primary text-white fw-bold'>ติดตามสถานะ</div>
                    <div className='card-body'>
                        {follow.map((follows) => (
                            <div key={follows.sale_id}>
                                <label className='fw-bold'>ชื่อ - นามสกุล : <strong>{follows.fullname}</strong></label><br />
                                <label className='fw-bold'>หมายเลขโทรศัพท์ : <strong>{follows.phone}</strong></label><br />
                                <label className='fw-bold'>ที่อยู่ : <strong>{follows.address}</strong></label><br />
                            </div>
                        ))}
                        <div>
                            <button className='btn btn-info text-white float-end'>ประวัติ</button>
                        </div>
                        <div>
                            <button className='btn btn-primary float-end me-2' onClick={getData}>ดูรายละเอียด</button>
                        </div>
                    </div>
                </div>
            </div>

            {data.map((items) => {
                return (
                    <div className='container'>
                        <div className='card shadow border border-0 mt-3'>
                            <div className='card-header bg-primary text-white fw-bold'>รายละเอียด</div>
                            <div className='card-body'>
                                <div key={items.sale_id}>
                                    <label className='fw-bold'>ชื่อ - นามสกุล : <strong>{items.fullname}</strong></label><br />
                                    <label className='fw-bold'>หมายเลขโทรศัพท์ : <strong>{items.phone}</strong></label><br />
                                    <label className='fw-bold'>ที่อยู่ : <strong>{items.address}</strong></label><br />
                                    <label className='fw-bold'>ชื่อรถ : <strong>{items.prd_name}</strong></label><br />
                                    <label className='fw-bold'>วันที่ : <strong>{items.sale_date}</strong></label><br />
                                    <label className='fw-bold'>ราคา : <strong>{items.total_price}</strong></label><br />
                                    <label className='fw-bold'>สถานะ : <strong>{items.status}</strong></label><br />
                                    <label className='fw-bold'>หมายเหตุ : <strong>{items.remark}</strong></label><br />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Follow