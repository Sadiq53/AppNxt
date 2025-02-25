import React from 'react'

const Development = () => {


    const Cards = ({ letter, heading, content, icon, key }) => {
        return (
            <div key={key} className="layout">
                <p className="fader">{letter}</p>
                <div className="card">
                    <div className='icon'>
                        <img src={icon} alt="" />
                    </div>
                    <div className="header">
                        <h4>
                            <span>{letter}</span> <br />
                            {heading}
                        </h4>
                    </div>
                    <p className="font-sm fs-15 fw-300 text-center">{content}</p>
                </div>
            </div>
        )
    }

    const cardContent = [
        {
            letter: "A", 
            heading: "Engaging & Interactive",
            content: "Designing captivating user experiences with engaging interfaces to maximize satisfaction, interaction, and meaningful connections.",
            icon: "/assets/img/A.svg"
        },
        {
            letter: "B", 
            heading: "UI Development",
            content: "Creating innovative, user-friendly interfaces for intuitive navigation, enhancing engagement and overall user satisfaction.",
            icon: "/assets/img/B.svg"
        },
        {
            letter: "C", 
            heading: "Up-gradation & maintenance",
            content: "Providing seamless upgrades and proactive maintenance to keep your system optimized, updated, and performing efficiently.",
            icon: "/assets/img/C.svg"
        },
        {
            letter: "D", 
            heading: "Standard Testing",
            content: "Executing thorough testing to ensure high-quality performance, reliability, and functionality of all developed solutions.",
            icon: "/assets/img/D.svg"
        },
        {
            letter: "E", 
            heading: "Definite marketing strategies",
            content: "Implementing targeted marketing strategies to boost visibility, drive growth, and deliver measurable business success.",
            icon: "/assets/img/E.svg"
        },
        {
            letter: "F", 
            heading: "24*7 support services",
            content: "Providing round-the-clock technical support to resolve issues, ensure uptime, and maintain exceptional service quality for all clients.",
            icon: "/assets/img/F.svg"
        },
    ]

  return (
    <>
        <div className="container pt-cs">
            <div className="development-sec">
                <div className="row">
                    <div className="col-md-12">
                        <div className='featured-header'>
                            <h4 className="font-lg"><span>DEVELOPMENT</span> PROCESS</h4>
                            <p className="font-sm text-center">Enthusiastically engage cross-media leadership skills for alternative experiences. Proactively drive vertical systems than intuitive architectures.</p>
                        </div>
                        <div className="body">
                            {
                                cardContent?.map((value, index) => {
                                    return (
                                        <Cards key={index} icon={value?.icon} letter={value?.letter} heading={value?.heading} content={value?.content} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Development