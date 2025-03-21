import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata = {
	title: 'Internal Accessibility WCAG Audit Guide',
	description:
		'A step-by-step guide to conducting internal accessibility WCAG audits for customers',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='bg-white text-gray-900'>{children}</body>
		</html>
	)
}
