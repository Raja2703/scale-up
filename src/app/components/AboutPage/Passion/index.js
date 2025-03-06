import React from 'react';
import { motion } from 'framer-motion';

const index = () => {
	const iconBoxes = [
		{
			title: 'Creativity',
			description: 'We dare to dream big and push boundaries, never settling for the ordinary.',
			iconClass: 'bringer-icon-creativity',
		},
		{
			title: 'Collaboration',
			description: 'We thrive on diverse perspectives and believe in the magic of working together.',
			iconClass: 'bringer-icon-collab',
		},
		{
			title: 'Impact',
			description: "We're driven by a desire to make a difference, to create brands that move mountains.",
			iconClass: 'bringer-icon-impact',
		},
		{
			title: 'Innovation',
			description: 'We stay ahead of the curve, embracing new technologies & trends to keep your brand on top.',
			iconClass: 'bringer-icon-innovation',
		},
	];

	return (
		// <!-- Section: Our Passion -->
		<section>
			<div className="align-center stg-bottom-gap-l">
				<motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} data-split-appear="fade-up">
					The fire that fuels our passion.
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className="bringer-large-text"
					data-delay="100"
				>
					At Scale Us, we believe in the power of:
				</motion.p>
			</div>

			<div className="bringer-grid-2cols" data-stagger-appear="zoom-in" data-delay="150">
				{iconBoxes.map((box, index) => (
					<motion.div
						initial={{ opacity: 0, scale: 0.85 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						viewport={{ once: true }}
						className="bringer-icon-box bringer-block"
						key={index}
					>
						<h4>
							{box.title}
							<span className="bringer-accent">.</span>
						</h4>
						<p className="bringer-large-text">{box.description}</p>
						<div className="bringer-box-icon">
							<i className={`bringer-icon ${box.iconClass}`}></i>
						</div>
					</motion.div>
				))}
			</div>
			{/* <!-- .bringer-grid --> */}
		</section>
	);
};

export default index;
