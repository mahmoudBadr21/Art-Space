import { galleryData } from '../../../public/galleryData'
import './gallery.css'

const Gallery = () => {
  return (
    <div className='gallery container mainPadding'>
      <h3 className="galleryTitle">المعرض الفني</h3>

      <div className="galleryCards flexCenterStart">
        {
          galleryData.map((item) => {
            return(
              <div className="galleryCard" key={item.id}>
                <img src={item.image} alt="" />

                <ul className="cardDetails">
                  {
                    item.details.map((val, index) => {
                      return(
                        <li key={index}>{val}</li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Gallery