import React, { Component } from 'react';
import Thumb from '../../../Components/Thumb/Thumb';
import './MasonryGrid.css';

class MasonryGrid extends Component {


	render() {

		return (
			<div className="masonryGrid">
				{this.props.thumbData.map((thumb, ind) => (
			  		<Thumb 
			  			id={thumb.id}
			  			key={thumb.id}
			        	title={thumb.title}
			  			url={thumb.preview_url}
			  			clicked={() => this.props.selectThumb(ind)}
			  			delete={() => this.props.deleteThumb(ind)} />
			  	))}
			</div>
		)
	}
}

export default MasonryGrid;