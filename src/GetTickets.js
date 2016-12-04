import React from 'react'
import './GetTickets.css'

export default class GetTickets extends React.Component {

	handleButtonClick = e => {
		e.preventDefault()
		console.log('Get me my tickets!')
	}

	render() {
		return (
			<div className="get-tickets">
				<p>Did you know you can print tickets or display them on your mobile?</p>
				<p><strong>Ticket barriers close { this.props.minutes } minutes before departure. Please arrive in time to pass through the barriers and then clear security and border control.</strong></p>
				<div><button onClick={ this.handleButtonClick }>Get tickets</button></div>
			</div>
		)
	}
}
