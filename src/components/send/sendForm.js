import { useRef } from 'react'

const SendForm = (props) => {
  const destination = useRef(null)
  const amountToBeSent = useRef(null)

  const sendFunc = (e) => {
    e.preventDefault()

    let sendTo = destination.current.value
    let amount = amountToBeSent.current.value
    props.sendJobCoins({ sendTo, amount })

    destination.current.value = ''
    amountToBeSent.current.value = ''
  }
  return (
    <>
      <label htmlFor='destination'>Destination Address</label>
      <input type='text' ref={destination} name='destination' />

      <label htmlFor='amount'>Amount to Send</label>
      <input type='text' ref={amountToBeSent} name='amount' />

      <button onClick={(e) => sendFunc(e)}>Send Jobcoins</button>
    </>
  )
}

export default SendForm
