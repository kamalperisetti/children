// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'

import Notification from '../Notification'

import './index.css'

class AlertNotification extends Component {
  render() {
    return (
      <div className="container">
        <h1>Alert Notifications</h1>
        <div className="views">
          <Notification>
            <AiFillCheckCircle className="success" />
            <div className="none">
              <h1 className="success">Success</h1>
              <p>You can access all the files in the folder</p>
            </div>
            <GrFormClose />
          </Notification>
        </div>
        <div className="views">
          <Notification>
            <RiErrorWarningFill className="error" />
            <div className="none">
              <h1 className="error">Error</h1>
              <p>
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
            <GrFormClose />
          </Notification>
          <div className="views">
            <Notification>
              <MdWarning className="warning" />
              <div className="none">
                <h1 className="warning">Warning</h1>
                <p>Viewers of this file can see comments and suggestions</p>
              </div>
              <GrFormClose />
            </Notification>
          </div>
        </div>
        <div className="views">
          <Notification>
            <MdInfo className="info" />
            <div className="none">
              <h1 className="info">Info</h1>
              <p>Anyone on the Internet can view these files</p>
            </div>
            <GrFormClose />
          </Notification>
        </div>
      </div>
    )
  }
}
export default AlertNotification
