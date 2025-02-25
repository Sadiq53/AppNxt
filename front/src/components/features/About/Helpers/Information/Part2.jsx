import Counter from "../../../../shared/Counter/Counter"

const Part2 = () => {

    const counters = [
        { value: 40, suffix: "K+", label: "Active Users" },
        { value: 50, suffix: "+", label: "Team Members" },
        { value: 245, suffix: "+", label: "Clients Worldwide" },
        { value: 350, suffix: "+", label: "Projects Completed" },
    ];
    

  return (
    <>
        <div className="part2">
            <div className="image">
                <img src="/assets/img/info-img-2.svg" alt="" />
                <img src="/assets/img/info-img-3.svg" alt="" />
            </div>

            <div>
                <p className="font-sm text-start">We specialize in delivering innovative and result-driven services, transforming ideas into impactful solutions. From custom software development to advanced digital marketing, we empower businesses to thrive in the ever-evolving digital landscape.</p>
            </div>

            <Counter counters={counters} />

            <div className="intro">
                <div className="profiles">
                    <div className="one">
                        <img src="/assets/img/profile-img-1.svg" alt="" />
                    </div>
                    <div className="two">
                        <img src="/assets/img/profile-img-2.svg" alt="" />
                    </div>
                    <div className="three">
                        <img src="/assets/img/profile-img-3.svg" alt="" />
                    </div>
                </div>
                <div className="play-btn">
                    <button>
                    <img src="/assets/img/play-btn.svg" alt="" />
                    </button>
                </div>
                <h4 className="font-md text-start fs-20">
                    WATCH INTRO
                </h4>
            </div>
        </div>
    </>
  )
}

export default Part2