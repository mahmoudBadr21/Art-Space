import categData from '../../../public/categData'
import './categories.css'

const Categories = () => {
  return (
    <div className='categories container mainPadding'>
      <div className="departs">
        <ul className="flexCenterSpace">
          <li className='categ-active'>الكل</li>
          <li>الرسم </li>
          <li>النحت </li>
          <li>الخزف </li>
          <li>التصوير الفوتوغرافي </li>
          <li>الفن ثلاثي الابعاد </li>
          <li>التراث </li>
          <li>الحرف اليديوية</li>
          <li>الروائيين</li>
        </ul>
      </div>

      <div className="categCards girdRepeat">
        {
          categData.map((item) => {
            return (
              <div className="categCard" key={item.id}>
                <div className="categImage">
                  <img src={item.image} alt="" />
                </div>

                <div className="categType flexCenterSpace">
                  <span>الفئه</span>
                  <span>{item.type}</span>
                </div>

                <h3 className="categName marTop">{item.name}</h3>

                <h4 className="categDesc marTop">{item.desc}</h4>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Categories