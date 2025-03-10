import Link from 'next/link';
import { motion } from 'framer-motion';

const index = () => {
	const jobOpenings = [
		{
			title: 'Ror Developer',
			experience: '2 to 8 Years',
			location: 'Remote / Work From Home / Hybrid',
			salary: 'As per industry standard / Negotiable',
			link: 'https://www.linkedin.com/company/scale-us-technologies/jobs/',
		},
		{
			title: 'React Native',
			experience: '2 to 8 Years',
			location: 'Remote / Work From Home / Hybrid',
			salary: 'As per industry standard / Negotiable',
			link: 'https://www.linkedin.com/company/scale-us-technologies/jobs/',
		},
		{
			title: 'UI/UX - Figma',
			experience: '1 to 4+ Years',
			location: 'Remote / Work From Home / Hybrid',
			salary: 'As per industry standard / Negotiable',
			link: 'https://www.linkedin.com/company/scale-us-technologies/jobs/',
		},
		{
			title: 'Angular',
			experience: '1 to 4+ Years',
			location: 'Remote / Work From Home / Hybrid',
			salary: 'As per industry standard / Negotiable',
			link: 'https://www.linkedin.com/company/scale-us-technologies/jobs/',
		},
	];

	return (
		<section>
			<div className="align-center stg-bottom-gap-l">
				<motion.h2 className="stg-bottom-gap" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>
					Job Openings
				</motion.h2>
				<motion.p className="bringer-large-text" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} viewport={{ once: true }}>
					{' '}
					Everyone starts from somewhere, seeks development, and strives for new heights #CAREERS 🚀
				</motion.p>
			</div>

			<div className="bringer-grid-2cols">
				{jobOpenings.map((job, index) => (
					<Link key={index} style={{ backgroundColor: 'transparent', padding: 0 }} href={job.link} target="_blank" rel="noopener noreferrer">
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className="bringer-icon-box bringer-block"
						>
							<h4>
								{job.title}
								<span className="bringer-accent">.</span>
							</h4>
							<p className="bringer-large-text" style={{ fontSize: '1.2rem' }}>
								Experience: {job.experience} <br />
								Location: {job.location} <br />
								Salary: {job.salary}
							</p>
						</motion.div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default index;
