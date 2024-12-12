import './aboutUs.css'

const AboutUs = () => {
  return (
    <div className="about">
      <div className="aboutCotent flexCenterStart mainPadding">
        <div className="aboutText">
          <h3 className="aboutTitle">فضاء الفن </h3>
          <p className="aboutPrag">
            هي منصة تهدف الي ربط الفنانين , محبي الفن , وهواة جمع الاعمال الفنية
          </p>
        </div>

        <div className="aboutText">
          <h3 className="aboutTitle">الرؤيه</h3>
          <p className="aboutPrag">
            تطمح منصة &quot;فضاء الفن&quot; إلى أن تصبح الوجهة الرائدة لكل من يقدر الإبداع
            ويبحث عن التميز، حيث توفر بيئة تجمع بين الفنانين، الهواة، والمقتنين
            لإبراز قيمة الفن ودوره في بناء جسور التواصل الثقافي والإنساني.
          </p>
        </div>

        <div className="aboutText">
          <h3 className="aboutTitle">الهدف</h3>
          <p className="aboutPrag">
            تهدف &quot;فضاء الفن&quot; إلى خلق مجتمع فني شامل يتيح للفنانين والهواة عرض
            أعمالهم والتواصل مع جمهورهم، مع توفير فرص حقيقية لتسويق إبداعاتهم.
          </p>
        </div>

        <div className="aboutText">
          <h3 className="aboutTitle">المؤسسون</h3>
          <p className="aboutPrag">
            تأسست &quot;فضاء الفن&quot; على يد فريق شغوف بالفن والإبداع:
          </p>
          <p className="aboutPrag">
            أحمد السيوفي: فنان تشكيلي يتمتع بخبرة طويلة في تنظيم المعارض، ويؤمن
            بأهمية التكنولوجيا في تسهيل وصول الفن للجميع.
          </p>
          <p className="aboutPrag">
            ليلى عمران: خبيرة تقنية تعمل على دمج الإبداع مع الابتكار الرقمي،
            لتقديم تجربة فريدة للمستخدمين.
          </p>
          <p className="aboutPrag">
            كريم صالح: مستثمر ثقافي يهدف إلى تحويل الفنون إلى أداة للتواصل الثقافي
            والمجتمعي.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs