"use client"
import styles from './form.module.css'
import Image from 'next/image'
import { useState } from 'react'



function Form() {

  const [valueInputEmail, setValueInputEmail] = useState('')
  const [statusForm, setStatusForm] = useState(true)

  const send = (e: any) => {
    e.preventDefault()
    

    if(valueInputEmail !=''){

      if(valueInputEmail.includes('@') && valueInputEmail.includes('.com')) {
        setValueInputEmail('')
        setStatusForm(true)
        alert('email Válido!')
      } else {
        setStatusForm(false)
      }

    } else {
      setStatusForm(false)
    }
    

   
    
  }



 
  return (
    <div className={styles.container}>
          <h1>Stay Updated!</h1>
          <span>Join 60,00+ product managers receiving monthly updates on:</span>
          <ul>
            <li>
              <Image src="/assets/images/icon-list.svg" alt='check' width={16} height={16} />
              <span>Product discovery and building what matters</span>
            </li>
            <li>
              <Image src="/assets/images/icon-list.svg" alt='check' width={16} height={16} />
              <span>Measuring to ensure updates are a success</span>
            </li>
            <li>
              <Image src="/assets/images/icon-list.svg" alt='check' width={16} height={16} />
              <span>And much more!</span>
            </li>

          </ul>

          <form className={styles.form} action='/' onSubmit={(e)=>send(e)} >
              <label>
                <span>Email address</span>
                {statusForm ? <></> : <span className={styles.alertInvalidEmail}>Valid email required</span>}
              </label>
                <input  
                  id='email' 
                  type='text' 
                  className={statusForm ? `${styles.inputEmail}` : `${styles.inputEmail} ${styles.invalidInput}`} 
                  
                  placeholder="ash@loreycompany.com" 
                  value={valueInputEmail} 
                  onChange={(event)=> setValueInputEmail(event.target.value)}
                  required />

                <button  className={styles.inputSend} >Subscribe to monthly newsletter</button>
          </form>
    </div>
  )
}

export default Form