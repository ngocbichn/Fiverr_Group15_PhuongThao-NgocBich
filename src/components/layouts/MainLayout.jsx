import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const MainLayout = () => {
    return (
        <Container className='MainLayout'>
            <div className='main-content'>
                <Outlet />
            </div>
        </Container>
    )
}

export default MainLayout

const Container = styled.div`
    &.MainLayout{

    }
`