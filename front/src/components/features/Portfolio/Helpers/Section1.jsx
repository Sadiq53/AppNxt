
const Section1 = ({ bg, img, padding, imgHeight, objectFit }) => {
  return (
    <>
        <div className="portfolio"
            style={{ backgroundColor: `#${bg}`, padding: padding !== 0 ? padding : 0  }}
        >
            <img src={img} style={{ height: `${imgHeight}px`, objectFit: objectFit ? objectFit : 'cover' }} alt="" />
        </div>
    </>
  )
}

export default Section1