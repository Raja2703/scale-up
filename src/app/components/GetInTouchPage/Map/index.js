import { motion } from 'framer-motion';
import Link from 'next/link';

const index = () => {
	return (
		// <!-- Map -->
		<section>
			{/* <!-- Section Title --> */}
			<div className="stg-row bringer-section-title">
				<div className="stg-col-8 stg-offset-2">
					<div className="align-center">
						<motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>
							Visit our Office
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.3 }}
							viewport={{ once: true }}
							className="bringer-large-text"
							data-delay="100"
						>
							Come visit! We love welcoming potential collaborators into our vibrant space. Schedule a tour and get inspired by our creative energy.
						</motion.p>
					</div>
				</div>
			</div>
			{/* <!-- Contacts Grid --> */}
			<div className="stg-row">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4, delay: 0.2 }}
					viewport={{ once: true }}
					className="stg-col-4 stg-tp-col-6 stg-m-bottom-gap"
				>
					{/* <!-- Phone --> */}
					<div className="bringer-block stg-aspect-square stg-vertical-space-between">
						<Link style={{ backgroundColor: 'transparent' }} href="https://maps.app.goo.gl/WbTG6EKuF9dE1Xuy8" className="bringer-grid-item-link"></Link>
						<div>
							<h5>
								Address<span className="bringer-accent">.</span>
							</h5>
							<h6>4th Floor, Karyathal, near Shyam Tata, above Puma Outlet, Aditya Nagar, Vishnu Puri Colony, Indore, Madhya Pradesh 452014</h6>
						</div>
						<p>Drop by our vibrant office. We'd love to welcome you and share our creative vibe. Let's fuel your vision!</p>
					</div>
				</motion.div>
				<motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }} className="stg-col-8 stg-tp-col-6">
					<iframe
						style={{ width: '100%', height: '100%' }}
						className="bringer-google-map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.102330507246!2d75.85858257625311!3d22.687234228757138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd7ad77498d7%3A0x97105c19c6e9871c!2sScale%20Us%20Technologies%20LLP!5e0!3m2!1sen!2sin!4v1719812455650!5m2!1sen!2sin"
					></iframe>
				</motion.div>
			</div>
		</section>
	);
};

export default index;
