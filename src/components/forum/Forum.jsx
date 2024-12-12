import { forumData } from '../../../public/forumData'
import './forum.css'

const Forum = () => {
  return (
    <div className='forum container mainPadding'>
      <h2 className="forumTitle">المنتدي</h2>

      <div className="forumContainer flexCenterStart">
        {
          forumData.map((ques) => {
            return(
              <div className="forumContQues" key={ques.id}>
                <div className="forumQuesContent">
                  <h5 className="forumQuesTime">منذ {ques.time} دقائق</h5>

                  <h3 className="forumQuesText">{ques.question}</h3>
                </div>

                <div className="forumQuesReet flexCenterSpace">
                  <div className="forumReetIcons">
                    <span><i className="fa-solid fa-arrow-up"></i> {ques.numUp}</span>
                    <span><i className="fa-solid fa-arrow-down"></i> {ques.numDwon}</span>
                    <span><i className="fa-regular fa-comment-dots"></i> {ques.numComment}</span>
                    <span><i className="fa-regular fa-eye"></i> {ques.numView}</span>
                  </div>

                  <h5 className="forumReetAdd">اضافة رد <i className="fa-regular fa-pen-to-square"></i></h5>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Forum