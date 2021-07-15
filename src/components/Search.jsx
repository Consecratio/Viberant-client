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
    border-radius: 17px;
    padding: 3px 15px;
    width: 350px;
    margin: 2px;
`

const PopularTags = styled.h3 `
    margin: 0 auto;
    margin-right: 575px;
    margin-top: 20px;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
`

const Tags = styled.li `
    display: inline-block;
    margin: 0 auto;
    margin-top: 10px;
`
const Buttons = styled.button `
    background: yellow;
    border-radius: 20px;
    width: 100px;
    margin: 0 auto;
    margin-right: 40px;
    margin-left: -25px;
    border: none;
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

                <PopularTags>Popular tags</PopularTags>
            <ul>
                <Tags>
                    <Buttons>mimosas</Buttons>
                </Tags>

                <Tags>
                    <Buttons>concerts</Buttons>
                </Tags>

                <Tags>
                    <Buttons>animals</Buttons>
                </Tags>

                <Tags>
                    <Buttons>sports</Buttons>
                </Tags>

                <Tags>
                    <Buttons>hiking</Buttons>
                </Tags>
                
                <Tags>
                    <Buttons>comedy</Buttons>
                </Tags>
            </ul>

            </form>
        </SearchDiv>
    )
    

}

export default Search