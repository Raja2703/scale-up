import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const index = () => {
	return (
		<footer id="bringer-footer">
			{/* <!-- Footer Widgets Area --> */}
			<div className="bringer-footer-widgets">
				<div className="stg-container">
					<div className="stg-row">
						<div className="stg-col-5 stg-tp-col-12 stg-tp-bottom-gap-l">
							<div className="bringer-info-widget">
								<motion.div initial={{ opacity: 0, x: 20, y: 10 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} viewport={{ once: true }}>
									<Link style={{ backgroundColor: 'transparent' }} href="https://scaleus.in" className="bringer-logo footer-logo">
										{' '}
										<Image src="/img/Scale-Us-Logo.svg" alt="Scale-Us-Logo" width="200" height="88" />{' '}
									</Link>
									<div className="bringer-info-description">
										We are a passionate team at Scale Us, dedicated to empowering individuals and businesses through creative digital solutions. We specialize in creating compelling online presences
										that showcase your work and convey your unique story.
									</div>
								</motion.div>
								<span className="bringer-label">Follow us:</span>
								<ul className="bringer-socials-list">
									<motion.li initial={{ opacity: 0, x: 5, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
										<Link
											style={{ backgroundColor: 'transparent' }}
											href="https://www.linkedin.com/company/scale-us-technologies"
											target="_blank"
											rel="noopener noreferrer"
											className="bringer-socials-linkedin"
											aria-label="Visit our LinkedIn profile"
										>
											<i></i>
										</Link>
									</motion.li>
									<motion.li initial={{ opacity: 0, x: 5, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }}>
										<Link
											style={{ backgroundColor: 'transparent' }}
											href="https://instagram.com/scaleus.in"
											target="_blank"
											rel="noopener noreferrer"
											className="bringer-socials-instagram"
											aria-label="Visit our Instagram profile"
										>
											{' '}
											<i></i>{' '}
										</Link>
									</motion.li>
									<motion.li initial={{ opacity: 0, x: 5, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }}>
										<Link
											style={{ backgroundColor: 'transparent' }}
											href="https://x.com/scale_us_tech"
											target="_blank"
											rel="noopener noreferrer"
											className="bringer-socials-x"
											aria-label="Visit our Twitter profile"
										>
											{' '}
											<i></i>{' '}
										</Link>
									</motion.li>
									<motion.li initial={{ opacity: 0, x: 5, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }}>
										<Link
											style={{ backgroundColor: 'transparent' }}
											href="https://www.youtube.com/@Scale-Us-Technologies"
											target="_blank"
											rel="noopener noreferrer"
											className="bringer-socials-youtube"
											aria-label="Visit our YouTube profile"
										>
											<i></i>
										</Link>
									</motion.li>
									<motion.li initial={{ opacity: 0, x: 5, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.3, delay: 0.5 }}>
										<Link
											style={{ backgroundColor: 'transparent' }}
											href="https://www.facebook.com/ScaleUsTechnologies"
											target="_blank"
											rel="noopener noreferrer"
											className="bringer-socials-facebook"
											aria-label="Visit our Facebook profile"
										>
											<i></i>
										</Link>
									</motion.li>
								</ul>
							</div>
						</div>
						<div className="stg-col-2 stg-offset-1 stg-tp-col-4 stg-m-col-4">
							<motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="bringer-widget">
								<h6>Hire Developers</h6>
								<div className="bringer-menu-widget">
									<ul>
										<li>
											<Link style={{ backgroundColor: 'transparent' }} href="services.html">
												App Development
											</Link>
										</li>
										<li>
											<Link style={{ backgroundColor: 'transparent' }} href="services.html">
												Web Development
											</Link>
										</li>
										<li>
											<Link style={{ backgroundColor: 'transparent' }} href="services.html">
												SEO and UI/UX
											</Link>
										</li>
										<li>
											<Link style={{ backgroundColor: 'transparent' }} href="services.html">
												Custom Development
											</Link>
										</li>
										<li>
											<Link style={{ backgroundColor: 'transparent' }} href="services.html">
												Integrations
											</Link>
										</li>
									</ul>
								</div>
							</motion.div>
							{/* <!-- .bringer-widget --> */}
						</div>
						<div className="stg-col-2 stg-tp-col-4 stg-m-col-4">
							<motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className="bringer-widget">
								<h6>Explore</h6>
								<div className="bringer-menu-widget">
									<ul>
										<li>
											<Link style={{ backgroundColor: 'transparent' }} href="https://scaleus.in/">
												Home
											</Link>
										</li>
										<li>
											<Link style={{ backgroundColor: 'transparent' }} href="about-us.html">
												About Us
											</Link>
										</li>
										<li>
											<Link style={{ backgroundColor: 'transparent' }} href="services.html">
												Solutions
											</Link>
										</li>
										<li>
											<Link style={{ backgroundColor: 'transparent' }} href="faq.html">
												FAQs
											</Link>
										</li>
										<li>
											<Link style={{ backgroundColor: 'transparent' }} href="contact-us.html">
												Contact Us
											</Link>
										</li>
									</ul>
								</div>
							</motion.div>
							{/* <!-- .bringer-widget --> */}
						</div>
						<div className="stg-col-2 stg-tp-col-4 stg-m-col-4">
							<motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.6 }} className="bringer-widget">
								<h6>Resources</h6>
								<div className="bringer-menu-widget">
									<ul>
										<li>
											<Link style={{ backgroundColor: 'transparent' }} href="#">
												Terms of Use
											</Link>
										</li>
										<li>
											<Link style={{ backgroundColor: 'transparent' }} href="#">
												Privacy Policy
											</Link>
										</li>
										<li>
											<Link style={{ backgroundColor: 'transparent' }} href="#">
												Brochure
											</Link>
										</li>
										<li>
											<Link style={{ backgroundColor: 'transparent' }} href="#">
												Become Partner
											</Link>
										</li>
									</ul>
								</div>
							</motion.div>
							{/* <!-- .bringer-widget --> */}
						</div>
					</div>
					{/* <!-- .stg-row --> */}
				</div>
				{/* <!-- .stg-container --> */}
			</div>
			{/* <!-- .bringer-footer-widgets --> */}
			{/* <!-- Footer Copyright Line --> */}
			<div className="bringer-footer-line stg-container">
				<div className="align-center">Copyright &copy; 2024. All Rights Reserved.</div>
			</div>
			{/* <!-- bringer-footer-line --> */}
		</footer>
	);
};

export default index;
