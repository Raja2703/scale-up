import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const hero = () => {
	return (
		<section className="backlight-bottom">
			<div className="bringer-hero-block bringer-hero-type03">
				{/* <!-- Main Row --> */}
				<div className="bringer-hero-title-wrap">
					{/* <!-- Title --> */}
					<motion.h1 className="bringer-page-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 2 * 0.2 }} viewport={{ once: true }}>
						Your Partner in
						<br />
						Digital Innovation
					</motion.h1>
					{/* <!-- Additional Media --> */}
					<motion.div className="stg-m-hide" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 2 * 0.2 }} viewport={{ once: true }}>
						<Image className="bringer-lazy" src={'/img/home/home03-hero1.webp'} alt="Scale-Us-Hero" width={'550'} height={'310'} />
					</motion.div>
				</div>
				{/* <!-- Masked Media Container --> */}
				<div style={{ position: 'relative' }} className="bringer-hero-media-wrap bringer-masked-block">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 2 * 0.2 }}
						viewport={{ once: true }}
						className="bringer-hero-media bringer-masked-media"
					>
						{/* <Image id="hero-poster" src={'/img/home/home03-hero2.webp'} fetchPriority="high" alt="Hero Poster" width={'550'} height={'310'} /> */}
						<video
							id="hero-video"
							style={{
								height: '22rem',
								clipPath: 'polygon(0 0, 78% 0, 78% 20%, 100% 20%, 100% 100%, 0 100%)',
							}}
							playsInline
							muted
							loop
							autoPlay
						>
							<source src="/video/hero.webm" type="video/webm" />
						</video>
						{/* <!-- Tags List --> */}
					</motion.div>
					<motion.ul style={{ position: 'absolute', bottom: 270 }} className="bringer-tags-list" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
						<motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
							<Link href="services.html">Website Development</Link>
						</motion.li>
						<motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
							<Link href="services.html">App Development</Link>
						</motion.li>
						<motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
							<Link href="services.html">SEO</Link>
						</motion.li>
						<motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
							<Link href="services.html">UI/UX</Link>
						</motion.li>
						<motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
							<Link href="services.html">Staff Augmentation</Link>
						</motion.li>
					</motion.ul>
					{/* <!-- Content --> */}
					<div className="bringer-hero-media-content bringer-masked-content at-top-right">
						<div className="bringer-hero-media-content-inner m-align-center">Comprehensive IT Solutions for Your Unique Business Needs</div>
					</div>
				</div>
			</div>
			{/* <!-- .bringer-hero-block --> */}
			<div className="bringer-partners partner-section">
				<span className="bringer-label">Proud of our work with</span>
				<div className="bringer-grid-6cols bringer-tp-grid-3cols bringer-m-grid-2cols stg-top-gap-s">
					{['Government-of-India', 'Seven-Eleven', 'Amazon', 'Daily-Hunt', 'Saliah-Foods', 'OZI'].map((partner, index) => (
						<motion.div
							key={partner}
							className="bringer-block bringer-center"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<Image src={`/img/partners/Scale-Us-Client-${partner}.svg`} alt="Partner Logo" width={200} height={100} loading="eager" decoding="async" />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default hero;
