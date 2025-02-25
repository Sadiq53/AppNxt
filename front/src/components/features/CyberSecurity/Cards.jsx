
const Card = ({ type, heading, description, image }) => {
    const isMobOrOdd = type === 'mob' || type === 'odd';
    const isEven = type === 'even';

    return (
        <div className={`card-layout ${type}`}>
            {isMobOrOdd && (
                <div className="image">
                    <img src={image} alt="Mob or Odd" />
                </div>
            )}
            <div className="content">
                <h4 className="font-lg text-left fs-68">
                    <span className="fs-82">{heading?.split(' ')[0]}</span> {heading?.split(' ')?.slice(1)?.join(' ')}
                </h4>
                <p className="font-sm">
                    {description}
                </p>
            </div>
            {isEven && (
                <div className="image">
                    <img src={image} alt="Even" />
                </div>
            )}
        </div>
    );
  };
  

const Cards = ({ data }) => {
  return (
    <>
        <section className="pt-cs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="cyber-card-layout">
                            {
                                data?.map((value, index) => (
                                    <Card key={index} heading={value.heading} description={value.description} type={(index+1) % 2 === 0 ? 'even' : 'odd'} image={value.image} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Cards