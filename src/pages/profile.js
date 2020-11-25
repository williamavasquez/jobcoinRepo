import { useEffect, useState } from 'react'
import axios from 'axios'
import BalanceComponent from '../components/balance/balance'
import Box from '../components/boxTextandValue/box'
import SendForm from '../components/send/sendForm'

const Profile = (props) => {
  const username = props.match.params.username
  const [userInfo, setUserInfo] = useState({})
  const [error, setError] = useState({})

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

  const sendJobCoins = ({ sendTo, amount }) => {
    const payload = {
      fromAddress: username,
      toAddress: sendTo,
      amount: amount,
    }

    var form = new FormData()
    form.append('json', JSON.stringify(payload))

    axios.post('http://localhost:8000/api/jobcoin/send', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    // fetch('http://localhost:8000/api/jobcoin/send', {
    //   method: 'post',
    //   body: "{ hello: 'jhsjkdhdsk'}",
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => setError({ err }))

    // fetch('http://tranquil-mesa-15283.herokuapp.com/api/jobcoin/send', {
    //   method: 'post',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //   },
    //   body: payload,
    // })
    //   .then((req) => req.json())
    //   .then(function (data) {
    //     console.log('Request succeeded with JSON response', data)
    //   })
    //   .catch(function (error) {
    //     console.log('Request failed', error)
    //   })
  }

  return (
    <div>
      <h1>{username}</h1>
      <Box text='Jobcoin Balance'>
        <BalanceComponent balance={userInfo.balance} />
      </Box>
      <Box text='Send Jobcoin'>
        <SendForm
          balance={userInfo.balance}
          sendJobCoins={sendJobCoins}
          error={error}
        />
      </Box>
    </div>
  )
}

export default Profile
