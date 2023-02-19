import { display, styled } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function TopNav() {
    const navigate = useNavigate()
    const logout = (e) => {
        e.preventDefault()
        localStorage.clear()
        navigate('/')
    }
    return (
        <Component><a onClick={logout}>Log Out</a></Component>
    )
}
const Component = styled('div')({
    marginBottom: '25px',
    position: 'fixed',
    backgroundColor: '#DDDDDD'
    , display: 'flex',
    width: '100%',
    height: '40px',
    zIndex: '1',
    alignItems: 'center',
    justifyContent: 'center'
    , cursor: 'pointer'
})
export default TopNav