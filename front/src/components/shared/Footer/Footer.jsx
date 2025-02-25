import Section1 from "./Helpers/Section1/Section1"
import Section2 from "./Helpers/Section2/Section2"

const Footer = () => {
  return (
    <>
        <div className="footer-main pt-cs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Section1 />
                    </div>
                </div>
            </div>
            <Section2 />
        </div>
    </>
  )
}

export default Footer