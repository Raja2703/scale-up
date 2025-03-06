import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const index = () => {
	return (
		// <!-- Section: Grid CTA -->
		<section className="backlight-top">
			<div className="bringer-bento-grid bringer-grid-cta">
				<div className="is-large bringer-masked-block">
					<div className="bringer-grid-cta-media bringer-masked-media" loading="lazy">
						<motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} style={{ position: 'relative' }}>
							<Image width={100} height={100} src={'/img/box.svg'} />
							<div style={{ position: 'absolute', top: 0, margin: '3rem' }} className="bringer-grid-cta-heading">
								Need to amplify your voice?
							</div>
						</motion.div>
					</div>
					<div className="bringer-masked-content at-bottom-right">
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}
							className="bringer-large-text"
							data-delay="100"
						>
							Let's chat about your goals &rarr;
						</motion.p>
					</div>
				</div>
				<motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="is-medium bringer-block">
					<h3>We develop solutions that make the world listen.</h3>
				</motion.div>
				<motion.div initial={{ opacity: 0, scale: 1.25 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="is-small">
					<Image width={100} height={100} src="/img/IMG_1546 1.svg" alt="Let's Chat" />
				</motion.div>
				<motion.div initial={{ opacity: 0, scale: 1.25 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="is-small">
					<Image width={100} height={100} src="/img/Layer_1 (1).svg" alt="Let's Chat" />
				</motion.div>
			</div>
		</section>
	);
};

export default index;
