import React, { useState } from 'react';

function MyComponent() {

    const [phoneNumber, setPhoneNumber] = useState('')
    const maxLengthphon = 10
    const [fullname, setFullname] = useState('')
    const maxlengthName = 200

    const handleInputChangePhone = (event) => {
        const inputText = event.target.value
        if (/^\d*$/.test(inputText) && inputText.length <= maxLengthphon) {
            setPhoneNumber(inputText)
        }
    }

    const handleInputChangeName = (event) => {
        const inputText = event.target.value
        if (inputText.length <= maxlengthName) {
            setFullname(inputText)
        }
    }

    return (
        <div className='container'>
            <div className='card shadow border border-0 mt-3'>
                <div className='card-header bg-primary text-white fw-bold'>Form Validate</div>
                <div className='card-body'>
                    <label className='fw-bold'>ชื่อ-นามสกุล</label>
                    <input
                        className='form-control border-success'
                        type="text"
                        value={fullname}
                        onChange={handleInputChangeName}
                    />
                    <span className='badge text-bg-success'>ชื่อ-นามสกุล {fullname.length}/{maxlengthName}</span>
                    <br />
                    <label className='fw-bold'>หมายเลขโทรศัพท์ :</label>
                    <input
                        className='form-control border-success'
                        type="text"
                        value={phoneNumber}
                        onChange={handleInputChangePhone}
                    />
                    <span className='badge text-bg-success'>หมายเลขโทรศัพท์ {phoneNumber.length}/{maxLengthphon}</span>
                </div>
            </div>
        </div>
    );
}

export default MyComponent;