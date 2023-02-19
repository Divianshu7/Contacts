import React, { useState } from "react"
import { display, styled } from '@mui/system'
import { Button, Card, Modal } from 'antd'
export const Contact = React.forwardRef(({ contacts }, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const bod = () => {
        if (ref) {
            return (
                <div ref={ref}>
                    <h2>{contacts.name.title} {contacts.name.first} {contacts.name.last}</h2>
                    <img src={contacts.picture.large} />
                </div>)
        } else {
            return (
                <div>
                    <h2>
                        {contacts.name.title} {contacts.name.first} {contacts.name.last}
                    </h2>
                    <img src={contacts.picture.large} />
                </div>)
        }
    }
    return (
        <>
            <Card style={{ marginRight: 25, marginLeft: 25, marginBottom: 5 }}>
                <Component>{bod()}
                    <Button onClick={showModal}>Show More</Button>
                </Component>
                <Modal title="Info" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Email: {contacts.email}</p>
                    <p>Address: {contacts.location.city}, {contacts.location.state}, {contacts.location.country}</p>
                </Modal>
            </Card>
        </>
    )
})
const Component = styled('div')({
    display: 'grid',
    "@media (min-width: 780px)": {
        img: {
            height: '150px',
            borderRadius: '100px',
            marginLeft: '20px'
        }
    },
    "@media (max-width: 780px)": {
        img: {
            height: '100px',
            borderRadius: '100px',
        }
    },
    div: {
        display: "grid",
        gridTemplateColumns: '60% 30%',
        margin: '0',
        h2: {
            display: 'flex',
            justifyContent: 'center'
        },

    },
    Button: {
        marginTop: '10px'
        , width: '30%',
        marginLeft: '20%',
        display: 'flex',
        justifyContent: 'center'
    }
})