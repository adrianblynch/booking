import React from 'react'
import './Accordion.css'

export class Accordion extends React.Component {
	render() {
		const { title, children } = this.props
		return (
			<div className="accordion">
				<header>{ title }</header>
				{ children }
			</div>
		)
	}
}

export class AccordionItem extends React.Component {

	constructor(props) {
		super(props)

		this.state = { open: false }
	}

	handlerHeaderClick = (e) => {
		this.setState({ open: !this.state.open })
	}

	render() {
		const { title, children } = this.props
		const showContent = this.state.open
		const contentClasses = `accordion__content ${showContent ? '' : 'accordion__content--hidden'}`

		return (
			<div className="accordion__item">
				<header onClick={ this.handlerHeaderClick }>
					<span>{ title }</span>
					<span>{ this.state.open ? '➖' : '➕' }</span>
				</header>
				<div className={ contentClasses }>
					{ children }
				</div>
			</div>
		)
	}
}
