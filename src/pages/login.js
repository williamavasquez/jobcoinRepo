import { useRef } from 'react'
import Logo from '../logo.svg'
import Box from '../components/boxTextandValue/box'

let Styles = {
  mainComponent: {
    display: 'flex',
    alighItems: 'center',
    flexDirection: 'column',
  },
}

function Login(props) {
  console.log(props)
  const textRef = useRef()

  const submitLogin = async (e) => {
    e.preventDefault()

    let address = textRef.current.value
    props.history.push(`profile/${address}`)
  }

  return (
    <div style={Styles.mainComponent}>
      <img src={Logo} alt='logo' />
      <Box text={'Welcome! Sign In With Your Jobcoin Address'}>
        <label htmlFor='jobcoinAddress'>Do you like jobcoinAddress?</label>
        <input type='text' ref={textRef} name='jobcoinAddress' />
        <button onClick={(e) => submitLogin(e)}>Sign In</button>
      </Box>
    </div>
  )
}

export default Login
