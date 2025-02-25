import HeadingStart from "../../../shared/HeadingStyles/HeadingStart";
import {splitter} from '../../../../utils/Splitter'

const Topic = ({ project }) => {

  return (
    <>
        <div className="container pt-cs">
            <div className="row">
            <div className="col-md-12">
                <HeadingStart normal={splitter(project, 1)} normalSize={window.innerWidth >= 767 ? 60 : 30} highlight={splitter(project, 0, 1)} highlightSize={window.innerWidth >= 767 ? 70 : 35} width={window.innerWidth >= 767 ? 70 : 100} />
                
            </div>
            </div>
        </div>
    </>
  )
}

export default Topic