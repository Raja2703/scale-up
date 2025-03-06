'use client';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body id="bringer-main">
				<Navbar />
				<div style={{ marginTop: '100px' }}>{children}</div>
				<div style={{ width: '100vw' }}>
					<Footer />
				</div>
			</body>
		</html>
	);
}
