import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import AuthRoutes from './Auth/AuthRoutes'


function App() {

  return (
    <div className="App">
      <Routes>
        {/*Home Page*/}
        <Route path='/' element={<HomePage />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
        {/*login y registo */}
        <Route path='/auth/*' element={<AuthRoutes />} />

      </Routes>
    </div>
  )
}

export default App
