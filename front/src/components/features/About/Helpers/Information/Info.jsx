import Part1 from "./Part1"
import Part2 from "./Part2"

const Info = () => {
  return (
    <>
        <div className="container pt-cs">
            <div className="info">
              <div className="row cs-gap-20 align-items-stretch">
                  <div className="col-md-6">
                      <Part1 />
                  </div>
                  <div className="col-md-6">
                      <Part2 />
                  </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Info