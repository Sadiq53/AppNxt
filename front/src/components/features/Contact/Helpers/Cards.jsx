import { splitter } from '../../../../utils/Splitter'

const Cards = ({ flag, heading, location, phone, mail, image }) => {
  return (
    <>
        <div className="cards">
            <div className="banner-sec">
                <div className="overlay"></div>
                <img src={image} alt="" />
            </div>
            <div className="content-sec">
                <div className="flag">
                    <img src={flag} alt="" />
                </div>
                <div className="header">
                    <h4>{splitter(heading, 0, 1)} <span>{splitter(heading, 1)}</span></h4>
                </div>
                <div className="content">
                    <div>
                        <i class=" fa-solid fa-location-dot" style={{color: '#fff'}} />
                        <p className="font-sm fs-16 text-start">{location}</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-phone" style={{color: '#fff'}} />
                        <p className="font-sm fs-16 text-start">{phone}</p>
                    </div>
                    <div>
                    <i class="fa-solid fa-envelope" style={{color: '#fff'}} />
                        <p className="font-sm fs-16 text-start">{mail}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards