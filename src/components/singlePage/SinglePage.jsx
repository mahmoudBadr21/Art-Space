import { useEffect, useState } from 'react'
import './singlePage.css'
import '../home/home.css'
import { useParams, Link } from 'react-router-dom'
import { homeDataArtisits } from '../../../public/data'

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    const item = homeDataArtisits.find((item) => item.id === parseInt(id))
    window.scrollTo(0, 0)
    if (item) {
      setItem(item)
    }
  }, [id])
  return (
    <>
      {
        item ? (
          <div className="singlePage container mainPadding">
            <div className="sinInfo flexCenterSpace">
              <div className="sinPageImage">
                <img src={item.image} alt="" />
              </div>

              <div className="sinPageText">
                <div className="sinPageTextCV">
                  <h4 className="sinTitle">السيرة الذاتية</h4>

                  <p>
                    <span className='sinLable'>الاسم: </span>
                    <span>{item.name}</span>
                  </p>
                  <p>
                    <span className='sinLable'>الجنسيه: </span>
                    <span>{item.nationality}</span>
                  </p>
                  <p>
                    <span className='sinLable'>المهنه: </span>
                    <span>{item.job}</span>
                  </p>
                  <p>
                    <span className='sinLable'>مكان الاقامه: </span>
                    <span>{item.place}</span>
                  </p>
                </div>

                <div className="sinPageTextEduca">
                  <h4 className="sinTitle">التعليم</h4>

                  <p>
                    <span className='sinLable'>كليه: </span>
                    <span>{item.university}</span>
                  </p>
                  <p>
                    <span className='sinLable'>التخصص: </span>
                    <span>{item.specialty}</span>
                  </p>
                  <p>
                    <span className='sinLable'>سنه التخرج: </span>
                    <span>{item.graduationYear}</span>
                  </p>
                  <p>
                    <span className='sinLable'>الدورات: </span>
                    <span>{item.courses}</span>
                  </p>
                </div>

                <div className="sinPageTextExper">
                  <h4 className="sinTitle">الخبرات المهنية</h4>

                  {
                    item.experience.map((value) => {
                      return (
                        <p key={value.id}>
                          <span className='sinLable'>{value.expName}: </span>
                          <span>{value.expCaption}</span>
                        </p>
                      )
                    })
                  }
                  
                </div>
              </div>
            </div>

            <div className="sinArtWorks">
              <h3 className='sinArtWorksTitle'>الاعمال الفنية</h3>

              <div className="sinArtWorksCards girdRepeat">
                {
                  item.artWorks.map((artWork) => {
                    return (
                      <div className="sinArtWorksCard" key={artWork.id}>
                        <div className="sinArtImage">
                          <img src={artWork.image} alt="" />
                        </div>

                        <div className="sinArtText marTop">
                          <div className="typeMart flexCenterSpace">
                            <span>مزاد {artWork.typeMart}</span>
                            <i className="far fa-heart iconHeart"></i>
                          </div>
                        </div>

                        <h3 className="itemName marTop">{artWork.name}</h3>
                        
                        <div className="price flexCenterSpace marTop">
                          <span>{artWork.price}</span>
                          <Link to={"/"} className='btn'>
                            <button>شراء</button>
                          </Link>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        ) : (
          <h1 className="notFound">لا يوجد بيانات لهذا الفنان</h1>
        )
      }
    </>
  )
}

export default SinglePage