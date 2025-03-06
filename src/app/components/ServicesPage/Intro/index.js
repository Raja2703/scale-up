import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const index = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});

	const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const height = useTransform(scrollYProgress, [0, 1], ['80%', '100%']);

	return (
		// <!-- Section: Intro -->
		<section>
			{/* <!-- Section Image --> */}
			<div ref={ref} style={{ overflow: 'hidden' }}>
				<motion.div style={{ scale, height }} transition={{ duration: 0.6, delay: 0.4 }}>
					<Image style={{ borderRadius: '2rem' }} width={1200} height={1200} src="img/feature-scaleus3.svg" alt="Testimonials" />
				</motion.div>
			</div>
			<br />
			<br />
			<br />

			{/* <!-- Section Title --> */}
			<div className="stg-row stg-bottom-gap">
				<div className="stg-col-6">
					<motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="stg-bottom-gap">
						Discover the spark ✨ with Scale Us Services.
					</motion.h2>
				</div>
				<div className="stg-col-6"></div>
			</div>

			{/* <!-- Section Content --> */}
			<div className="stg-row stg-tp-column-reverse">
				<div className="stg-col-6 stg-valign-bottom">
					<motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="align-right">
						<Link href="contact-us.html" className="bringer-icon-link" style={{ backgroundColor: 'transparent' }}>
							<div className="bringer-icon-link-content">
								<h6>
									Unleash your
									<br />
									Brand's potential
								</h6>
								<span className="bringer-label">Contact Us Now</span>
							</div>
							<div className="bringer-icon-wrap">
								<i className="bringer-icon bringer-icon-explore"></i>
							</div>{' '}
						</Link>

						{/* <!-- .bringer-icon-link --> */}
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className="stg-col-6 stg-tp-col-9 stg-tp-bottom-gap"
				>
					<p className="bringer-large-text">
						Unleash your brand's full potential with Scale Us. We provide the fuel, the spark, and the expert guidance to watch your brand captivate the world. Explore our services and discover how
						Scale Us can help you achieve your goals.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default index;
