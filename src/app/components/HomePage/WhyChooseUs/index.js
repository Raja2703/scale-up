import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WhyChooseUs = () => {
	const { scrollYProgress } = useScroll();

	// Transform for the right side to create a parallax effect
	const yTransform = useTransform(scrollYProgress, [0, 1], [0, 0]);

	return (
		<section className="relative">
			<div className="stg-row stg-large-gap">
				{/* Left Side - Stays Fixed */}
				<div className="stg-col-6 stg-tp-bottom-gap-l">
					<div className="bringer-sticky-block sticky top-50">
						<h2>Why Choose Us</h2>
						<p className="bringer-large-text">We are a passionate team of developers who believe in the power of creativity.</p>
						<div className="align-right">
							<a href="about-us.html" className="bringer-arrow-link" style={{ backgroundColor: 'transparent' }}>
								Learn More About Us
							</a>
						</div>
					</div>
				</div>

				{/* Right Side - Scrolls with Motion */}
				<div className="stg-col-6">
					<motion.div style={{ y: yTransform }}>
						<div className="bringer-grid-1col stg-normal-gap">
							{/* <!-- Card Item --> */}
							<div className="bringer-block">
								<h4>
									We don't just deliver, we <span className="bringer-accent">ignite innovation</span>
									<span className="bringer-accent">.</span>
								</h4>
								<p>Tired of cookie-cutter solutions? At Scale Us, we infuse your brand with bold ideas and strategic brilliance, crafting campaigns that capture hearts and drive tangible results.</p>
							</div>
							{/* <!-- .bringer-block --> */}
							{/* <!-- Card Item --> */}
							<div className="bringer-block">
								<h4>
									We <span className="bringer-accent">fuel creativity</span> with data, guide passion with precision<span className="bringer-accent">.</span>
								</h4>
								<p>
									We're not just tech experts; we're strategic alchemists. At Scale Us, we blend data-driven insights with unbridled passion, ensuring your digital solutions reach the right audience,
									resonate effectively, and deliver measurable results. Passion with direction transforms vision into reality.
								</p>
							</div>
							{/* <!-- .bringer-block --> */}
							{/* <!-- Card Item --> */}
							<div className="bringer-block">
								<h4>
									We craft <span className="bringer-accent">emotional connections</span>, not just visuals and copy<span className="bringer-accent">.</span>
								</h4>
								<p>
									We delve deeper than pixels and prose. We understand the human heart, the language of emotions. We weave stories that resonate, visuals that linger in minds, and content that sparks
									conversations. Because true connection is the foundation of brand loyalty.
								</p>
							</div>
							{/* <!-- .bringer-block --> */}
							{/* <!-- Card Item --> */}
							<div className="bringer-block">
								<h4>
									At Scale Us, we don't just work with you; we become your <span className="bringer-accent">technology champions</span>
									<span className="bringer-accent">.</span>
								</h4>
								<p>
									At Scale Us, we don't see clients, we see collaborators. We believe in building partnerships, understanding your vision, and becoming an extension of your team. Your goals are our
									mission, and your success is our masterpiece. Together, we transform your dreams into reality.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
