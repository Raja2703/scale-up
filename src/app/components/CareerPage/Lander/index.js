import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const index = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});

	const scale = useTransform(scrollYProgress, [0, 1], [0.3, 2]);
	const height = useTransform(scrollYProgress, [0, 1], ['80%', '100%']);

	return (
		<div>
			<section className="backlight-bottom">
				{/* <!-- Section Title --> */}
				<div className="stg-row stg-bottom-gap-l">
					<div className="stg-col-8">
						<motion.h1 className="stg-bottom-gap" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>
							🚀 Ignite Your Future with Scale Us
						</motion.h1>
					</div>
					{/* <div className="stg-col-4"></div> */}
				</div>
			</section>
			{/* <!-- Section Image --> */}
			<section>
				<motion.div style={{ scale, height }} transition={{ duration: 0.6, delay: 0.4 }} className="bringer-expand-on-scroll">
					<Image width={100} height={100} style={{ borderRadius: '3rem' }} src="/img/inner-pages/about-us.webp" alt="Testimonials" />
				</motion.div>

				{/* <!-- Section Content --> */}
			</section>
		</div>
	);
};

export default index;
