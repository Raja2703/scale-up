import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const index = () => {
	return (
		<section className="backlight-top">
			{/* <!-- Section Title --> */}
			<div className="stg-row bringer-section-title">
				<div className="stg-col-8 stg-offset-2">
					<div className="align-center">
						<motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
							4 Steps to Brand Brilliance
						</motion.h2>
						<motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }} className="bringer-large-text is-short">
							We are a passionate team of developers who believe in the power of creativity.
						</motion.p>
					</div>
				</div>
			</div>
			<div className="stg-row stg-valign-middle stg-large-gap">
				<div className="stg-col-6 stg-tp-bottom-gap-l">
					<motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="bringer-parallax-media">
						<Image className="bringer-lazy" src={'/img/home/steps.webp'} alt="Brand Brilliance" width={'565'} height={'540'} />
					</motion.div>
				</div>
				<div className="stg-col-6" data-pagehide="fade-right" data-delay="100">
					<div className="bringer-grid-2cols stg-normal-gap" data-stagger-appear="fade-left">
						{/* <!-- Grid Item --> */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}
							className="bringer-subgrid-item stg-bottom-gap stg-m-bottom-gap-s"
						>
							<div className="bringer-title-with-meta">
								<span className="bringer-label">Step 01</span>
								<h5>Spark Ignition</h5>
							</div>
							<div>Share your vision, dreams, and challenges. We listen deeply, sparking the ignition of your brand.</div>
						</motion.div>
						{/* <!-- Grid Item --> */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}
							className="bringer-subgrid-item stg-bottom-gap stg-m-bottom-gap-s"
						>
							<div className="bringer-title-with-meta">
								<span className="bringer-label">Step 02</span>
								<h5>Concept Couture</h5>
							</div>
							<div>Explore bespoke concepts tailored just for you. Collaborate and refine, ensuring your brand voice is true.</div>
						</motion.div>
						{/* <!-- Grid Item --> */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}
							className="bringer-subgrid-item stg-m-bottom-gap-s"
						>
							<div className="bringer-title-with-meta">
								<span className="bringer-label">Step 03</span>
								<h5>Masterful Crafting</h5>
							</div>
							<div>Watch your vision transform into reality with meticulous attention to detail from our team of experts.</div>
						</motion.div>
						{/* <!-- Grid Item --> */}
						<motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="bringer-subgrid-item">
							<div className="bringer-title-with-meta">
								<span className="bringer-label">Step 04</span>
								<h5>Launch &amp; Beyond</h5>
							</div>
							<div>Unleash your brand masterpiece to the world. We celebrate your success and optimize for growth.</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default index;
