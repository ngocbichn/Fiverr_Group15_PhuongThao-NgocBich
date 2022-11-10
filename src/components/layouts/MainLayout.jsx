import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

const MainLayout = () => {
    return (
        <Container className='MainLayout'>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    )
}

export default MainLayout

const Container = styled.div`
    &.MainLayout{
        max-width: 1280px;
    }
`