import { motion } from 'framer-motion';

const index = () => {
	return (
		// <!-- Section: What Makes Us Best -->
		<section className="backlight-bottom">
			{/* <!-- Section Title --> */}
			<div className="stg-row bringer-section-title">
				<div className="stg-col-8 stg-offset-2">
					<div className="align-center">
						<motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
							What Makes Us Best
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}
							className="bringer-large-text"
							data-delay="100"
						>
							We are a passionate team at Scale Us who believes in the power of creativity. We empower businesses to establish a compelling online presence that showcases their achievements and
							narratives effectively.
						</motion.p>
					</div>
				</div>
			</div>
			{/* <!-- Content Grid --> */}
			<div className="bringer-grid-2cols bringer-tp-grid-1col" data-stagger-appear="zoom-in" data-stagger-delay="100" data-delay="100">
				{/* <!-- Card Item 01 --> */}
				<motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="bringer-block">
					<h4>
						We don't just design, we <span className="bringer-accent">unleash creative</span> firestorms<span className="bringer-accent">.</span>
					</h4>
					<p>
						At Scale US, we unleash creative firestorms. Our approach goes beyond conventional boundaries to push the limits of innovation. We're passionate about crafting dynamic and transformative
						solutions that inspire, captivate, and drive measurable success for our clients. From conceptualization to execution, we ignite creativity to deliver impactful outcomes that redefine
						possibilities in digital solutions
					</p>
				</motion.div>
				{/* <!-- .bringer-block --> */}
				{/* <!-- Card Item 02 --> */}
				<motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }} className="bringer-block">
					<h4>
						We <span className="bringer-accent">fuel creativity</span> with data, guide passion with precision<span className="bringer-accent">.</span>
					</h4>
					<p>
						At Scale US, we integrate advanced analytics with strategic expertise to ensure our tech solutions are both innovative and meticulously executed. This approach guarantees that our
						solutions not only meet but exceed expectations, delivering impactful results for your business.
					</p>
				</motion.div>
				{/* <!-- .bringer-block --> */}
				{/* <!-- Card Item 03 --> */}
				<motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="bringer-block">
					<h4>
						We craft <span className="bringer-accent">emotional connections</span>, not just visuals and copy<span className="bringer-accent">.</span>
					</h4>
					<p>At Scale US, we create immersive digital experiences that resonate deeply with your audience, leveraging innovative solutions to drive engagement and foster lasting connections.</p>
				</motion.div>
				{/* <!-- .bringer-block --> */}
				{/* <!-- Card Item 04 --> */}
				<motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }} className="bringer-block">
					<h4>
						We don't just work with you, we become your <span className="bringer-accent">tech champions.</span>
					</h4>
					<p>
						At Scale US, we become your tech champions. Our dedicated team goes beyond partnership to champion your technological goals, offering expertise, innovation, and unwavering support.
						Together, we navigate challenges, seize opportunities, and achieve success, ensuring your business thrives in the digital landscape.
					</p>
				</motion.div>
				{/* <!-- .bringer-block --> */}
			</div>
		</section>
	);
};

export default index;
