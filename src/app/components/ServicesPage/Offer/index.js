import Link from 'next/link';
import { motion } from 'framer-motion';

const index = () => {
	return (
		// <!-- Section: Offer -->
		<section>
			{/* <!-- Services Grid --> */}
			<div className="bringer-grid-3cols bringer-tp-grid-2cols bringer-tp-stretch-last-item" data-stagger-appear="fade-up" data-stagger-unload="fade-up">
				{/* <!-- Item 01 --> */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className="bringer-block stg-aspect-square stg-vertical-space-between"
				>
					<h5>
						Beyond Surface Solutions<span className="bringer-accent">.</span>
					</h5>
					<p>Empowering Digital Excellence through Innovative Strategies and Expertise.</p>
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
						Beyond just digital solutions<span className="bringer-accent">.</span>
					</h5>
					<p>Empowering Business Success Beyond Digital Solutions.</p>
				</motion.div>
				{/* <!-- Item 03 --> */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					viewport={{ once: true }}
					className="bringer-masked-block bringer-grid-more-masked"
				>
					<div className="bringer-block stg-aspect-square stg-vertical-space-between is-accented bringer-masked-media">
						<h5>
							A brand isn't just a name<span className="bringer-accent">.</span>
						</h5>
						<p className="bringer-large-text">It's a movement. 👉 Let Scale Us ignite it.</p>
					</div>
					<div className="bringer-masked-content at-bottom-right">
						<span className="bringer-square-button is-secondary">
							<span className="bringer-icon bringer-icon-explore"></span>
						</span>
					</div>
					<Link style={{ backgroundColor: 'transparent' }} href="contact-us.html"></Link>
				</motion.div>
			</div>
		</section>
	);
};

export default index;
