import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const index = () => {
	const count = useMotionValue(0);
	const completedProjectCount = useTransform(() => Math.round(count.get()));

	const experience = useMotionValue(0);
	const yearsOfExperience = useTransform(() => Math.round(experience.get()));

	useEffect(() => {
		const projectControls = animate(count, 150, { duration: 3 });
		const experienceControls = animate(experience, 10, { duration: 3 });

		return () => {
			projectControls.stop();
			experienceControls.stop();
		};
	}, []);

	return (
		<section className="divider-bottom">
			<div className="bringer-hero-block bringer-hero-type01">
				{/* <!-- Main Line --> */}
				<div className="stg-row stg-bottom-gap-l stg-m-bottom-gap-l">
					<div className="stg-col-9 stg-tp-col-8 stg-m-col-12">
						{/* <!-- Title --> */}
						<motion.p
							style={{ fontSize: '5rem', fontWeight: '700', color: 'white', lineHeight: 1 }}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.2, delay: 0.2 }}
							viewport={{ once: true }}
							className="bringer-page-title"
						>
							Unleash Your Creativity And Bring IT to Reality
						</motion.p>
					</div>
					<div className="stg-col-3 stg-tp-col-4 stg-m-col-12">
						{/* <!-- Social Proof --> */}
						<div className="bringer-hero-social-proof">
							<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 0.3 }} viewport={{ once: true }}>
								<Image width={'80'} height={'80'} src="/img/home/social-proof01.webp" alt="Client 01" />
								<Image width={'80'} height={'80'} src="/img/home/social-proof02.webp" alt="Client 02" />
								<Image width={'80'} height={'80'} src="/img/home/social-proof03.webp" alt="Client 03" />
								<Link style={{ width: '20px' }} href="index.html/#testimonials-section">
									150+
								</Link>
							</motion.div>
							<motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 0.4 }} viewport={{ once: true }}>
								Trusted by 150+ clients
							</motion.p>
						</div>
					</div>
				</div>
				{/* <!-- .stg-row --> */}

				{/* <!-- Masked Media Container --> */}
				<div className="bringer-hero-media-wrap bringer-masked-bottom-right bringer-masked-block stg-bottom-gap-l">
					{/* <!-- Masked Media --> */}
					<motion.div
						initial={{ opacity: 0, scale: 1.1 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 0.3 }}
						viewport={{ once: true }}
						className="bringer-masked-media bringer-masked-media bringer-parallax-media"
					>
						<Image
							style={{
								clipPath: 'polygon(0 0, 100% 0, 100% 72%, 90% 72%, 90% 100%, 0 100%)',
							}}
							width={'2000'}
							height={'100'}
							src="/img/01-hero-scaleUS.svg"
							alt="Unleash Your Creativity"
						/>
					</motion.div>
					{/* <!-- Content --> */}
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, delay: 0.3 }}
						viewport={{ once: true }}
						className="bringer-masked-content at-bottom-right"
					>
						<Link href="#section9" className="bringer-square-button">
							<div className="is-small">
								<Image width={'200'} height={'200'} src={'/img/about-scaleus1.svg'} alt="Let's Chat" />
							</div>
						</Link>
					</motion.div>
				</div>

				{/* <!-- Additional Information Line --> */}
				<div className="stg-row stg-valign-bottom">
					<div className="stg-col-3 stg-tp-col-3 stg-m-col-6">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.2 }}
							viewport={{ once: true }}
							className="bringer-counter bringer-small-counter"
						>
							<motion.pre style={{ margin: 0 }} className="bringer-counter-number" data-suffix="+">
								{completedProjectCount}
							</motion.pre>
							<div className="bringer-counter-label">Completed Projects</div>
						</motion.div>
						{/* <!-- .bringer-counter --> */}
					</div>
					<div className="stg-col-3 stg-tp-col-3 stg-m-col-6">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.3 }}
							viewport={{ once: true }}
							className="bringer-counter bringer-small-counter"
						>
							<motion.pre style={{ margin: 0 }} className="bringer-counter-number" data-suffix="+">
								{yearsOfExperience}
							</motion.pre>
							<div className="bringer-counter-label">Years of Experience</div>
						</motion.div>
						{/* <!-- .bringer-counter --> */}
					</div>
					{/* <!-- Visible on mobile and tablet --> */}
					<div className="stg-col-6 stg-tp-col-6 stg-m-col-12 stg-m-top-gap mobile-tablet-only">
						<motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }} viewport={{ once: true }} className="bringer-large-text">
							We help businesses and professionals showcase their work and connect with clients through innovative digital solutions.
						</motion.p>
					</div>

					{/* <!-- Visible on desktop --> */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.4 }}
						viewport={{ once: true }}
						className="stg-col-6 stg-tp-col-6 stg-m-col-12 stg-m-top-gap desktop-only"
						style={{ marginLeft: '45px' }}
					>
						<p className="bringer-large-text">We help businesses and professionals showcase their work and connect with clients through innovative digital solutions.</p>
					</motion.div>
				</div>
				{/* <!-- .stg-row --> */}
			</div>
			{/* <!-- .bringer-hero-block --> */}
			<br />
			<br />
			<div className="stg-row stg-large-gap stg-tp-normal-gap">
				<div className="stg-col-6 stg-vertical-space-between stg-tp-bottom-gap-l desktop-only">
					<motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>
						Igniting brands that spark movements.
					</motion.h2>
					<motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.3 }} viewport={{ once: true }} className="align-right">
						<Link href="portfolio.html" className="bringer-icon-link" style={{ backgroundColor: 'transparent' }}>
							<div className="bringer-icon-link-content">
								<h6>
									Unleash your
									<br />
									Brand's potential
								</h6>
								<span className="bringer-label">Explore our work</span>
							</div>
							<div className="bringer-icon-wrap">
								<i className="bringer-icon bringer-icon-explore"></i>
							</div>{' '}
						</Link>
						{/* <!-- .bringer-icon-link --> */}
					</motion.div>
				</div>
				<motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.3 }} viewport={{ once: true }} className="stg-col-6">
					<p>
						At Scale US, we are more than creatives; we are brand strategists and digital architects. We take your vision, infuse it with strategic insight, and create compelling experiences that
						captivate audiences and drive engagement. We build not just brands, but impactful digital solutions that propel businesses forward.
					</p>
					<p>
						We are a team of passionate and experienced professionals at Scale US, dedicated to helping businesses achieve their goals through creativity and innovation. We believe in unleashing our
						clients' full potential, crafting solutions that drive success and growth.
					</p>
					<p>We empower businesses to build compelling online presences that showcase their work and tell their unique stories.</p>
				</motion.div>

				<div className="stg-col-6 stg-vertical-space-between stg-tp-bottom-gap-l mobile-tablet-only">
					<br />
					<motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }} className="align-right">
						<Link href="portfolio.html" className="bringer-icon-link">
							<div className="bringer-icon-link-content">
								<h6>
									Unleash your
									<br />
									Brand's potential
								</h6>
								<span className="bringer-label">Explore our work</span>
							</div>
							<div className="bringer-icon-wrap">
								<i className="bringer-icon bringer-icon-explore"></i>
							</div>{' '}
						</Link>
						{/* <!-- .bringer-icon-link --> */}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default index;
