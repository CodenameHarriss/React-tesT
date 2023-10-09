import React, { useState, useEffect } from 'react';
import axios from 'axios';
import History from './History';
import Detail from './Detail';

function Follow() {
    const [showDetail, setShowDetail] = useState(false);
    const [showHistory, setShowHistory] = useState(false);
    const [follow, setFollow] = useState([]);

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:3001/sale/read/1`)
            .then((res) => {
                setFollow(res.data);
            })
            .catch((error) => {
                console.error("เกิดข้อผิดพลาดในการดึงข้อมูล", error);
            });
    }, []);

    const toggleDetail = () => {
        setShowDetail(!showDetail)
    }

    const toggleHistory = () => {
        setShowHistory(!showHistory)
    }

    return (
        <>
            <div className="container">
                <div className="card shadow border border-0 mt-3">
                    <div className="card-header bg-warning text-white fw-bold">
                        ติดตามสถานะ
                    </div>
                    <div className="card-body">
                        {follow.map((follows) => (
                            <div key={follows.sale_id}>
                                <label className="fw-bold">
                                    ชื่อ - นามสกุล :<br /> {follows.fullname}
                                </label>
                                <br />
                                <label className="fw-bold">
                                    หมายเลขโทรศัพท์ :<br /> {follows.phone}
                                </label>
                                <br />
                                <label className="fw-bold">
                                    ที่อยู่ :<br /> {follows.address}
                                </label>
                                <br />
                            </div>
                        ))}
                        <button className="btn btn-info text-white btn-sm float-end mt-2" onClick={toggleHistory}>ประวัติ</button>
                        <button className="btn btn-primary btn-sm float-end me-2 mt-2" onClick={toggleDetail}>รายละเอียด</button>
                    </div>
                </div>
            </div>
            {showDetail && <Detail />}
            {showHistory && <History />}
        </>
    );
}

export default Follow;
