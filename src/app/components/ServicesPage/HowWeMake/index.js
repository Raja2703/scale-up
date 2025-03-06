import { motion } from 'framer-motion';

const index = () => {
	return (
		// <!-- Section: How We Make -->
		<section className="divider-top">
			{/* <!-- Section Title --> */}
			<div className="stg-row stg-bottom-gap-l">
				<div className="stg-col-6 stg-offset-3 align-center">
					<motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
						Here's how we make brand magic accessible
					</motion.h2>
				</div>
			</div>
			{/* <!-- Services Grid --> */}
			<div className="bringer-grid-3cols bringer-tp-grid-2cols bringer-tp-stretch-last-item" data-stagger-appear="fade-up" data-delay="100" data-stagger-unload="fade-up">
				{/* <!-- Item 01 --> */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className="bringer-block stg-aspect-square stg-vertical-space-between"
				>
					<h5>
						Transparent pricing<span className="bringer-accent">.</span>
					</h5>
					<p className="bringer-large-text bringer-tp-normal-text">Upfront pricing models with detailed breakdowns, so you know exactly where it goes.</p>
				</motion.div>
				{/* <!-- Item 02 --> */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className="bringer-block stg-aspect-square stg-vertical-space-between"
				>
					<h5>
						Customizable packages<span className="bringer-accent">.</span>
					</h5>
					<p className="bringer-large-text bringer-tp-normal-text">No cookie-cutter plans. We craft solutions that perfectly match your resources.</p>
				</motion.div>
				{/* <!-- Item 03 --> */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					viewport={{ once: true }}
					className="bringer-block stg-aspect-square stg-vertical-space-between"
				>
					<h5>
						Scalable support<span className="bringer-accent">.</span>
					</h5>
					<p className="bringer-large-text">Whether you're a startup or an established brand, we offer services that grow with you.</p>
				</motion.div>
			</div>
		</section>
	);
};

export default index;
