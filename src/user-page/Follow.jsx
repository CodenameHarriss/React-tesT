import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Follow() {

    const [follow, setFollow] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:3001/sale/read/1`)
            .then((res) => {
                setFollow(res.data)
            })
            .catch((error) => {
                console.error("เกิดข้อผิดพลาดในการดึงข้อมูล", error)
            })
    }, [])

    const [data, setData] = useState([]);

    const getData = () => {
        axios.get(`http://127.0.0.1:3001/sale/read/1`)
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
                    <div className='card-header bg-warning text-white fw-bold'>ติดตามสถานะ</div>
                    <div className='card-body'>
                        {follow.map((follows) => (
                            <div key={follows.sale_id}>
                                <label className='fw-bold'>ชื่อ - นามสกุล : {follows.fullname}</label><br />
                                <label className='fw-bold'>หมายเลขโทรศัพท์ : {follows.phone}</label><br />
                                <label className='fw-bold'>ที่อยู่ : {follows.address}</label><br />
                            </div>
                        ))}
                        <button className='btn btn-info text-white btn-sm float-end mt-2'>ประวัติ</button>
                        <button className='btn btn-primary btn-sm float-end me-2 mt-2' onClick={getData}>ดูรายละเอียด</button>
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
                                    <label className='fw-bold'>ชื่อ - นามสกุล : {items.fullname}</label><br />
                                    <label className='fw-bold'>หมายเลขโทรศัพท์ : {items.phone}</label><br />
                                    <label className='fw-bold'>ที่อยู่ : {items.address}</label><br />
                                    <label className='fw-bold'>ชื่อรถ : {items.prd_name}</label><br />
                                    <label className='fw-bold'>วันที่ : {items.sale_date}</label><br />
                                    <label className='fw-bold'>ราคา : {items.total_price}</label><br />
                                    <label className='fw-bold'>สถานะ : {items.status}</label><br />
                                    <label className='fw-bold'>หมายเหตุ : {items.remark}</label><br />
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