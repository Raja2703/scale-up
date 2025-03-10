import { motion } from 'framer-motion';
import Image from 'next/image';

const index = () => {
	return (
		// <!-- Section: Page Title -->
		<section className="backlight-bottom">
			<div className="stg-row stg-bottom-gap-l">
				<div className="stg-col-6 stg-offset-3 align-center">
					<motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }} className="bringer-page-title">
						Get in Touch
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} viewport={{ once: true }} className="bringer-large-text">
						We help businesses of all sizes achieve their goals. We believe every brand, big or small, deserves to shine.
					</motion.p>
				</div>
			</div>
			<motion.div
				style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.4 }}
				viewport={{ once: true }}
				className="bringer-parallax-media"
			>
				<Image className="bringer-lazy" src="/img/inner-pages/contacts01.webp" alt="Get in Touch" style={{ width: '85vw' }} width={100} height={100} />
			</motion.div>
			{/* <!-- .bringer-parallax-media --> */}
		</section>
	);
};

export default index;
