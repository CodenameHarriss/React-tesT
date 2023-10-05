import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className="container">
            <div className="row">
                <main className="w-100 m-auto d-flex justify-content-center">
                    <form>
                        <div className="text-center mt-2">
                            <img src="https://images.unsplash.com/photo-1594323713852-9626155bfd37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlbGNvbWUlMjBzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" className="rounded" width={150} alt="img" />
                        </div>
                        <div className="form-floating my-3">
                            <input type="text" className="form-control" name="fullname" placeholder="ชื่อ" />
                            <label htmlFor="floatingInput">ชื่อ-นามสกุล</label>
                        </div>
                        <div className="form-floating my-3">
                            <input type="number" className="form-control" name="phone" placeholder="หมายเลขโทรศัพท์" />
                            <label htmlFor="floatingInput">หมายเลขโทรศัพท์</label>
                        </div>
                        <div className="form-floating my-3">
                            <input type="text" className="form-control" name="address" placeholder="ที่อยู่" />
                            <label htmlFor="floatingInput">ที่อยู่</label>
                        </div>
                        <div className="form-floating my-3">
                            <input type="text" className="form-control" name="email" placeholder="email" />
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating my-3">
                            <input type="password" className="form-control" name="password" placeholder="password" />
                            <label htmlFor="floatingInput">Password</label>
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit">ลงทะเบียนเข้าใช้งาน</button>
                        <p className='mt-2 text-center'><Link className='badge text-bg-info text-white' to={"/"}>ย้อนกลับ</Link></p>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default Register