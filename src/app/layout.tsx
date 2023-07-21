import NavBar from '@/components/Nav/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import CartContextProvider from '@/context/CartContextProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import AuthContextProvider from '@/context/AuthContextProvider'
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
	title: 'Soyami - Soy Candles',
	description: 'Soy candles made with heart',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<CartContextProvider>
					<ToastContainer></ToastContainer>
					<AuthContextProvider>
						<NavBar></NavBar>
						{children}
					</AuthContextProvider>
				</CartContextProvider>
			</body>
		</html>
	)
}
