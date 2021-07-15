import styled from 'styled-components'
import LocationImg from '../img/location.png'
import { useState, useEffect } from 'react'
import axios from 'axios'


const EventComponent = styled.div `
margin: 0 150px;
padding: 0;
width: 1140px;
`

const EventTitle = styled.div `
width: 319px;
height: 54px;
flex-grow: 0;
margin: 0 254px 2px 7px;
font-size: 36px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: 0.9px;
text-align: left;
color: #000000;
margin-top: 35px;
`
const EventHeader = styled.div `
display: grid;
width: 100%;
grid-template-columns: 50% 50%;
padding-bottom: 10px;
`
const EventLocation = styled.div `
width: 179px;
height: 36px;
flex-grow: 0;
margin: 4px 0 4px 5px;
font-size: 24px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: 0.6px;
text-align: left;
color: #000000;
`
const DateTime = styled.div `
display: flex;
`

const EventDate = styled.div `
width: 450px;
height: 46px;
margin: 0 20px 0 0;
background-color: #c6f1ff;
display: flex;
justify-content: center;
align-content: center;
align
padding: 0 25px;
`
const DateText = styled.p`
padding-top: 10px;
`
const EventTime = styled.div `
  width: 500px;
  height: 46px;
  flex-grow: 0;
  margin: 0 0 0 20px;
  padding: 0 25px;
  background-color: #c6f1ff;
}
`
const TimeText = styled.p`
padding-top: 10px;
`

const EventImg = styled.img `
`
const EventDetail = styled.div `
display: grid;
width: 100%;
grid-template-columns: 60% 40%;
`
const EventCreator = styled.div `
`
const CreatorTitle = styled.div `
    display: flex;
    flex-direction: row;
    padding-top: 50px;
`
const CreatorImg = styled.img `
    border-radius: 50%;
`
const CreatorName = styled.div `
    display: flex;
    align-items: center;
    padding: 0 0 0 10px;
    font-size: 54px;
    font-weight: 600; 
`
const EventDescription = styled.div `
padding-top: 30px;
text-align: left;
font-size: 24px;
font-weight: 600;
`
const DescriptionContent = styled.p `
text-align: left;
padding: 0 15px 0 0;
`

const EventTagList = styled.div `
`
const JoinButton = styled.button `
margin-top: 60px;
width: 100%;
height: 70px;
font-size: 24px;
font-weight: 900;
color: #ffffff;
letter-spacing: 1.92px;
background-color: #ff4ba6;
border-width: 0;
`

const Tags = styled.div `
display: flex;
flex-wrap: wrap;
margin-top: 15px;
padding-right: -5px;
`

const Tagbuttons = styled.div `
background-color: #ffe720;
border-radius: 50px;
font-size: 24px;
padding: 5px 20px;
margin: 0 5px 10px 0;
`

//ANDIE WORK HERE
const Participants = styled.div `
    margin-top: 20px;
    background-color: #DFF3FA;
    height: 450px;
    width: 456px;
`

const ParticipantsTitle = styled.div `
    font-size: 14px;
    font-weight: bold;
    padding: 20px 0px;
    background-color: #C6F1FF;
`

const PersonContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
`

const Wrapper = styled.div `
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px;
    height: 100px;
    width: 100px;
    padding: 15px;
`

const PImage = styled.div `
    background-color: black;
    border-radius: 50%;
    height: 65px;
    weight: 65px;
    margin-bottom: 2px;
`
const PName = styled.div `
    font-size: 12px;
`

const Event = (props) => {
    const [event, setEvent] = useState([])
    console.log(props.match.params.id)

    useEffect (() => {
        const getEvent = async () => {
            try {
                let eventId = props.match.params.id
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/posts/${eventId}`)
                console.log('🦄', response.data)
                setEvent(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getEvent()
    }, [])

    let renderedTags = []
    let renderedAttendees = []

    if(event._id){
        console.log('💎', event)
        renderedTags = event.tags.map((event, idx) => {
            return(
                <Tagbuttons key={idx}>
                    {event}
                </Tagbuttons>
            )
        })
        console.log(renderedTags,'🌺')

        renderedAttendees = event.attendees.map((event, idx) => {
            return (
                <Wrapper>
                    <PImage></PImage>
                    <PName> {event} </PName>
                </Wrapper>
            )
        })
        console.log(renderedAttendees,'🌈')
    }

    return (
        <EventComponent className='container' style={{ margin: "0 auto"}}>
                <EventTitle>{event.title}</EventTitle>
                <EventHeader>
                    <EventLocation><img src ={LocationImg} alt="location icon" style={{height: "45px", width: "45px"}}></img>Address</EventLocation>
                    <DateTime>
                        <EventDate><DateText>{event.event_date}</DateText></EventDate>
                        <EventTime><TimeText>Time: 2:00pm - 4:00pm</TimeText></EventTime>
                    </DateTime>
                </EventHeader>
                <EventImg src={event.img_url}></EventImg>
            <EventDetail>
                <EventCreator>
                    <CreatorTitle>
                        <CreatorImg src="http://placekitten.com/100/100"></CreatorImg>
                        <CreatorName>Kimberly Johnson</CreatorName>
                    </CreatorTitle>
                    <EventDescription>Event Description</EventDescription>
                    <DescriptionContent>{event.content}
                    </DescriptionContent>
                </EventCreator>
                <EventTagList>
                    <JoinButton>JOIN THIS EVENT</JoinButton>

                    <Tags>
                        {renderedTags} 
                    </Tags>
                    

                    <Participants>
                        <ParticipantsTitle>Participants</ParticipantsTitle>
                        <PersonContainer>
                            {renderedAttendees}
                        </PersonContainer>
                    </Participants>
                </EventTagList>
            </EventDetail>
        </EventComponent>
    )
}

export default Event