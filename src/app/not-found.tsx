import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header/Header'

export default function Home() {
	return (
		<main className={styles.main}>
			<h1
				style={{
					fontWeight: 'normal',
					textAlign: 'center',
					fontSize: '2.5rem',
					marginTop: '1em',
					textTransform: 'uppercase',
				}}
			>
				Page not found
			</h1>
		</main>
	)
}
