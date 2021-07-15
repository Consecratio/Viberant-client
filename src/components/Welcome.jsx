import Posts from './Posts'
import Search from './Search'
import styled, {} from 'styled-components'

const HappeningHeader = styled.h1 `
    margin-bottom: 20px;
    font-weight: bold;
`

const WhenHeader = styled.h3 `
    margin-bottom: 25px;
    text-align: left;
`

const Welcome = () => {


    return (
        <div className="container">
            <Search />
            <HappeningHeader className="text-left">See what's happening</HappeningHeader>
            <WhenHeader>Today</WhenHeader>
            <Posts />
            <WhenHeader>This week</WhenHeader>
            <Posts />
            <WhenHeader>This month</WhenHeader>
            <Posts />
        </div>
    )
}

export default Welcome