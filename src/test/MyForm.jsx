import React, { useState } from 'react';

function MyForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let isValid = true;
        const newFormErrors = {
            name: '',
            email: '',
            password: '',
        };

        // ตรวจสอบความถูกต้องของชื่อ
        if (formData.name.trim() === '') {
            newFormErrors.name = 'กรุณากรอกชื่อ';
            isValid = false;
        }

        // ตรวจสอบความถูกต้องของอีเมล
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(formData.email)) {
            newFormErrors.email = 'อีเมลไม่ถูกต้อง';
            isValid = false;
        }

        // ตรวจสอบความถูกต้องของรหัสผ่าน
        if (formData.password.length < 6) {
            newFormErrors.password = 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร';
            isValid = false;
        }

        setFormErrors(newFormErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            // ทำการส่งข้อมูลหรือดำเนินการต่อที่นี่
            console.log('ข้อมูลถูกต้อง:', formData);
        } else {
            console.log('ข้อมูลไม่ถูกต้อง');
        }
    };

    return (
        <div className='container'>
            <h2 className='fw-bold text-center'>แบบฟอร์ม</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='fw-bold'>ชื่อ:</label>
                    <input
                        className='form-control'
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <p className='text-danger'>{formErrors.name}</p>
                </div>
                <div>
                    <label className='fw-bold'>อีเมล:</label>
                    <input
                        className='form-control'
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <p className='text-danger'>{formErrors.email}</p>
                </div>
                <div>
                    <label className='fw-bold'>รหัสผ่าน:</label>
                    <input
                        className='form-control'
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <p className='text-danger'>{formErrors.password}</p>
                </div>
                <button className='btn btn-success' type="submit">ส่งข้อมูล</button>
            </form>
        </div>
    );
}

export default MyForm;
