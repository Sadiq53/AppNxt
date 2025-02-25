import { NavLink } from 'react-router-dom'

const Part3 = () => {
  return (
    <>
        <div className="part3">
            <div>
                <h4 className={`font-sm mb-20 ${window.innerWidth >= 767 ? 'text-end' : 'text-start'}`}>
                    COMPANY
                </h4>
                <div className="list">
                    <NavLink className='font-sm text-end fs-16' to='/'><img src="/assets/img/arrow.svg" alt="" /> &nbsp; INSTAGRAM</NavLink>
                    <NavLink className='font-sm text-end fs-16' to='/'><img src="/assets/img/arrow.svg" alt="" /> &nbsp; TWITTER</NavLink>
                    <NavLink className='font-sm text-end fs-16' to='/'><img src="/assets/img/arrow.svg" alt="" /> &nbsp; FACEBOOK</NavLink>
                    <NavLink className='font-sm text-end fs-16' to='/'><img src="/assets/img/arrow.svg" alt="" /> &nbsp; DRIBBBLE</NavLink>
                </div>
            </div>
            <p className={`font-sm fs-16 ${window.innerWidth >= 767 ? 'text-end' : 'text-start'}`}>Terms & Condition &nbsp; | &nbsp; Privacy Policy</p>
        </div>
    </>
  )
}

export default Part3