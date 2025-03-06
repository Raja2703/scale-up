'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
	{
		id: 1,
		title: 'Mobile Application Development',
		description:
			"We specialize in expert mobile application development, creating powerful, user-friendly apps that elevate your digital strategy. Harness our expertise to enhance your business's mobile capabilities.",
		image: '/img/home/service01.webp',
		alt: 'Hire-Mobile-App-Developer',
	},
	{
		id: 2,
		title: 'Website Development',
		description:
			'Specializing in website development, we create responsive and dynamic platforms that amplify your online presence. Our solutions are crafted to engage users and drive business growth effectively.',
		image: '/img/home/service02.webp',
		alt: 'Hire Website Developer',
	},
	{
		id: 3,
		title: 'UI/UX Design',
		description:
			'Our UI/UX design services are crafted to enhance user experience and elevate the visual appeal of your digital products. We focus on creating intuitive, user-friendly interfaces that not only captivate your audience but also improve usability and engagement, ultimately driving meaningful growth for your business.',
		image: '/img/home/service003.webp',
		alt: 'Hire Web Designer',
	},
	{
		id: 4,
		title: 'Custom Software Development',
		description:
			'Our custom software development services are tailored to meet the unique needs of your business. We build scalable, high-performance solutions that streamline operations, enhance productivity, and drive innovation, ensuring your business stays ahead in a competitive landscape.',
		image: '/img/home/service004.webp',
		alt: 'Custom Software Developer',
	},
];

const ServicesSection = () => {
	const [activeService, setActiveService] = useState(services[0]);

	return (
		<section className="backlight-bottom">
			{/* Section Title */}
			<div className="stg-row bringer-section-title">
				<div className="stg-col-8 stg-offset-2">
					<div className="align-center">
						<motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
							Our Services
						</motion.h2>
						<motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="bringer-large-text">
							We offer a wide range of creative services to help businesses of all sizes achieve their goals. Our services include:
						</motion.p>
					</div>
				</div>
			</div>

			{/* Image Preview */}
			<div className="bringer-list-with-preview">
				<motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="preview-image-container">
					<Image src={activeService.image} alt="Service Preview" width={584} height={907} priority />
				</motion.div>

				{/* Service Items */}
				<div className="bringer-lwp-roster">
					{services.map((service) => (
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4, delay: 0.2 }}
							viewport={{ once: true }}
							key={service.id}
							className={`bringer-lwp-item bringer-block ${activeService.id === service.id ? 'active' : ''}`}
							onMouseEnter={() => setActiveService(service)}
						>
							<div className="bringer-lwp-item-content">
								<h5>
									{service.title}
									<span className="bringer-accent">.</span>
								</h5>
								<p>{service.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Learn More */}
			<div className="align-right">
				<a href="services.html" style={{ backgroundColor: 'transparent' }} className="bringer-arrow-link">
					Discover all services
				</a>
			</div>
		</section>
	);
};

export default ServicesSection;
