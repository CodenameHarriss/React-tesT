import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Detail() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/sale/read/1`)
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => {
                console.error("เกิดข้อผิดพลาดในการดึงข้อมูล", error)
            })
    }, [])

    return (
        <div className='container'>
            <div className='card shadow border border-0 mt-3'>
                <div className='card-header bg-primary text-white fw-bold'>รายละเอียด</div>
                <div className='card-body'>
                    {data.map((items) => (
                        <div key={items.sale_id}>
                            <label className='fw-bold mt-2'>ชื่อ - นามสกุล : {items.fullname}</label><br />
                            <label className='fw-bold mt-2'>หมายเลขโทรศัพท์ : {items.phone}</label><br />
                            <label className='fw-bold mt-2'>ที่อยู่ : {items.address}</label><br />
                            <label className='fw-bold mt-2'>ชื่อรุ่นรถ : {items.prd_name}</label><br />
                            <label className='fw-bold mt-2'>วันที่ : {items.sale_date}</label><br />
                            <label className='fw-bold mt-2'>ราคา : {items.total_price}</label><br />
                            <label className='fw-bold mt-2'>สถานะ : {items.status}</label><br />
                            <label className='fw-bold mt-2'>หมายเหตุ : {items.remark}</label><br />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Detail