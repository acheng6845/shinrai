import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import ContentButton from '../lower_components/contentButton';
import DropDownButton from '../lower_components/dropDownButton';
import ContentDescription from '../lower_components/contentDescription';
import QuoteSlider from '../lower_components/quoteSlider';
import NavButton from '../lower_components/navButton';
import { nextSlide } from '../actions/slideActions';
import NavDescription from '../lower_components/navDescription';

@connect((store) => {
	return {
		data: store.slide.data,
		length: store.slide.length,
	};
})
export default class TrueIndex extends React.Component {
	constructor(props, context) {
		super(props, context);
		
		this.dispatchSlideIndex(0);
		
		this.state = {
			intervalId: null,
			index: 0,
			removeQuote: false,
		};
	}

	dispatchSlideIndex(index) {
		this.props.dispatch(nextSlide(index));
	}

	startInterval() {
		if(this.state.intervalId != null) clearInterval(this.state.intervalId);
		const intervalId = setInterval(this.nextSlide.bind(this, null, this.props.length), 10000);
		this.setState({intervalId: intervalId});
	}

	componentDidMount() {
		this.$quoteSlider = $(this.quoteSlider);
		this.startInterval();
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
		this.$quoteSlider.animate("destroy");
	}
	
	//if position = null, it's just the next slide incrementing by 1, else checks if position exists in the slides array in the store
	nextSlide(position, length) {
		let index;
		if(position != null && position >= 0 && position < length) {
			index = position;
		} else {
			index = (this.state.index < length - 1 || length == 0) ? this.state.index + 1 : 0;
		}
		this.$quoteSlider.animate({opacity: "0.0", width: "0%"}, "slow", () => {
			this.dispatchSlideIndex(index);
			this.setState({
			index: index,
			removeQuote: true,
			}, () => {
				//used to have an intermediary animation moving the slide right and left, but it caused the container to stretch so it was removed
				this.$quoteSlider.animate({}, "fast", () => {
					//added a callback to setState to mount the previously unmounted QuoteSlider
					this.setState({removeQuote: false}, () => {
						this.$quoteSlider.animate({opacity: "1.0", width: "100%"}, "slow");
					});
				});
			});
		});
		this.startInterval();
	}
	
	//returns an integer representing the number of pixels the browser's width currently contains.
	browserWidth() {
		return Math.max(
			document.body.scrollWidth,
			document.documentElement.scrollWidth,
			document.body.offsetWidth,
			document.documentElement.offsetWidth,
			document.documentElement.clientWidth
		);
	}

	render() {

		const { data, length } = this.props;

		const browserWidth = this.browserWidth();
		//slideshow should cover 80% of the screen on small browsers/devices and half of the screen otherwise
		const height = browserWidth > 500 ? "50vh" : "80vh";
		
		const sectionStyle = {
		};
		
		const divStyle = {
			height: height,
			position: "relative",
			//stops resizing during transitions
			maxWidth: "100vw",
			overflow: "hidden",
			//display: "inline-block",
		};

		const navStyle = {
			padding: "2vh",
			textAlign: "center",
			maxWidth: browserWidth > 500 ? "50vw" : "100vw",
			width: "auto",
			height: "100px",
			marginLeft: browserWidth > 500 ? "25vw" : "0",
			marginRight: browserWidth > 500 ? "25vw" : "0",
			backgroundColor: "transparent",
		};
		
		let navButtons = new Array(0);
		for(let i = 0; i < length; ++i) {
			navButtons.push((
				<div key={"navCol"+i} className={"col-xs-"+(12/length)}>
					<NavButton key={"navButton"+i} text={i+1} active={this.state.index == i} index={i} onClick={this.nextSlide.bind(this, i, length)} />
				</div>
			))
		}

		return (
			<section className="smythe" style={sectionStyle}>
				<div ref={el => this.quoteSlider = el} style={divStyle}>
					{ !this.state.removeQuote ?
						<QuoteSlider title={data != null ? data.title : ""} body={data != null ? data.body : ""} end={data != null ? data.end : ""} 
						topImage={data != null ? data.topImage : ""} bottomImage={data != null ? data.bottomImage : ""} height={height} link={data != null ? data.link : ""}
						backgroundImage={data != null ? data.backgroundImage : ""} artist={data != null ? data.artist: ""} isSmall={browserWidth < 600}/> : null
					}
				</div>
				<div style={navStyle}>
					{navButtons}
				</div>
				<div className="col-xs-12" style={{backgroundColor: "gray", paddingBottom: "5vh"}}>
					<NavDescription image="../../images/javascript.png" col="6" imageLink="/" 
					links={[
						{link: "/", text: "Popular Quick Links", color: "#AFEEEE"},
						{link: "/tutorial", text: "Introduction", color: "white"},
						{link: "/tutorial", text: "Hoisting", color: "white"},
						{link: "/tutorial", text: "Currying", color: "white"}
					]} />
					<NavDescription image="../../images/tools.png" col="6" imageLink="/" 
					links={[
						{link: "/", text: "Popular Quick Links", color: "#AFEEEE"},
						{link: "/pad", text: "Fate Grand Order", color: "silver"},
						{link: "/pad", text: "Puzzle & Dragons", color: "white"},
						{link: "/pad", text: "Fire Emblem Heroes", color: "silver"}
					]} />
				</div>
			</section>
		);
	}
}