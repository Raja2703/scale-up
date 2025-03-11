import React from 'react';
import { motion } from 'framer-motion';

const index = () => {
	return (
		<section className="backlight-bottom">
			<div className="stg-row" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<div style={{ margin: 0, alignItems: 'center' }} className="stg-col-6 stg-offset-3 align-center stg-tp-col-10 stg-tp-offset-1">
					<motion.p
						style={{ fontSize: '5rem', fontWeight: '700', color: 'white', lineHeight: 1 }}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						viewport={{ once: true }}
						className="bringer-page-title"
					>
						Scale Us Portfolio
					</motion.p>
					<motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }} viewport={{ once: true }} className="bringer-large-text">
						Where Creative Sparks Ignite Branding Revolutions.
					</motion.p>
				</div>
			</div>
		</section>
	);
};

export default index;
