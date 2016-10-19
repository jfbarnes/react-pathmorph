import React from 'react';
import PM from 'pathmorph';

/*
 Component to encapsulate an animation (either on hover or simply looping) from
 one svg path to another. Make the children of this component the from and to path
 (no need to wrap in svg tag), for example:
 	<PathMorph {props}>
		<path id="x" d="M14,5 29,20 14,35 12,33 25,20 12,7 14,5" />
		<path id="y" d="M0,19 40,19 40,22 0,22 0,19" />
	</PathMorph>
*/
class PathMorph extends React.Component {

	componentDidMount() {

		const { id, fromPathId, toPathId, fill, hover, color, sampleSteps, duration } = this.props;

		const pathMorph = new PM({
			canvasId: id,
			fromPathId,
			toPathId,
			fill,
			loop: !hover,
			color,
			sampleSteps,
			duration
		});

		this.canvas = document.getElementById(this.props.id);
		this.eLis = this.canvas.addEventListener('mouseenter', pathMorph.forwards.bind(pathMorph));
		this.lLis = this.canvas.addEventListener('mouseleave', pathMorph.backwards.bind(pathMorph));
	}

	componentWillUnmount() {
		this.canvas.removeEventListener('mouseenter', this.eLis);
		this.canvas.removeEventListener('mouseleave', this.lLis);
	}

	render() {

		const { id, width, height, ...rest } = this.props;

		// Remove unnecessary props, pass down rest to canvas
		delete rest.fromPathId;
		delete rest.toPathId;
		delete rest.hover;
		delete rest.sampleSteps;
		delete rest.color;
		delete rest.duration;

		return (
			<div>
				<svg id={`${id}-svg`} width={width} height={height}
					viewBox={`0 0 ${width} ${height}`} style={{display: 'none'}}>
					{this.props.children}
				</svg>
				<canvas id={id} width={width} height={height} {...rest} />
			</div>
		);

	}

}

PathMorph.propTypes = {
	id: React.PropTypes.string.isRequired,
	width: React.PropTypes.number.isRequired,
	height: React.PropTypes.number.isRequired,
	fromPathId: React.PropTypes.string.isRequired,
	toPathId: React.PropTypes.string.isRequired,
	hover: React.PropTypes.bool.isRequired,
	sampleSteps: React.PropTypes.number,
	fill: React.PropTypes.bool,
	color: React.PropTypes.string,
	duration: React.PropTypes.number
};

PathMorph.defaultProps = {
	hover: true,
	sampleSteps: 200,
	fill: false,
	color: '#000',
	duration: 500
};

export default PathMorph;
