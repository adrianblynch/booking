import React from 'react'
import TopSection from './TopSection'
import Ticket from './Ticket'
import { Accordion, AccordionItem } from './Accordion'
import './App.css'

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<section>
					<TopSection
						title="Your booking is confirmed"
						subTitle="Booking reference TEST"
						message="An email is on its way to test@test.com"
					/>
				</section>
				{ false && <section>
					<TopSection
						title="Manage your booking"
						subTitle="Booking reference TEST"
					/>
				</section> }
				<section className="tickets">
					<Ticket
						direction="Outbound"
						coa="Standard"
						origin="London St Pancras Int'l"
						destination="Paris Gare Du Nord"
						date="25th December 2016"
						passengers="2&nbsp;adults, 1&nbsp;child"
						departureTime="12:00"
						arrivalTime="13:00"
						duration="1hr"
					/>
					<Ticket
						direction="Inbound"
						coa="Standard Premier"
						origin="Paris Gare Du Nord"
						destination="London St Pancras Int'l"
						date="28th December 2016"
						passengers="2&nbsp;adults, 1&nbsp;child"
						departureTime="10:00"
						arrivalTime="11:00"
						duration="1hr"
					/>
				</section>
				<section>
					<Accordion title="Passengers">
						<AccordionItem title="Adrian Lynch">
							<p>Now this is a story all about how...</p>
						</AccordionItem>
						<AccordionItem title="Willy Lynch">
							<p>... my life got flipped, turned upside down.</p>
						</AccordionItem>
					</Accordion>
				</section>
			</div>
		)
	}
}

export default App
