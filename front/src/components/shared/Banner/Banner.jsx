
const Banner = ({ bgURL, heading, content }) => {
  return (
    <>
        <div className="global-banner" style={{ backgroundImage: `url(${bgURL})` }}>
            <div className="content">
              <h4 className="font-lg"><span>{heading}</span></h4>
              {
                  content && (
                      <p className="font-sm text-center">{content}</p>
                  )
              }
            </div>
        </div>
    </>
  )
}

export default Banner