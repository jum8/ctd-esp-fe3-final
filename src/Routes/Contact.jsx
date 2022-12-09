import React from 'react'
import Form from '../Components/Form'
import { useGlobalStates } from '../Components/utils/global.context'


const Contact = () => {
	const { theme } = useGlobalStates();
  return (
    <div className={`contact ${theme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact