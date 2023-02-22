import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import Register from './Register'

function AuthRoutes() {

    return (
        <div >
            <Routes>
                <Route path='register' element={<Register />} />
                <Route path='login' element={<LoginPage />} />

                <Route path='/*' element={<Navigate to={'/login'} />} />
                {/* <Route path='/*' element={<LoginPage />} /> */}
            </Routes>
        </div>
    )
}

export default AuthRoutes
