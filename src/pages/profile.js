import { useEffect, useState } from 'react'
import BalanceComponent from '../components/balance/balance'
import Box from '../components/boxTextandValue/box'
import SendForm from '../components/send/sendForm'

const Profile = (props) => {
  const username = props.match.params.username
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    fetch(
      `http://jobcoin.gemini.com/debtless-divisibly/api/addresses/${username}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data)
        console.log(data)
      })
  }, [])

  const sendJobCoins = ({sendTo,amount})=>{

    console.log(sendTo)
    console.log(amount)
  }

  return (
    <div>
      <h1>{username}</h1>
      <Box text='Jobcoin Balance'>
        <BalanceComponent balance={userInfo.balance} />
      </Box>
      <Box text='Send Jobcoin'>
        <SendForm balance={userInfo.balance}  sendJobCoins={sendJobCoins} />
      </Box>
    </div>
  )
}

export default Profile
