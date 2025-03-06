import React from 'react';

const index = () => {
	return (
		<section data-padding="none">
			<div className="bringer-grid-4cols bringer-tp-grid-2cols bringer-m-grid-2cols stg-m-small-gap" data-stagger-appear="zoom-in" data-stagger-pagehide="zoom-out">
				{/* <!-- Counter Item --> */}
				<div className="bringer-counter bringer-block" data-delay="3000">
					<div className="bringer-counter-number" data-suffix="+">
						50
					</div>
					<div className="bringer-counter-label">Team Members</div>
				</div>
				{/* <!-- .bringer-counter --> */}
				{/* <!-- Counter Item --> */}
				<div className="bringer-counter bringer-block" data-delay="3000">
					<div className="bringer-counter-number" data-suffix="+">
						150
					</div>
					<div className="bringer-counter-label">Projects Delivered</div>
				</div>
				{/* <!-- .bringer-counter --> */}
				{/* <!-- Counter Item --> */}
				<div className="bringer-counter bringer-block" data-delay="3000">
					<div className="bringer-counter-number" data-suffix="k+">
						30
					</div>
					<div className="bringer-counter-label">Hours of Developed Code</div>
				</div>
				{/* <!-- .bringer-counter --> */}
				{/* <!-- Counter Item --> */}
				<div className="bringer-counter bringer-block is-accented" data-delay="3000">
					<div className="bringer-counter-number" data-suffix="+">
						10
					</div>
					<div className="bringer-counter-label">Years of Experience</div>
				</div>
				{/* <!-- .bringer-counter --> */}
			</div>
			{/* <!-- .bringer-grid --> */}
		</section>
	);
};

export default index;
