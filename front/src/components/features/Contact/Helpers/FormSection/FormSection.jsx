import HeadingStart from '../../../../shared/HeadingStyles/HeadingStart'


const FormSection = () => {
  return (
    <>
        <div className="container pt-cs">
            <div className="contact">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-section">
                            <div className='header'>
                                <HeadingStart
                                    width={100} 
                                    highlight={`We're Always Ready to Help You`} 
                                    highlightSize={window.innerWidth >= 767 ? 92 : 45} 
                                    normal={'& Answer Your Questions'} 
                                    normalSize={window.innerWidth >= 767 ? 82 : 40} 
                                    />
                            </div>
                            <div className="form-card">
                                <div className="w-100 grid-cs">
                                    <input type="text" placeholder='First Name*' />
                                    <input type="text" placeholder='Last Name*' />
                                </div>
                                <input type="text" placeholder='Email*' />
                                <input type="text" placeholder='Phone Number*' />
                                <textarea name="" placeholder='How can we help you ?*' rows={5} id=""></textarea>
                                <button>Get in Touch</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FormSection