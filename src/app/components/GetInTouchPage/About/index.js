import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const index = () => {
	return (
		// <!-- Section: About Us -->
		<section>
			{/* <!-- Section Title --> */}
			<div className="stg-row stg-bottom-gap">
				<div className="stg-col-8">
					<motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }} data-split-appear="fade-up">
						Ready to ignite your brand's fire? 🔥 Let's connect! 🤝
					</motion.h2>
				</div>
				<div className="stg-col-4"></div>
			</div>
			{/* <!-- Section Content --> */}
			<div className="stg-row stg-bottom-gap-l">
				<div className="stg-col-6 stg-offset-6" data-delay="200">
					<motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} viewport={{ once: true }}>
						At Scale US, we believe in the power of collaboration and shared passion. We're not just a tech partner; we're dedicated to igniting your brand's unique potential. Whether you're full of
						ideas or just starting out, reach out and let's chat!
					</motion.p>
				</div>
			</div>
			{/* <!-- Grid Galery --> */}
			<div className="bringer-grid-3cols bringer-parallax-media bringer-m-grid-3cols stg-m-small-gap" data-stagger-appear="fade-up" data-delay="200" data-stagger-unload="fade-up">
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
					<Link style={{ backgroundColor: 'transparent' }} href="img/inner-pages/contacts02.webp" className="bringer-lightbox-link" data-size="960x960">
						<Image className="bringer-lazy" src="/img/inner-pages/contacts02.webp" alt="Scale Us" width="960" height="960" />
					</Link>
				</motion.div>
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
					<Link style={{ backgroundColor: 'transparent' }} href="img/inner-pages/contacts03.webp" className="bringer-lightbox-link" data-size="960x960">
						<Image className="bringer-lazy" src="/img/inner-pages/contacts03.webp" alt="Scale Us" width="960" height="960" />
					</Link>
				</motion.div>
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
					<Link style={{ backgroundColor: 'transparent' }} href="img/inner-pages/contacts04.webp" className="bringer-lightbox-link" data-size="960x960">
						<Image className="bringer-lazy" src="/img/inner-pages/contacts04.webp" alt="Scale Us" width="960" height="960" />
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default index;
