import styles from './page.module.css'
import Form from '../components/form/form'

export default function Home() {
  return (
    <>
    <main className={styles.container}>

      <div className={styles.content}>
        <Form />
        <img  
        src='/assets/images/illustration-sign-up-desktop.svg'
        srcSet='/assets/images/illustration-sign-up-mobile.svg 375w,
        /assets/images/illustration-sign-up-desktop.svg 400w'
        sizes='(max-width:678px) 375px, (max-width: 1440px) 380px '
        className={styles.imageResponsive}
        alt="logo"
        />

        
      </div>

    </main>
    </>
  )
}
