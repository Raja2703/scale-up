import Image from 'next/image';
import Link from 'next/link';

const navbar = () => {
	return (
		<header id="bringer-header" className="is-frosted is-sticky">
			{/* <!-- Desktop Header --> */}
			<div className="bringer-header-inner">
				{/* <!-- Header Logo --> */}
				<div className="bringer-header-lp">
					<Link href="/" className="bringer-logo" style={{ backgroundColor: 'transparent' }}>
						{' '}
						<Image src={'/img/Scale-Us-Logo.svg'} alt="Scale-Us-Logo" width={'200'} height={'88'} />{' '}
					</Link>
				</div>
				{/* <!-- Main Menu --> */}
				<div className="bringer-header-mp">
					<nav className="bringer-nav">
						<ul className="main-menu">
							<li className="current-menu-parent">
								<Link href="https://scaleus.in/" style={{ backgroundColor: 'transparent' }}>
									Home
								</Link>
							</li>
							<li>
								<Link href="/about" style={{ backgroundColor: 'transparent' }}>
									About Us
								</Link>
							</li>
							<li>
								<Link href="/services" style={{ backgroundColor: 'transparent' }}>
									Services
								</Link>
								<ul className="sub-menu">
									<li>
										<Link href="/services" style={{ backgroundColor: 'transparent' }}>
											Website Development
										</Link>
									</li>
									<li>
										<Link href="/services" style={{ backgroundColor: 'transparent' }}>
											App Development
										</Link>
									</li>
									<li>
										<Link href="/services" style={{ backgroundColor: 'transparent' }}>
											SEO
										</Link>
									</li>
									<li>
										<Link href="/services" style={{ backgroundColor: 'transparent' }}>
											UI/UX
										</Link>
									</li>
									<li>
										<Link href="/services" style={{ backgroundColor: 'transparent' }}>
											Staff Augmentation
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href="https://simplytapit.in" style={{ backgroundColor: 'transparent' }}>
									Products
								</Link>
								<ul className="sub-menu">
									<li>
										<Link href="https://ai.scaleus.in" style={{ backgroundColor: 'transparent' }}>
											Ultimate AI
										</Link>
									</li>
									<li>
										<Link href="https://simplytapit.in" style={{ backgroundColor: 'transparent' }}>
											Simply Tap It
										</Link>
									</li>
									<li>
										<Link href="https://people.scaleus.in" style={{ backgroundColor: 'transparent' }}>
											People Hub
										</Link>
									</li>
									<li>
										<Link href="https://shop.scaleus.in" style={{ backgroundColor: 'transparent' }}>
											e-Commerce Store
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href="/portfolio" style={{ backgroundColor: 'transparent' }}>
									Portfolio
								</Link>
							</li>
							<li>
								<Link href="/career" style={{ backgroundColor: 'transparent' }}>
									Careers
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				{/* <!-- Header Button --> */}
				<div className="bringer-header-rp">
					<Link href="contact-/us" className="bringer-button">
						Get in Touch
					</Link>
				</div>
			</div>
			{/* <!-- Mobile Header --> */}
			<div className="bringer-mobile-header-inner">
				<Link href="https://scaleus.in/" className="bringer-logo">
					{' '}
					<Image src={'/img/Scale-Us-Logo.svg'} alt="Scale Us Logo" width="150" height="30" />{' '}
				</Link>
				<Link href="#" className="bringer-mobile-menu-toggler" aria-label="Toggle mobile menu">
					<i className="bringer-menu-toggler-icon">
						{' '}
						<span></span> <span></span> <span></span>{' '}
					</i>
				</Link>
			</div>
		</header>
	);
};

export default navbar;
