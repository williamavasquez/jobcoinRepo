import './box.css'

const Box = ({ text, children }) => {
  return (
    <div className={'boxContainer'}>
      <div className={'textDiv'}>
        <h1>{text}</h1>
      </div>
      <div className={'childrenDiv'}>{children}</div>
    </div>
  )
}

export default Box
