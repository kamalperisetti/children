// Write your code here
import './index.css'

const Notification = props => {
  const {children} = props
  console.log(children)
  return <h1 className="social-button">{children}</h1>
}

export default Notification
