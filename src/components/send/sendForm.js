import { useRef } from 'react'

const SendForm = (props) => {
  const destination = useRef(null)
  const amountToBeSent = useRef(null)

  const sendJobCoins = (e) => {
    e.preventDefault()

    console.log(props)
  }

  return (
    <>
      <label htmlFor='destination'>Destination Address</label>
      <input type='text' ref={destination} name='destination' />

      <label htmlFor='amount'>Amount to Send</label>
      <input type='text' ref={amountToBeSent} name='amount' />

      <button onClick={(e) => sendJobCoins(e)}>Send Jobcoins</button>
    </>
  )
}

export default SendForm
