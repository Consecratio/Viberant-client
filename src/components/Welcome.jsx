import Posts from './Posts'
import Search from './Search'
import styled, {} from 'styled-components'

const HappeningHeader = styled.h1 `
    margin-top: 20px;
    margin-bottom: 40px;
`

const WhenHeader = styled.h3 `
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: left;
`

const Welcome = () => {


    return (
        <div className="container">
            <Search />
            <HappeningHeader>See what's happening</HappeningHeader>
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