'use client'; // Ensure this is added if using Next.js App Router

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const TeamSection = () => {
	const teamMembers = [
		{ name: 'Vidhi Chhabra', role: 'VP, Human Resources', image: '/img/team/team04.webp', linkedin: 'https://www.linkedin.com/company/scale-us-technologies/' },
		{ name: 'Jaspal Singh', role: 'Chairman & Director', image: '/img/team/team02.webp', linkedin: 'https://www.linkedin.com/company/scale-us-technologies/' },
		{ name: 'Jasminder Singh', role: 'Founder & CEO', image: '/img/team/team01.webp', linkedin: 'https://www.linkedin.com/in/jasminder-singh-chhabra/' },
		{ name: 'Harjeet Kaur', role: 'Director', image: '/img/team/team03.webp', linkedin: 'https://www.linkedin.com/company/scale-us-technologies/' },
	];

	return (
		<section id="section9">
			{/* Section Title */}
			<div className="stg-row bringer-section-title">
				<div className="stg-col-8 stg-offset-2 stg-tp-col-10 stg-tp-offset-1">
					<div className="align-center">
						<motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
							Meet the Team
						</motion.h2>
						<motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="bringer-large-text">
							We are a team of passionate and experienced professionals at Scale US, dedicated to helping businesses achieve their goals through innovative solutions and expert guidance.
						</motion.p>
					</div>
				</div>
			</div>

			{/* Swiper Carousel */}
			<motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
				<Swiper
					modules={[Pagination]}
					spaceBetween={20}
					slidesPerView={1}
					pagination={{ clickable: true }}
					breakpoints={{
						640: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					className="bringer-carousel"
				>
					{teamMembers.map((member, index) => (
						<SwiperSlide key={index}>
							<div className="bringer-block bringer-carousel-card">
								<div className="bringer-carousel-card-image">
									<Image className="bringer-lazy" src={member.image} alt={member.name} width="600" height="350" />
								</div>
								<div className="bringer-carousel-card-footer">
									<div className="bringer-carousel-card-title">
										<span className="bringer-meta">{member.role}</span>
										<h6>{member.name}</h6>
									</div>
									<span className="bringer-icon bringer-icon-explore" onClick={() => window.open(member.linkedin, '_blank')} style={{ cursor: 'pointer' }}></span>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</motion.div>
		</section>
	);
};

export default TeamSection;
