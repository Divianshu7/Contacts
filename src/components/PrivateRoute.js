import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
    const user = window.localStorage.getItem('test-user')

    return user ? children : <Navigate to='/' />
}
export default PrivateRoute