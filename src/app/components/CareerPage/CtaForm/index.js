import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

const index = () => {
	const projectsDone = useMotionValue(0);
	const projectsDoneCount = useTransform(() => Math.round(projectsDone.get()));

	const happyClients = useMotionValue(0);
	const happyClientsCount = useTransform(() => Math.round(happyClients.get()));

	const experience = useMotionValue(0);
	const yearsOfExperience = useTransform(() => Math.round(experience.get()));

	useEffect(() => {
		const projectDoneControls = animate(projectsDone, 450, { duration: 4 });
		const happyClientsControls = animate(happyClients, 150, { duration: 3 });
		const experienceControls = animate(experience, 5, { duration: 3 });

		return () => {
			projectDoneControls.stop();
			happyClientsControls.stop();
			experienceControls.stop();
		};
	}, []);

	return (
		// <!-- Section: CTA Form -->
		<section className="backlight-top is-fullwidth">
			<div className="stg-row stg-valign-middle stg-cta-with-image stg-tp-column-reverse">
				<div className="stg-col-5">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.2 }}
						viewport={{ once: true }}
						className="bringer-offset-image"
						style={{ backgroundColor: 'yellow' }}
					>
						<Image width={100} height={100} style={{ width: '100%', height: '100%' }} src={'/img/cta/contact-section-bg.jpg'} />
					</motion.div>
					<form action="/mail/PHPMailer-master/phpmailer.php" method="post" className="bringer-contact-form bringer-block" data-fill-error="Please, fill out the contact form.">
						<div className="bringer-form-content">
							{/* <!-- Field: Name --> */}
							<label htmlFor="name">Your name</label>
							<input type="text" id="name" name="name" placeholder="Your Name" required />
							{/* <!-- Field: Email --> */}
							<label htmlFor="email">Your email:</label>
							<input type="email" id="email" name="email" placeholder="Your Email" required />
							{/* <!-- Field: Message --> */}
							<label htmlFor="message">Your message:</label>
							<textarea id="message" name="message" placeholder="Your Message" required></textarea>
							{/* <!-- Form Button --> */}
							<button type="submit" value="Send Message">
								Send Message
							</button>
							<div className="bringer-contact-form__response"></div>
						</div>
						<span className="bringer-form-spinner"></span>
					</form>
				</div>
				<div className="stg-col-6 stg-offset-1">
					<div className="bringer-cta-form-content">
						<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }} className="bringer-cta-form-title">
							Let's discuss your next creative project.
						</motion.div>
						<div className="bringer-cta-text">
							<div className="stg-row stg-valign-middle">
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.4, delay: 0.2 }}
									viewport={{ once: true }}
									className="stg-col-2 stg-offset-2 stg-tp-col-1 stg-tp-offset-3 stg-m-col-1 stg-m-offset-2"
								>
									<i className="bringer-cta-icon"></i>
								</motion.div>
								<div className="stg-col-8 stg-tp-col-7 stg-m-col-8 stg-m-offset-1">
									<motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }} className="bringer-large-text">
										We help businesses and professionals showcase their work with tailored digital solutions, enhancing their online presence and impact.
									</motion.p>
								</div>
							</div>
						</div>
						<div className="bringer-cta-counters bringer-grid-3cols bringer-m-grid-3cols">
							{/* <!-- Counter Item --> */}
							<div className="bringer-counter bringer-small-counter">
								<motion.pre style={{ margin: 0 }} className="bringer-counter-number">
									{projectsDoneCount}
								</motion.pre>
								<div className="bringer-counter-label">Projects Done</div>
							</div>
							{/* <!-- .bringer-counter --> */}
							{/* <!-- Counter Item --> */}
							<div className="bringer-counter bringer-small-counter">
								<motion.pre style={{ margin: 0 }} className="bringer-counter-number" data-suffix="+">
									{happyClientsCount}
								</motion.pre>
								<div className="bringer-counter-label">Happy Clients</div>
							</div>
							{/* <!-- .bringer-counter --> */}
							{/* <!-- Counter Item --> */}
							<div className="bringer-counter bringer-small-counter">
								<motion.pre style={{ margin: 0 }} className="bringer-counter-number" data-suffix="+">
									{yearsOfExperience}
								</motion.pre>
								<div className="bringer-counter-label">Years in Work</div>
							</div>
							{/* <!-- .bringer-counter --> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default index;
