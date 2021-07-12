// import { useState } from 'react'
import styled, { } from 'styled-components'
import location from '../img/location.png'

const SearchDiv = styled.div `
    text-align: center;
`


const Search = () => {
    // const [search, setSearch] = useState(')
    // const [location, setLocation] = useState('')


    return (
        <SearchDiv>
            <form>
                <input
                    id='search-input'
                    type='search'
                    placeholder= 'Search'
                />
                <input
                    id='location-input'
                    type='location'
                    placeholder='Location'
                />
            </form>
        </SearchDiv>
    )
    

}

export default Search