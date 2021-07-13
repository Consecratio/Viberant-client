import styled from 'styled-components'

export default function Event () {
    return (
        <div className="event-container">
            <div className="event-title">Event Name</div>
            <div className="event-details">
                <div className="event-location">Address</div>
                <div className="event-date">Date</div>
                <div className="event-time">Time</div>
            </div>
            <img src="http://placekitten.com/600/300"className="event-img"></img>
        </div>
    )
}