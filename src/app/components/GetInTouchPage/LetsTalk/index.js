import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const socialLinks = [
	{ href: '#', className: 'bringer-socials-facebook' },
	{ href: '#', className: 'bringer-socials-instagram' },
	{ href: '#', className: 'bringer-socials-x' },
	{ href: '#', className: 'bringer-socials-tiktok' },
	{ href: '#', className: 'bringer-socials-patreon' },
];

const partnerLogos = [
	{ src: '/img/partners/GoogleFeedback.svg', alt: 'Google Feedback' },
	{ src: '/img/partners/Glassdoor.svg', alt: 'Glassdoor' },
	{ src: '/img/partners/GoodFirms.svg', alt: 'GoodFirms' },
	{ src: '/img/partners/Make In India.svg', alt: 'Make In India' },
	{ src: '/img/partners/Scale-Us-Startup-India.svg', alt: 'Scale Us Startup India' },
	{ src: '/img/partners/Great-Place-To-Work.svg', alt: 'Great Place To Work' },
];

const ContactSection = () => {
	return (
		<section className="backlight-top divider-bottom">
			{/* Section Title */}
			<div className="stg-row bringer-section-title">
				<div className="stg-col-8 stg-offset-2">
					<div className="align-center">
						<motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>
							Let's 🗣 talk!
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.3 }}
							viewport={{ once: true }}
							className="bringer-large-text"
							data-delay="100"
						>
							Here's how you can connect with the Scale Us team:
						</motion.p>
					</div>
				</div>
			</div>

			{/* Contacts Grid */}
			<div className="stg-row">
				{/* Phone */}
				<div className="stg-col-4 stg-tp-col-6 stg-tp-bottom-gap">
					{/* <!-- Phone --> */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="bringer-block stg-aspect-square stg-vertical-space-between"
					>
						<Link style={{ backgroundColor: 'transparent' }} href="tel:+12345556789" className="bringer-grid-item-link"></Link>
						<div>
							<h5>
								Phone<span className="bringer-accent">.</span>
							</h5>
							<h6>+91 94257-99077</h6>
						</div>
						<p>Give us a call and chat directly with our friendly team. We're always happy to answer any questions.</p>
					</motion.div>
				</div>

				{/* Email */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					viewport={{ once: true }}
					className="stg-col-4 stg-tp-col-6 stg-tp-bottom-gap"
				>
					<div className="bringer-block stg-aspect-square stg-vertical-space-between">
						<Link style={{ backgroundColor: 'transparent' }} href="mailto:bringer@example.com" className="bringer-grid-item-link"></Link>
						<div>
							<h5>
								Email<span className="bringer-accent">.</span>
							</h5>
							<h6>contact@scaleus.in</h6>
						</div>
						<p>Send us a detailed message. We'll get back to you as soon as possible to discuss your creative project further.</p>
					</div>
				</motion.div>

				{/* Social Media */}
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="stg-col-4 stg-tp-col-12">
					<div className="bringer-block stg-aspect-square stg-tp-aspect-rectangle stg-vertical-space-between">
						<div>
							<h5>
								Social Media<span className="bringer-accent">.</span>
							</h5>
							<ul className="bringer-socials-list stg-small-gap">
								{socialLinks.map((social, index) => (
									<li key={index}>
										<Link style={{ backgroundColor: 'transparent' }} href={social.href} target="_blank" className={social.className}>
											<i></i>
										</Link>
									</li>
								))}
							</ul>
						</div>
						<p>Follow us on Social Media Platforms for a glimpse into our creative world, industry insights, and projects.</p>
					</div>
				</motion.div>
			</div>

			{/* Partner Logos */}
			<div className="bringer-partners partner-section">
				<span className="bringer-label"></span>
				<div className="bringer-grid-6cols bringer-tp-grid-3cols bringer-m-grid-2cols stg-top-gap-s">
					{partnerLogos.map((logo, index) => (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: index * 0.2 }}
							viewport={{ once: true }}
							className="bringer-block bringer-center"
							key={index}
						>
							<Image src={logo.src} alt={logo.alt} width={120} height={80} loading="eager" />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
