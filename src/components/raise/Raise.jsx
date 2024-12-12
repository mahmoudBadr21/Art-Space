import './raise.css'
import '../home/home.css'
import { Link } from 'react-router-dom'
import { homeDataRaise } from '../../../public/data'

const Raise = () => {
  return (
    <div className="raise container flexCenterStart mainPadding">
        <h3 className="raiseTitle">المزادات</h3>

        <div className="raiCards girdRepeat">
          {
            homeDataRaise.map((item) => {
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
  )
}

export default Raise