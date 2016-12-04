import React from 'react'
import './Ticket.css'

export default class Ticket extends React.Component {

	render() {

		const {
			direction,
			coa,
			origin,
			destination,
			date,
			passengers,
			departureTime,
			arrivalTime,
			duration,
			journeyType = "Direct"
		} = this.props

		const coaClass = {
			'Standard': 'standard',
			'Standard Premier': 'standard-premier'
		}

		return (
			<div className="ticket">
				<header className={coaClass[coa]}>
					<span>{ direction }</span>
					<span>{ coa }</span>
				</header>
				<section>
					<div className="ticket__od">
						{ origin } to { destination }
					</div>
					<div className="ticket__date-and-passengers">
						<span>{ date }</span>
						<span>{ passengers }</span>
					</div>
					<div className="ticket__times">
						<span className="ticket__departure">{ departureTime }</span>
						<span className="ticket__duration">{ duration }</span>
						<span className="ticket__arrow"></span>
						<span className="ticket__type">{ journeyType }</span>
						<span className="ticket__arrival">{ arrivalTime }</span>
					</div>
				</section>
			</div>
		)
	}
}
