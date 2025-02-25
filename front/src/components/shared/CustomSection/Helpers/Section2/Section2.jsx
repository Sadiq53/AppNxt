import Part2 from "./Part2"
import Part1 from "./Part1"
import Counter from "../../../Counter/Counter"

const Section2 = () => {

  const counters = [
    { value: 12, suffix: "+", label: "Years of Excellence" },
    { value: 500, suffix: "+", label: "Satisfied Clients" },
    { value: 700, suffix: "+", label: "Projects Delivered" },
    { value: 10, suffix: "+", label: "Industry Recognitions" },
  ];

  return (
    <>
        <div className="container pt-cs">
            <div className="row">
                <div className="col-md-12">
                  <div className="body">
                    <Part1 />
                    <Part2 />
                  </div>
                  <Counter counters={counters} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Section2