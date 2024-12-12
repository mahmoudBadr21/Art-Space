import { Link } from 'react-router-dom'
import { homeDataCat, homeDataArtisits, homeDataRaise, homeDataMarket, homeDataEvents } from '../../../public/data'
import Header from '../header/Header'
import './home.css'

export const Home = () => {
  return (
    <div className='home container'>
      {/* header component */}
      <Header />

      {/* categories in home page */}
      <div className="categories flexCenterStart">
        <div className="main-title"><Link to={"/categories"}>الفئات</Link></div>

        <div className="content">
          <p>
            <span>تجربة بصرية غير مسبوقة: </span>
            استمتع بجميع فئات الفن
          </p>
        </div>

        <div className="catCards">
          {
            homeDataCat.map((val) => {
              return (
                <>
                <div className={`catCard ${val.size} ${val.bgColor}`} key={val.id}>
                  <h3>{val.title}</h3>
                  <img src={val.img} alt="" />
                </div>
                </>
              )
            })
          }
        </div>
      </div>

      {/* artists in home page */}
      <div className="artists flexCenterStart">
        <div className="main-title"><Link to={"/artists"}>الفنانين المميزين</Link></div>

        <div className="artisCards girdRepeat">
          {
            homeDataArtisits.slice(0, 3).map((artist) => {
              return (
                <>
                  <div className="artisCard" key={artist.id}>
                    <div className="artisImage">
                      <img src={artist.image} alt="" />
                    </div>

                    <div className="artisText">
                      <h3>الفنان / {artist.name}</h3>
                      <p>{artist.caption}</p>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>

      {/* raise in home page */}
      <div className="raise flexCenterStart">
        <div className="main-title"><Link to={"/raise"}>المزادات</Link></div>

        <div className="raiCards girdRepeat">
          {
            homeDataRaise.slice(0, 3).map((item) => {
              return(
                <>
                  <div className="raiCard" key={item.id}>
                    <div className="raiImage">
                      <img src={item.image} alt="" />

                      <h5 className="hourLeft">
                        <i className="far fa-clock"></i>

                        <span>
                          متبقي {item.hourLeft} ساعات من الان علي انتهاء المزاد
                        </span>
                      </h5>
                    </div>

                    <div className="raiText marTop">
                      <div className="typeRai flexCenterSpace">
                        <span>مزاد {item.typeRai}</span>
                        <i className="far fa-heart iconHeart"></i>
                      </div>
                    </div>

                    <h3 className="itemName marTop">{item.name}</h3>
                    
                    <div className="highPrice flexCenterSpace">
                      <span>اعلي سعر حتي الان</span>
                      <span>{item.highPrice}</span>
                    </div>

                    <Link to={"/"} className='btn'>
                      <button>اضف سعرك</button>
                    </Link>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>

      {/* market in home page */}
      <div className="market flexCenterStart">
        <div className="main-title"><Link to={"/market"}>السوق الفني</Link></div>

        <div className="martCards girdRepeat">
          {
            homeDataMarket.slice(0, 3).map((item) => {
              return(
                <>
                  <div className="martCard" key={item.id}>
                    <div className="martImage">
                      <img src={item.image} alt="" />
                    </div>

                    <div className="martText marTop">
                      <div className="typeMart flexCenterSpace">
                        <span>مزاد {item.typeMart}</span>
                        <i className="far fa-heart iconHeart"></i>
                      </div>
                    </div>

                    <h3 className="itemName marTop">{item.name}</h3>
                    
                    <div className="price flexCenterSpace marTop">
                      <span>{item.price}</span>
                      <Link to={"/"} className='btn'>
                        <button>شراء</button>
                      </Link>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>

      {/* events in home page */}
      <div className="events flexCenterStart">
        <div className="main-title"><Link to={"/"}>الفعاليات القادمه</Link></div>

        <div className="eveCards girdRepeat">
          {
            homeDataEvents.slice(0, 3).map((item) => {
              return(
                <>
                  <div className="eveCard" key={item.id}>
                    <div className="eveImage">
                      <img src={item.image} alt="" />
                    </div>

                    <div className="eveText marTop">
                      <div className="typeEve flexCenterSpace">
                        <span>{item.typeEve}</span>
                        <i className="far fa-heart iconHeart"></i>
                      </div>
                    </div>

                    <h3 className="itemName marTop">{item.name}</h3>
                    
                    <h3 className="itemPlace marTop">المكان: {item.place}</h3>

                    <h3 className="itemDate marTop">{item.date}</h3>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Home