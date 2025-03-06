import React from 'react';
import { motion } from 'framer-motion';

const index = () => {
	return (
		<section className="backlight-bottom">
			<div className="stg-row">
				<div className="stg-col-6 stg-offset-3 align-center stg-tp-col-10 stg-tp-offset-1">
					<motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }} className="bringer-page-title">
						About Us
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }} viewport={{ once: true }} className="bringer-large-text">
						We are a passionate team at Scale US, dedicated to harnessing the power ✨ of creativity through innovative technology solutions.
					</motion.p>
				</div>
			</div>
		</section>
	);
};

export default index;
