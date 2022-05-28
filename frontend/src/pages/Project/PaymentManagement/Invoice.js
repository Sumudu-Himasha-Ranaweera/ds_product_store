import { Card, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { React, useEffect, useState } from 'react';

const ContentStyle = styled('div')(({ theme }) => ({
    margin: '5vh 0',
    display: 'flex',
    flexDirection: 'column',
}));

const Invoice = () => {

    const [cartData, setCartData] = useState([])

    useEffect(() => {
        try {
            setCartData(JSON.parse(sessionStorage.getItem("cartData")))
            console.log(JSON.parse(sessionStorage.getItem("cartData")))
        } catch (error) {
            console.log(error)
        }
    }, [])


    return (
        <>

            <Card>
                <Container maxWidth="md">
                    <ContentStyle>
                        <h1>Invoice</h1>
                        {cartData.map((item, index) => (
                            <>
                                <h5>{item.name}</h5>
                                <h5>{item.qty}</h5>
                                <h5>{item.price}</h5>
                            </>

                        ))}
                    </ContentStyle>
                </Container>
            </Card>
        </>
    )
}

export default Invoice