import { homeDataMarket } from '../../../public/data'
import './market.css'

const Market = () => {
  return (
    <div className='techMarket container mainPadding'>
      <h3 className="techMartTitle">السوق الفني</h3>

      <div className="techMartCards girdRepeat">
        {
          homeDataMarket.map((item) => {
            return(
              <div className="techMartCard" key={item.id}>
                <div className="techMartImage">
                  <i className="far fa-heart iconHeart"></i>
                  <img src={item.image} alt="" />
                </div>

                <h4 className="techMartName">{item.name}</h4>

                <div className="buttons flexCenterSpace">
                <button className='btn'>شراء الان</button>
                <button>شراء بالتقسيط</button>
                <button>قدم عرض</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Market