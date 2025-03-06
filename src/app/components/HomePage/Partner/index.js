'use client';
import { useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const index = () => {
	const { formResponse, setFormResponse } = useState('');
	const { formResponseColor, setFormResponseColor } = useState('');

	const handleFormSubmit = (e) => {
		e.preventDefault();
		var formData = new FormData(this);

		setFormResponse('Sending...');

		fetch(this.action, { method: 'POST', body: formData })
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				setFormResponse(data.message);
				if (!data.success) {
					formResponseColor.style.color = '#FFFFFF';
				} else {
					formResponseColor.style.color = '#FFFFFF';
				}
			})
			.catch((error) => {
				console.error('Error:', error);
				setFormResponse('An error occurred. Please try again.');
				formResponseColor.style.color = '#FFFFFF';
			});
	};

	return (
		<section id="page06">
			<div className="bringer-hero-block bringer-hero-type06">
				<div className="bringer-bento-grid stg-bottom-gap">
					<div className="is-large bringer-masked-block">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.2 }}
							viewport={{ once: true }}
							className="bringer-bento-hero-media bringer-masked-media"
							style={{ position: 'relative' }}
						>
							{/* <!-- Title --> */}
							<Image src={'/img/box2.svg'} width={'100'} height={'100'} />
							<div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', padding: '2.5rem' }}>
								<h1 className="bringer-page-title">Unleash your Creativity</h1>
								{/* <!-- Description --> */}
								<p className="bringer-highlight">We help businesses and professionals showcase their work and connect with clients through innovative digital solutions.</p>
							</div>
						</motion.div>
						<motion.div
							className="bringer-masked-content at-bottom-right"
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<Link href="#page06" className="bringer-square-button" aria-label="Go to page 06">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
								</svg>
							</Link>
						</motion.div>
					</div>
					<motion.div initial={{ opacity: 0, scale: 1.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 2 * 0.2 }} viewport={{ once: true }} className="is-small">
						<Image className="bringer-lazy" src="/img/about-scaleus1.svg" alt="Product 04" width="1200" height="1200" />
					</motion.div>
					<motion.div initial={{ opacity: 0, scale: 1.1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 2 * 0.2 }} viewport={{ once: true }} className="is-small">
						<Image className="bringer-lazy" src="/img/about-scaleus2.svg" alt="Product 08" width="1200" height="1200" />
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, delay: 2 * 0.2 }}
						viewport={{ once: true }}
						className="is-medium bringer-block stg-vertical-space-between"
					>
						<h3>Your Partner in Digital Innovation</h3>
						<p>
							We are a team of passionate and experienced tech experts at Scale Us, dedicated to helping businesses achieve their goals through creativity and innovation. We believe in leveraging our
							expertise in designing, developing, and marketing to empower our clients.
						</p>
					</motion.div>
				</div>
			</div>
			{/* <!-- .bringer-hero-block --> */}
			{/* <!-- Section: CTA --> */}
			<div className="bringer-masked-cta bringer-masked-block">
				<form
					onSubmit={handleFormSubmit}
					action="/mail/PHPMailer-master/phpmailer.php"
					method="post"
					data-fill-error="Please, fill out the form."
					className="bringer-contact-form is-short bringer-masked-media"
				>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.2 }}
						viewport={{ once: true }}
						className="bringer-form-content bringer-cta-form"
						style={{
							clipPath: 'polygon(0 0, 75% 0, 75% 15%, 100% 15%, 100% 100%, 0 100%)',
							borderRadius: '1.5rem',
						}}
					>
						<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} viewport={{ once: true }} className="bringer-cta-form-content">
							<div className="bringer-cta-title">Ready to set your Brand ablaze?</div>
							<input type="email" id="subscribe_email" name="subscribe_email" placeholder="email@example.com" required />
						</motion.div>
						<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} viewport={{ once: true }} className="bringer-cta-form-button">
							<button type="submit" aria-label="Submit Form">
								<span className="bringer-icon bringer-icon-arrow-submit"></span>
							</button>
						</motion.div>
						<div className="bringer-contact-form__response" style={{ color: formResponseColor }}>
							{formResponse}
						</div>
					</motion.div>
					<span className="bringer-form-spinner"></span>
				</form>
				<div className="bringer-masked-cta-content bringer-masked-content at-top-right">
					<motion.p initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} viewport={{ once: true }} className="bringer-large-text">
						Let's craft a visual identity that ignites passion and loyalty. ✨
					</motion.p>
				</div>
			</div>
		</section>
	);
};

export default index;
