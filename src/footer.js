import '../src/css/footer.css'
import {Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
export const Footer = () => {
  return (
    <div>
        <h1 className='stylefooter'>Footer</h1>
        <Link to="/cards">
          <Button> Go to cards </Button>
        </Link>
    </div>
  )
}
export default Footer;