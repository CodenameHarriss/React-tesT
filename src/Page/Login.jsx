import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="container">
            <div className="row">
                <main className="w-100 m-auto d-flex justify-content-center">
                    <form>
                        <div className="text-center mt-5">
                            <img src="https://images.unsplash.com/photo-1594323713852-9626155bfd37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlbGNvbWUlMjBzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" className="rounded" width={150} alt="img" />
                        </div>
                        <div className="form-floating my-3">
                            <input type="email" className="form-control" name="email" placeholder="ชื่อ" />
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating my-3">
                            <input type="password" className="form-control" name="password" placeholder="นามสกุล" />
                            <label htmlFor="floatingInput">Password</label>
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit">เข้าสู่ระบบ</button>
                        <p className='mt-2 text-center'>ลงทะเบียน <Link className='badge text-bg-info text-white' to={"/Register"}>คลิ๊กที่นี่</Link></p>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default Login