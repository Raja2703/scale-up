import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Index = () => {
	// const { scrollYProgress } = useScroll();

	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});

	// Transform for the right side to create a parallax effect
	const yTransform = useTransform(scrollYProgress, [0, 1], [0, 0]);

	const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
	const height = useTransform(scrollYProgress, [0, 1], ['30%', '100%']);

	return (
		<section id="testimonials-section" className="backlight-top">
			<div ref={ref} style={{ marginBottom: '20rem', overflow: 'hidden' }}>
				<motion.div style={{ scale, height }} transition={{ duration: 0.6, delay: 0.4 }}>
					<Image src={'/img/Group 10122154.svg'} alt="Testimonials" loading="lazy" width="800" height="600" style={{ width: '100%', height: 'auto' }} />
				</motion.div>
			</div>
			{/* <!-- .bringer-expand-on-scroll --> */}
			<div className="stg-row stg-large-gap stg-top-gap-l">
				{/* Left Side - Stays Fixed */}
				<div className="stg-col-6 stg-tp-bottom-gap-l" data-pagehide="fade-left">
					<div className="bringer-sticky-block sticky top-50">
						<motion.h2 style={{ marginBottom: '4rem' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.3, delay: 2 * 0.2 }} viewport={{ once: true }}>
							What Clients Say
						</motion.h2>
						<motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.3, delay: 2 * 0.2 }} viewport={{ once: true }} className="bringer-large-text">
							Here are some of the most inspiring reviews from our clients. Your opinion is very important to us ’cause we have always tried to evolve and improve in the professional field and work on
							mistakes.
						</motion.p>
						<div className="align-right">
							<Link href="contact-us.html" className="bringer-arrow-link" style={{ backgroundColor: 'transparent' }}>
								Get a FREE Quote
							</Link>
						</div>
					</div>
				</div>

				{/* Right Side - Scrolls with Motion */}
				<div className="stg-col-6">
					<motion.div style={{ y: yTransform }}>
						<div className="bringer-grid-1col stg-normal-gap">
							{/* <!-- Card Item --> */}
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3, delay: 2 * 0.2 }}
								viewport={{ once: true }}
								className="bringer-block bringer-tetimonials-card"
							>
								<div className="bringer-tetimonials-card-descr">
									"Working with Scale Us has been transformative for our digital strategy. Their innovative approach and expertise in web development have significantly boosted our online presence."
								</div>
								<div className="bringer-tetimonials-card-footer">
									<div className="bringer-tetimonials-card-name">
										<h6>Ravi Sharma</h6>
										<span className="bringer-meta">Chief Marketing Officer, Tech Innovators India</span>
									</div>
									<div className="bringer-tetimonials-card-rate">
										<span className="bringer-tetimonials-stars5"></span>
									</div>
								</div>
							</motion.div>
							{/* <!-- .bringer-tetimonials-card --> */}
							{/* <!-- Card Item --> */}
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3, delay: 2 * 0.2 }}
								viewport={{ once: true }}
								className="bringer-block bringer-tetimonials-card"
							>
								<div className="bringer-tetimonials-card-descr">
									"Scale Us exceeded our expectations with their mobile app development services. Their attention to detail and commitment to quality ensured a seamless user experience, driving higher
									customer engagement."
								</div>
								<div className="bringer-tetimonials-card-footer">
									<div className="bringer-tetimonials-card-name">
										<h6>Neha Patel</h6>
										<span className="bringer-meta">CEO, Digital Solutions India</span>
									</div>
									<div className="bringer-tetimonials-card-rate">
										<span className="bringer-tetimonials-stars5"></span>
									</div>
								</div>
							</motion.div>
							{/* <!-- .bringer-tetimonials-card --> */}
							{/* <!-- Card Item --> */}
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3, delay: 2 * 0.2 }}
								viewport={{ once: true }}
								className="bringer-block bringer-tetimonials-card"
							>
								<div className="bringer-tetimonials-card-descr">
									"We partnered with Scale Us for SEO services, and the results have been outstanding. Their strategic insights and proactive approach have helped us achieve top rankings and increased
									organic traffic."
								</div>
								<div className="bringer-tetimonials-card-footer">
									<div className="bringer-tetimonials-card-name">
										<h6>Ajay Singh</h6>
										<span className="bringer-meta">Head of IT, Global Enterprises India</span>
									</div>
									<div className="bringer-tetimonials-card-rate">
										<span className="bringer-tetimonials-stars5"></span>
									</div>
								</div>
							</motion.div>
							{/* <!-- .bringer-tetimonials-card --> */}
							{/* <!-- Card Item --> */}
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3, delay: 2 * 0.2 }}
								viewport={{ once: true }}
								className="bringer-block bringer-tetimonials-card"
							>
								<div className="bringer-tetimonials-card-descr">
									"Scale Us delivered an exceptional e-commerce solution that perfectly aligned with our business goals. Their expertise in UI/UX design made our platform visually appealing and
									user-friendly."
								</div>
								<div className="bringer-tetimonials-card-footer">
									<div className="bringer-tetimonials-card-name">
										<h6>Priya Desai</h6>
										<span className="bringer-meta">Founder, E-commerce Ventures India </span>
									</div>
									<div className="bringer-tetimonials-card-rate">
										<span className="bringer-tetimonials-stars5"></span>
									</div>
								</div>
							</motion.div>
							{/* <!-- .bringer-tetimonials-card --> */}
						</div>
						{/* <!-- .bringer-grid --> */}
					</motion.div>
				</div>
			</div>
			<br />
			<br />
			<br />
			{/* <!-- .stg-row -->*/}
			{/* <!-- Partners Section --> */}
			<div className="bringer-partners partner-section">
				<span className="bringer-label">Certifications</span>
				<div className="bringer-grid-6cols bringer-tp-grid-3cols bringer-m-grid-2cols stg-top-gap-s">
					{['Scale-Us-Startup-India', 'Scale-Us-Digital-India', 'Scale-Us-Swacch-Bharat', 'TB-Logo', 'Make In India', 'Great-Place-To-Work'].map((certificate, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -10 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: index * 0.2 }}
							viewport={{ once: true }}
							className="bringer-block bringer-center"
						>
							<Image width={'800'} height={'800'} src={`/img/partners/${certificate}.svg`} alt="Certification" loading="lazy" />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Index;
