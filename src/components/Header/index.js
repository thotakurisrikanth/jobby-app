import {Link, withRouter} from 'react-router-dom'
import {ImHome} from 'react-icons/im'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import './index.css'

const websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-container">
      <ul className="header-ul-container">
        <div>
          <li className="logo-container">
            <Link className="link" to="/">
              <img className="logo" src={websiteLogo} alt="website logo" />
            </Link>
          </li>
        </div>
        <div>
          <li className="home-jobs-container">
            <Link className="link" to="/">
              <ImHome className="home-icon" />
              <h1 className="nav-text">Home</h1>
            </Link>
          </li>
        </div>
        <div>
          <li>
            <Link className="link" to="/jobs">
              <h1 className="nav-text">Jobs</h1>
              <button type="button" className="home-jobs-btn">
                Jobs
              </button>
            </Link>
          </li>
        </div>
        <div>
          <li>
            <FiLogOut className="home-icon" onClick={onClickLogout} />
            <button
              type="button"
              className="btn-logout"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
