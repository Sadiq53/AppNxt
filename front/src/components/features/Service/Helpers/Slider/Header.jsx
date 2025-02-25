
const Header = () => {
  return (
    <> 
        <div className="header">
            <div className="content">
                <div>
                    <img src="/assets/img/vertical-line.svg" alt="" />
                </div>
                <div>
                    <h4 className="font-lg text-start">
                        <span>Our PHP</span> Development Services
                    </h4>
                    <p className="font-sm text-start">We engineer custom, cost-effective software, optimizing information management to deliver unique, high-quality, enterprise-specific, and practical solutions.</p>
                </div>
            </div>
            <div className="arrow-button">
                <button><i class="fa-solid fa-xl fa-arrow-left" style={{color: '#fff'}} /></button>
                <button><i class="fa-solid fa-xl fa-arrow-right" style={{color: '#fff'}} /></button>
            </div>
        </div>
    </>
  )
}

export default Header