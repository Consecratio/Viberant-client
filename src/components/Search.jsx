// import { useState } from 'react'
import styled, {} from 'styled-components'
// import location from '../img/location.png'

const SearchDiv = styled.div `
    text-align: center;
    margin: 50px auto;
`

const InputDiv = styled.input `
    border: 2px solid #0FC3FC;
    background-color: #DFF3FA;
    border-radius: 10px;
    padding: 3px 15px;
    width: 350px;
    margin: 2px;
`


const Search = () => {
    // const [search, setSearch] = useState(')
    // const [location, setLocation] = useState('')


    return (
        <SearchDiv>
            <form>
                <InputDiv
                    id='search-input'
                    type='search'
                    placeholder= 'Search'
                />
                <InputDiv
                    id='location-input'
                    type='location'
                    placeholder='Location'
                />
            </form>
        </SearchDiv>
    )
    

}

export default Search