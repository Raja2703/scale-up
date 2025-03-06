import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const about = () => {
	return (
		// <!-- Section: About Us -->
		<motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 2 * 0.2 }} viewport={{ once: true }} className="backlight-top">
			<div className="stg-row stg-large-gap stg-m-normal-gap">
				<div className="stg-col-6 stg-tp-bottom-gap-l stg-m-bottom-gap" data-pagehide="fade-left">
					<div className="bringer-parallax-media">
						<Image className="bringer-lazy" src={'/img/home/about02.webp'} alt="We are Scale Us" width={'960'} height={'960'} />
					</div>
				</div>
				<div className="stg-col-6 stg-vertical-space-between" data-pagehide="fade-right">
					<div>
						<h3>Welcome to Scale Us, where creativity meets expertise.</h3>
						<p className="bringer-large-text">Your Trusted Technology Partner</p>
						<p>
							Scale Us Technologies is an Indian tech web-based company dedicated to empowering businesses through cutting-edge technology. Our team of experienced professionals is passionate about
							transforming your ideas into reality with innovative solutions that drive success.
						</p>
						<p>
							From web development and eCommerce solutions to mobile app development and UI/UX designing, our range of services is designed to provide end-to-end support for your digital journey. We
							also excel in software testing and search engine optimization, ensuring your digital presence is robust and visible.
						</p>
					</div>
					<a href="/about-us" className="bringer-icon-link" style={{ backgroundColor: 'transparent', paddingLeft: '0' }}>
						<div className="bringer-icon-wrap">
							<i className="bringer-icon bringer-icon-explore"></i>
						</div>
						<div className="bringer-icon-link-content">
							<h6>
								We are <br />
								Passionate Team
							</h6>
							<span className="bringer-label">Learn More About Us</span>
						</div>{' '}
					</a>
					{/* <!-- .bringer-icon-link --> */}
				</div>
			</div>
			{/* <!-- .stg-row --> */}
		</motion.section>
	);
};

export default about;
