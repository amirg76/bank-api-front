import "./CardContainer.css";

const photos = [
  {
    name: "photo3",
    url: "/assets/img/first_section_img3.jpg",
    title: "קובעים פגישה מראש עם בנקאי וחוסכים זמן",
    img_title: ".לא מחכים, קובעים",
  },
  {
    name: "photo2",
    url: "/assets/img/first_section_img2.jpg",
    title: "הדוח השנתי שלך ממתין לך באתר ובאפליקציה",
    img_title: "תעודת זהות בנקאית",
  },
  {
    name: "photo1",
    url: "/assets/img/first_section_img1.jpg",
    title: "פורסמו הדוחות הכספיים של אינבסט לשנת 2022",
    img_title: "דוחות כספיים 2022",
  },
];
const CardContainer = () => {
  return (
    <>
      {photos.map((photo) => {
        return (
          <div className="card" key={photo.name}>
            <div className="photo-card">
              <img src={photo.url} className="photo-img" alt="Avatar" />
              <h1 className="photo-text">{photo.img_title}</h1>
            </div>
            <div className="container">
              <h4>
                <b>{photo.title}</b>
              </h4>
              <p>{photo.img_title}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardContainer;

{
  /* <div className="card">
  <img src={photo.url} alt="Avatar" style="width:100%" />
  <div className="container">
    <h4>
      <b>Jane Doe</b>
    </h4>
    <p>Interior Designer</p>
  </div>
</div>; */
}
