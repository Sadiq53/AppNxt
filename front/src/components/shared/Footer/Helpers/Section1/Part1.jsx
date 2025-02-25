import { NavLink } from 'react-router-dom'

const Part1 = () => {
  return (
    <>
        <div className="part1">
            <div>
                <h4 className="font-sm text-start mb-20">
                    COMPANY
                </h4>
                <div className="list">
                    <NavLink className='font-sm text-start fs-16' to='/about'><img src="/assets/img/arrow.svg" alt="" /> &nbsp; ABOUT US</NavLink>
                    <NavLink className='font-sm text-start fs-16' to='/'><img src="/assets/img/arrow.svg" alt="" /> &nbsp; MEMBERS</NavLink>
                    <NavLink className='font-sm text-start fs-16' to='/'><img src="/assets/img/arrow.svg" alt="" /> &nbsp; STORIES</NavLink>
                    <NavLink className='font-sm text-start fs-16' to='/portfolio'><img src="/assets/img/arrow.svg" alt="" /> &nbsp; PROJECTS</NavLink>
                </div>
            </div>
            <p className="font-sm text-start fs-16">2025 All Rights are Reserved</p>
        </div>
    </>
  )
}

export default Part1