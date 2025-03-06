import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const index = () => {
	const contentCards = [
		{
			title: "We don't just design, we unleash creative firestorms.",
			description:
				"At Scale Us, we unleash creative firestorms. Our approach goes beyond conventional boundaries to push the limits of innovation. We're passionate about crafting dynamic and transformative solutions that inspire, captivate, and drive measurable success for our clients. From conceptualization to execution, we ignite creativity to deliver impactful outcomes that redefine possibilities in digital solutions.",
		},
		{
			title: 'We fuel creativity with data, guide passion with precision.',
			description:
				'At Scale Us, we integrate advanced analytics with strategic expertise to ensure our tech solutions are both innovative and meticulously executed. This approach guarantees that our solutions not only meet but exceed expectations, delivering impactful results for your business.',
		},
		{
			title: 'We craft emotional connections, not just visuals and copy.',
			description: 'At Scale Us, we create immersive digital experiences that resonate deeply with your audience, leveraging innovative solutions to drive engagement and foster lasting connections.',
		},
		{
			title: "We don't just work with you, we become your tech champions.",
			description:
				'At Scale Us, we become your tech champions. Our dedicated team goes beyond partnership to champion your technological goals, offering expertise, innovation, and unwavering support. Together, we navigate challenges, seize opportunities, and achieve success, ensuring your business thrives in the digital landscape.',
		},
	];

	const partners = [
		'img/partners/Scale-Us-Client-Government-of-India.svg',
		'img/partners/Scale-Us-Client-Seven-Eleven.svg',
		'img/partners/Scale-Us-Client-Amazon.svg',
		'img/partners/Scale-Us-Client-Daily-Hunt.svg',
		'img/partners/Scale-Us-Client-Saliah-Foods.svg',
		'img/partners/Scale-Us-Client-OZI.svg',
	];

	return (
		// <!-- Section: What Makes Us Best -->
		<section className="backlight-bottom">
			{/* <!-- Section Title --> */}
			<div className="stg-row bringer-section-title">
				<div className="stg-col-8 stg-offset-2">
					<div className="align-center">
						<motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
							What Makes Us Best
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}
							className="bringer-large-text"
							data-delay="100"
						>
							We are a passionate team at Scale Us who believes in the power of creativity. We empower businesses to establish a compelling online presence that showcases their achievements and
							narratives effectively.
						</motion.p>
					</div>
				</div>
			</div>
			{/* Content Grid */}
			<div className="bringer-grid-2cols bringer-tp-grid-1col" data-stagger-appear="zoom-in" data-stagger-delay="100" data-delay="100">
				{contentCards.map((card, index) => (
					<motion.div
						initial={{ opacity: 0, scale: 0.85 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
						className="bringer-block"
						key={index}
					>
						<h4>
							{card.title.split(/(\<span.*?span\>)/g).map((part, i) => (
								<span key={i} dangerouslySetInnerHTML={{ __html: part }} />
							))}
						</h4>
						<p>{card.description}</p>
					</motion.div>
				))}
			</div>

			{/* Partners Section */}
			<div className="bringer-partners partner-section">
				<span className="bringer-label">Proud to be associated with</span>
				<div
					className="bringer-grid-6cols bringer-tp-grid-3cols bringer-m-grid-2cols stg-top-gap-s"
					data-stagger-appear="fade-up"
					data-stagger-unload="fade-up"
					data-stagger-delay="100"
					data-delay="100"
				>
					{partners.map((partner, index) => (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							viewport={{ once: true }}
							className="bringer-block bringer-center"
							key={index}
						>
							<Image width={'100'} height={'100'} src={partner} alt="Partner Logo" loading="lazy" />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default index;
