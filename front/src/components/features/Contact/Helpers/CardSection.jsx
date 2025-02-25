import { useEffect, useState } from "react";
import { splitter } from "../../../../utils/Splitter"
import Cards from "./Cards"

const CardSection = () => {

    const [selectedData, setSelectedData] = useState({});

    const cardData = [
        {
            id: 0,
            flag: '/assets/img/IND.svg',
            heading: 'Head Office',
            location: 'R.A.K Road, Wadala (West), Mumbai - 400031',
            phone: '+91 9930011856',
            mail: 'info@appnxt.in',
            image: '/assets/img/contact-1.svg'
        },
        {
            id: 1,
            flag: '/assets/img/UK.svg',
            heading: 'Head Office',
            location: 'Colworth Road, Leytonstone, London, E11 1HZ',
            phone: '+91 9930011856',
            mail: 'info@appnxt.in',
            image: '/assets/img/contact-2.svg'
        },
        {
            id: 2,
            flag: '/assets/img/US.svg',
            heading: 'Head Office',
            location: '3500 Granada Ave, Santa Clara, CA, 95051',
            phone: '+91 9930011856',
            mail: 'info@appnxt.in',
            image: '/assets/img/contact-3.svg'
        },
        {
            id: 3,
            flag: '/assets/img/Canada.svg',
            heading: 'Head Office',
            location: '4310 Sherwoodtowne Blvd, Mississauga, Ontario L4Z 2G6',
            phone: '+91 9930011856',
            mail: 'info@appnxt.in',
            image: '/assets/img/contact-4.svg'
        },
        
    ]

useEffect(() => {
    setSelectedData(cardData[0])
}, [])

  return (
    <>
        <div className="container pt-cs">
            <div className="contact">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card-section">
                            <Cards
                                heading={selectedData?.heading}
                                flag={selectedData?.flag}
                                location={selectedData?.location}
                                phone={selectedData?.phone}
                                mail={selectedData?.mail}
                                image={selectedData?.image}
                            />
                            <div className="cs-layout">
                                {
                                    cardData
                                        .filter(value => value.id !== selectedData.id)
                                        .map((value, index) => (
                                        <div className="card-sm" key={index} onClick={() => setSelectedData(value)}>
                                            <div className="top">
                                                <img src={value.flag} alt="" />  
                                                <div className="header">
                                                    <h4>{splitter(value.heading, 0, 1)} <span>{splitter(value.heading, 1)}</span></h4>
                                                </div>
                                            </div>
                                            <div className="flex-cs">
                                                <i class=" fa-solid fa-location-dot" style={{color: '#fff'}} />
                                                <p className="font-sm fs-16 text-start">{value.location}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardSection