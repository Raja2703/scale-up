import React from 'react';
import { motion } from 'framer-motion';

const index = () => {
	return (
		<section className="backlight-bottom">
			<div className="stg-row">
				<div className="stg-col-6 stg-offset-3 align-center stg-tp-col-10 stg-tp-offset-1">
					<motion.p
						style={{ fontSize: '5rem', fontWeight: '700', color: 'white', marginBottom: '3rem' }}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						viewport={{ once: true }}
						className="bringer-page-title"
					>
						Our Services
					</motion.p>
					<motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }} viewport={{ once: true }} className="bringer-large-text">
						We offer a wide ↔ range of creative services to help businesses of all sizes achieve 🏆 their goals.{' '}
					</motion.p>
				</div>
			</div>
		</section>
	);
};

export default index;
