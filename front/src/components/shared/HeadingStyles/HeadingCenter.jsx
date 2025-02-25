
const HeadingCenter = ({ highlight, normal, highlightSize, normalSize, description, headingRef, descriptionRef }) => {
  return (
    <>
        <div className="featured-header" >
            <h4 className="font-lg" ref={headingRef} style={{fontSize: `${normalSize}px`}}>
                <span style={{fontSize: `${highlightSize}px`}}>{highlight}</span> {normal}
            </h4>
            <p className="font-sm text-center" ref={descriptionRef}>
                {description}
            </p>
        </div>
    </>
  )
}

export default HeadingCenter