import Image from 'next/image';
import { motion } from 'framer-motion';

const index = () => {
	return (
		// <!-- Section: Details -->
		<section className="backlight-both">
			{/* <!-- Section Title --> */}
			<div className="align-center stg-bottom-gap-l">
				<motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
					Here's how we take your brand <br />
					from spark to wildfire
				</motion.h2>
				<p className="bringer-large-text"></p>
			</div>
			{/* <!-- Details 01 Row --> */}
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.4, delay: 0.2 }}
				viewport={{ once: true }}
				className="stg-row stg-bottom-gap stg-valign-middle stg-m-bottom-gap-l"
			>
				<div className="stg-col-3 stg-offset-3 stg-tp-col-6 stg-m-bottom-gap">
					<div className="bringer-parallax-media">
						<Image className="bringer-lazy" src="/img/inner-pages/old img/service-details01.jpg" alt="Branding 01" width="960" height="960" />
					</div>
				</div>
				<div className="stg-col-6 stg-tp-col-6">
					<span className="bringer-label">Step 01</span>
					<h4>Discovery & Strategy</h4>
					<p>We begin by understanding your goals and crafting a strategic roadmap tailored to your business needs.</p>
				</div>
			</motion.div>
			{/* <!-- Details 02 Row --> */}
			<motion.div
				initial={{ opacity: 0, x: 20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.4, delay: 0.2 }}
				viewport={{ once: true }}
				style={{ justifyContent: 'flex-start' }}
				className="stg-row stg-bottom-gap stg-valign-middle stg-tp-row-reverse stg-m-bottom-gap-l"
			>
				<div className="stg-col-3 stg-tp-col-6 stg-m-bottom-gap">
					<div className="bringer-parallax-media">
						<Image className="bringer-lazy" src="/img/inner-pages/old img/service-details02.jpg" alt="Branding 02" width="960" height="960" />
					</div>
				</div>
				<div className="stg-col-6 stg-tp-col-6">
					<span className="bringer-label">Step 02</span>
					<h4>Design & Development</h4>
					<p>Our team brings your vision to life with creative design and robust development, ensuring every detail aligns with your brand identity.</p>
				</div>
				{/* <div className="stg-col-3"><!-- Empty Column --></div> */}
			</motion.div>
			{/* <!-- Details 03 Row --> */}
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.4, delay: 0.2 }}
				viewport={{ once: true }}
				className="stg-row stg-bottom-gap stg-valign-middle stg-m-bottom-gap-l"
			>
				<div className="stg-col-3 stg-offset-3 stg-tp-col-6 stg-m-bottom-gap">
					<div className="bringer-parallax-media">
						<Image className="bringer-lazy" src="/img/inner-pages/old img/service-details03.jpg" alt="Branding 03" width="960" height="960" />
					</div>
				</div>
				<div className="stg-col-6 stg-tp-col-6">
					<span className="bringer-label">Step 03</span>
					<h4>Testing & Quality Assurance</h4>
					<p>Rigorous testing guarantees a flawless product, meeting high standards for performance and reliability.</p>
				</div>
			</motion.div>
			{/* <!-- Details 04 Row --> */}
			<motion.div
				initial={{ opacity: 0, x: 20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.4, delay: 0.2 }}
				viewport={{ once: true }}
				style={{ justifyContent: 'flex-start' }}
				className="stg-row stg-bottom-gap stg-valign-middle stg-tp-row-reverse stg-m-bottom-gap-l"
			>
				<div className="stg-col-3 stg-tp-col-6 stg-m-bottom-gap">
					<div className="bringer-parallax-media">
						<Image className="bringer-lazy" src="/img/inner-pages/old img/service-details04.jpg" alt="Step  04" width="960" height="960" />
					</div>
				</div>
				<div className="stg-col-6 stg-tp-col-6">
					<span className="bringer-label">Step 04</span>
					<h4>Deployment & Integration</h4>
					<p>Efficient deployment and seamless integration ensure your solution works seamlessly within your existing infrastructure.</p>
				</div>
				{/* <div className="stg-col-3"><!-- Empty Column --></div> */}
			</motion.div>
			{/* <!-- Details 05 Row --> */}
			<motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }} className="stg-row stg-valign-middle">
				<div className="stg-col-3 stg-offset-3 stg-tp-col-6 stg-m-bottom-gap">
					<div className="bringer-parallax-media">
						<Image className="bringer-lazy" src="/img/inner-pages/old img/service-details05.jpg" alt="Step  05" width="960" height="960" />
					</div>
				</div>
				<div className="stg-col-6 stg-tp-col-6">
					<span className="bringer-label">Branding 05</span>
					<h4>Optimization & Supportt</h4>
					<p>Post-launch, we optimize performance, provide ongoing support, and refine strategies to fuel your brand's continuous growth and success.</p>
				</div>
			</motion.div>
		</section>
	);
};

export default index;
