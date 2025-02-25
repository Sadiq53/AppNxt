const Card = ({ type, heading, description, button, image }) => {
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
                <h4 className="font-lg fs-68">
                    <span className="fs-82">{heading?.split(' ')[0]}</span> {heading?.split(' ')[1]}
                </h4>
                <p className="font-sm">
                    {description}
                </p>
                <button className="connect-btn">
                    {button} <img src="/assets/img/arrow.svg" alt="Arrow" />
                </button>
            </div>
            {isEven && (
                <div className="image">
                    <img src={image} alt="Even" />
                </div>
            )}
        </div>
    );
  };
  
  export default Card;
  