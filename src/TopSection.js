import React from 'react'
import GetTickets from './GetTickets'
import './TopSection.css'

export default class TopSection extends React.Component {

	render() {

		const { title, subTitle, message } = this.props

		return (
			<div className="top-section">
				<h1>{ title }</h1>
				<h4>{ subTitle }</h4>
				<p>{ message }</p>
				<GetTickets minutes="10" />
			</div>
		)
	}
}
