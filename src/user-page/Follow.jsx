import React from 'react'

function Follow() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='card shadow border border-0 mt-3'>
                    <div className='card-header bg-primary text-white fw-bold'>ติดตามสถานะ</div>
                    <div className='card-body'>
                        <div>
                            <label className='fw-bold'>ชื่อ - นามสกุล</label>
                            <p><strong>...</strong></p>
                            <label className='fw-bold'>หมายเลขโทรศัพท์</label>
                            <p><strong>...</strong></p>
                            <label className='fw-bold'>ที่อยู่</label>
                            <p><strong>...</strong></p>
                        </div>
                        <button className='btn btn-info btn-sm text-white float-end'>ประวัติ</button>
                        <button className='btn btn-danger btn-sm float-end me-2'>ติดตาม</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Follow