import {useRef} from 'react'
import Logo from '../logo.svg'

let Styles = {
  mainComponent : {
    display: "flex",
    alighItems: "center",
    backgroundColor: "red"
  },
  loginContainer: {
    border: "solid 3px lightgray ",
    borderRadius: "20px"
  }
}

function Login(){
  const textRef = useRef()


  const submitLogin = (e)=>{
    e.preventDefault()

    console.log(textRef.current.value)
  }
  return (
  <div style={Styles.mainComponent}>
    <img src={Logo} alt="logo" />
    <div style={Styles.loginContainer}>
      <div>
        Welcome! Sign In With Your Jobcoin Address
      </div>
      <div>
      <label htmlFor="jobcoinAddress">Do you like jobcoinAddress?</label>
      <input type="text" ref={textRef} name="jobcoinAddress" id="cheese" />
      <button onClick={(e)=>submitLogin(e)}>Submit</button>
      </div>
    </div>
  </div>
    )
}

export default Login