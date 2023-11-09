import "./Tools.css";
const photos = [
  {
    name: "photo1",
    url: "/assets/img/mortgage.jpg",
    title: "כלי פשוט ויעיל שיעזור לכם בתכנון המשכנתא וההחזר החודשי",
    img_title: "מחשבון משכנתא",
  },
  {
    name: "photo2",
    url: "/assets/img/loan.jpg",
    title:
      "כלי חכם לתכנון הלוואות, שיעזור לכם להשוות בין שיטות החזר, לחשב את גובה ההחזרים החודשיים הצפויים ואת גובה ההלוואה שתוכלו לקבל",
    img_title: "מחשבון הלוואה",
  },
  {
    name: "photo3",
    url: "/assets/img/kids.jpg",
    title:
      " אינבסט מציע מגוון מסלולים לניהול החיסכון, ריבית אטרקטיבית ותוכניות חיסכון משלימות לכל ילד",
    img_title: "חיסכון לכל ילד",
  },
  {
    name: "photo4",
    url: "/assets/img/job.jpg",
    title:
      "כאן תוכלו להתעדכן במשרות הפנויות שמציע הבנק, למצוא את המשרה שמעניינת אתכם ומתאימה לכישוריכם, וכן להגיש מועמדות",
    img_title: "קריירה באינבסט",
  },
];
const Tools = () => {
  return (
    <>
      {photos.map((photo) => {
        return (
          <div className="second-card" key={photo.name}>
            <div className="second-photo-card">
              <img src={photo.url} className="second-photo-img" alt="Avatar" />
              {/* <h1 className="photo-text">{photo.img_title}</h1> */}
            </div>
            <div className="second-container ">
              <h1>{photo.img_title}</h1>
              <h4>
                <b>{photo.title}</b>
              </h4>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Tools;
