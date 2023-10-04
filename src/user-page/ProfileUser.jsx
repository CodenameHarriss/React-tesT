import React from 'react'

function ProfileUser() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='card shadow border border-0 mt-3'>
                    <div className='card-header bg-primary text-white fw-bold'>ข้อมูลส่วนตัว</div>
                    <div className='card-body'>
                        <div>
                            <label className='fw-bold'>ชื่อ - นามสกุล</label>
                            <p><strong>...</strong></p>
                            <label className='fw-bold'>หมายเลขโทรศัพท์</label>
                            <p><strong>...</strong></p>
                            <label className='fw-bold'>ที่อยู่</label>
                            <p><strong>...</strong></p>
                            <label className='fw-bold'>Email</label>
                            <p><strong>...</strong></p>
                            <label className='fw-bold'>Password</label>
                            <p><strong>...</strong></p>
                        </div>
                        <button className='btn btn-warning btn-sm text-white float-end'>แก้ไขข้อมูล</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileUser