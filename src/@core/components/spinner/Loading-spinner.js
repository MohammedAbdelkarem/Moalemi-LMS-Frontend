import './spinner.css'
import logo from '@src/assets/images/base/logo.png'
const ComponentSpinner = () => {
  return (
   <div className='fallback-spinner app-loader'>
      <img src={logo} style={{width: '200px', height: '200px'}}/>
      <span class="loader"></span>
   </div>
  )
}
export default ComponentSpinner