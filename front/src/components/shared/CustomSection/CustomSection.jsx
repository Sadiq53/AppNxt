import Section1 from './Helpers/Section1/Section1'
import Section2 from './Helpers/Section2/Section2'
import Section3 from './Helpers/Section3/Section3'

const CustomSection = ({ hide }) => {


    const Lyout = () => {
        return (
            <>
                {hide !== "top" && (
                    <div className="section-1">
                        <Section1 />
                    </div>
                )}
                {hide !== "center" && (
                    <div className="section-2">
                        <Section2 />
                    </div>
                )}
                {hide !== "bottom" && (
                    <div className="section-3">
                        <Section3 />
                    </div>
                )}
            </>
        );
    };

  return (
    <>
        <div className="cs-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        

                        {<Lyout />}

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CustomSection