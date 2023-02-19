import React, { useCallback, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Contact } from '../components/Contact'
import { styled } from '@mui/system'
function Home() {
    const user = localStorage.getItem('test-user')
    console.log(user)
    const [cont, setCont] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [hasNextPage, setHasNextPage] = useState(false)
    let contacts = async () => {
        try {
            const res = await axios.get('https://randomuser.me/api/?results=40')
            setCont(prev => [...prev, ...res.data.results])
            setLoading(false)
            setHasNextPage(Boolean(res.data.results.length))
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        setLoading(true)
        contacts()
    }, [page])
    const intObserver = useRef()
    const lastPostRef = useCallback(post => {
        if (loading) return
        if (intObserver.current) intObserver.current.disconnect()
        intObserver.current = new IntersectionObserver(posts => {
            if (posts[0].isIntersecting && hasNextPage) {
                console.log('we are near last post')
                setPage(prev => prev + 1)
            }
        })
        if (post) intObserver.current.observe(post)
    }, [loading, hasNextPage])
    const content = cont.map((c, i) => {
        if (cont.length === i + 1) {
            return <Contact ref={lastPostRef} contacts={c} key={i} />

        }
        return <Contact contacts={c} key={i} />
    })
    return (
        <Component>
            {content}
            {loading && <h1>contacts are loading ..</h1>}
        </Component>
    )
}
const Component = styled('div')({
    backgroundColor: 'grey',
    paddingTop: '60px'
})
export default Home
