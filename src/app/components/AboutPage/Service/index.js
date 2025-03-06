import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const index = () => {
	return (
		<section className="backlight-bottom divider-top">
			{/* <!-- Section Intro --> */}
			<div className="stg-row stg-large-gap stg-bottom-gap-l">
				<div className="stg-col-6 stg-tp-col-8 stg-tp-bottom-gap-l">
					<motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} data-split-appear="fade-up">
						Unleashing the full spectrum of magic
					</motion.h2>
				</div>
				<div className="stg-col-6 stg-tp-col-9 stg-tp-offset-3">
					<motion.p
						style={{ fontSize: '2rem' }}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
						className="bringer-large-text"
						data-split-appear="fade-up"
						data-delay="100"
					>
						We offer a diverse range of tailored services to empower businesses of all sizes to achieve their goals effectively.
					</motion.p>
					<motion.p
						style={{ fontSize: '1.3rem', lineHeight: 1.3 }}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						viewport={{ once: true }}
					>
						We believe in a holistic approach to branding at Scale Us. From brand identity and website design to marketing campaigns and content creation, we craft strategies that enhance every aspect
						of your brand's digital presence.
					</motion.p>
				</div>
			</div>
			{/* <!-- Services List --> */}
			<div className="bringer-detailed-list-wrap">
				<ul className="bringer-detailed-list">
					<motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
						<div className="bringer-detailed-list-title">
							<h4>
								Mobile Application Development<span className="bringer-accent">.</span>
							</h4>
						</div>
						<div className="bringer-detailed-list-description">
							<p style={{ fontSize: '1.3rem', lineHeight: 1.4 }}>
								At Scale Us, we specialize in crafting intuitive and high-performance mobile applications that cater to your specific business needs. From concept to deployment, our expert team
								ensures seamless user experiences across platforms, leveraging the latest technologies to enhance functionality and user engagement.
							</p>
						</div>
						<div className="bringer-detailed-list-button">
							<span className="bringer-icon bringer-icon-explore"></span>
						</div>
						<Link style={{ backgroundColor: 'transparent' }} href="services.html" aria-label="Mobile Application Development Service"></Link>
					</motion.li>
					<motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
						<div className="bringer-detailed-list-title">
							<h4>
								Website Development<span className="bringer-accent">.</span>
							</h4>
						</div>
						<div className="bringer-detailed-list-description">
							<p style={{ fontSize: '1.3rem', lineHeight: 1.4 }}>
								Our website development services focus on creating responsive, dynamic, and visually appealing platforms that strengthen your online presence. Whether you need a corporate website,
								e-commerce site, or a custom web application, we deliver scalable solutions that align with your brand identity and business goals, ensuring optimal performance and user experience.
							</p>
						</div>
						<div className="bringer-detailed-list-button">
							<span className="bringer-icon bringer-icon-explore"></span>
						</div>
						<Link style={{ backgroundColor: 'transparent' }} href="services.html" aria-label="Website Development Service"></Link>
					</motion.li>
					<motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
						<div className="bringer-detailed-list-title">
							<h4>
								SEO and Email Marketing<span className="bringer-accent">.</span>
							</h4>
						</div>
						<div className="bringer-detailed-list-description">
							<p style={{ fontSize: '1.3rem', lineHeight: 1.4 }}>
								Scale Us excels in enhancing digital visibility through strategic SEO techniques and effective email marketing campaigns. We analyze market trends, optimize content, and implement
								proven strategies to improve search engine rankings and drive organic traffic. Our personalized email marketing solutions help nurture leads, build customer relationships, and maximize
								conversions, ensuring measurable results and sustained growth for your business.
							</p>
						</div>
						<div className="bringer-detailed-list-button">
							<span className="bringer-icon bringer-icon-explore"></span>
						</div>
						<Link style={{ backgroundColor: 'transparent' }} href="services.html" aria-label="SEO and Email Marketing Service"></Link>
					</motion.li>
					<motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
						<div className="bringer-detailed-list-title">
							<h4>
								Custom Software Development<span className="bringer-accent">.</span>
							</h4>
						</div>
						<div className="bringer-detailed-list-description">
							<p style={{ fontSize: '1.3rem', lineHeight: 1.4 }}>
								We specialize in developing bespoke software solutions tailored to streamline operations and drive innovation. Whether you require enterprise software, CRM systems, or specialized
								applications, our team combines technical expertise with industry insights to deliver scalable, secure, and efficient solutions that meet your unique business requirements.
							</p>
						</div>
						<div className="bringer-detailed-list-button">
							<span className="bringer-icon bringer-icon-explore"></span>
						</div>
						<Link style={{ backgroundColor: 'transparent' }} href="services.html" aria-label="Custom Software Development Service"></Link>
					</motion.li>
					<motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
						<div className="bringer-detailed-list-title">
							<h4>
								Custom API and Integration<span className="bringer-accent">.</span>
							</h4>
						</div>
						<div className="bringer-detailed-list-description">
							<p style={{ fontSize: '1.3rem', lineHeight: 1.4 }}>
								Scale Us provides comprehensive API development and integration services to enhance connectivity and streamline business processes. We develop custom APIs that facilitate seamless data
								exchange between applications and systems, optimizing workflow efficiency and enhancing overall operational performance. Our integration solutions ensure interoperability, scalability,
								and flexibility, empowering your business with enhanced functionality and productivity
							</p>
						</div>
						<div className="bringer-detailed-list-button">
							<span className="bringer-icon bringer-icon-explore"></span>
						</div>
						<Link style={{ backgroundColor: 'transparent' }} href="services.html" aria-label="Custom API and Integration Serivce"></Link>
					</motion.li>
				</ul>
			</div>
			{/* <!-- .bringer-detailed-list-wrap --> */}
			<div className="align-center stg-top-gap-l">
				<Link href="services.html" className="bringer-button">
					Explore All Services
				</Link>
			</div>
		</section>
	);
};

export default index;
