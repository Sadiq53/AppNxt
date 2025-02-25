
const HeadingStart = ({ highlight, normal, highlightSize, normalSize, width }) => {
  return (
    <>
        <>
            <div style={{width: `${width}%`}}>
                <h4 className="font-lg text-start" style={{fontSize: `${normalSize}px`}}>
                    <span style={{fontSize: `${highlightSize}px`}}>{highlight} </span>
                    {normal}
                </h4>
            </div>
        </>
    </>
  )
}

export default HeadingStart