'use client'

// import styles from './page.module.css'
import Link from 'next/link'
import x from '@/app/styles/app.module.css'
import y from '@/app/styles/abc.module.css'
import Container from 'react-bootstrap/Container';


export default function Home() {

  return (
    <>
      <Container>
        <ul>
          <li >
            <Link href="/facebook" className={x['red']}>Facebook</Link>
          </li>
          <li style={{ margin: "20px 0" }}>
            <Link href="/youtube" className={y['red']}> Youtube </Link>
          </li>
          <li>
            <Link href="/tiktok">Tiktok</Link>
          </li>
        </ul>
      </Container>
    </>
  )
}
