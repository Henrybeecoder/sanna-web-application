import React from "react";
import "./style.css";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import likeIcon from "../../Images/likeIcon.svg";

export default function HomePage() {
  const sculptureData = [
    {
      id: 1,
      imgData:
        "https://res.cloudinary.com/henrybee558/image/upload/v1656602056/sanna/Rectangle_3_gxma7v.svg",
      name: "African Woman",
      price: "$5000",
      userName: "Anayo obininuju",
      userProfession: "Painter",
      userImg:
        "https://res.cloudinary.com/henrybee558/image/upload/v1655732127/sanna/Avatar_vgdf4d.svg",
    },
    {
      id: 2,
      imgData:
        "https://res.cloudinary.com/henrybee558/image/upload/v1656602056/sanna/Rectangle_4_ivxtck.svg",
      name: "African Woman",
      price: "$5000",
      userName: "Dianne Russell",
      userProfession: "Painter",
      userImg:
        "https://res.cloudinary.com/henrybee558/image/upload/v1655732127/sanna/Avatar_vgdf4d.svg",
    },
    {
      id: 3,
      imgData:
        "https://res.cloudinary.com/henrybee558/image/upload/v1656602056/sanna/Rectangle_8_qats0i.svg",
      name: "African Woman",
      price: "$5000",
      userName: "Dianne Russell",
      userProfession: "Painter",
      userImg:
        "https://res.cloudinary.com/henrybee558/image/upload/v1655732127/sanna/Avatar_vgdf4d.svg",
    },
    {
      id: 4,
      imgData:
        "https://res.cloudinary.com/henrybee558/image/upload/v1656602056/sanna/Rectangle_4_ivxtck.svg",
      name: "African Woman",
      price: "$5000",
      userName: "Dianne Russell",
      userProfession: "Painter",
      userImg:
        "https://res.cloudinary.com/henrybee558/image/upload/v1655732127/sanna/Avatar_vgdf4d.svg",
    },
    {
      id: 5,
      imgData:
        "https://res.cloudinary.com/henrybee558/image/upload/v1656602056/sanna/Rectangle_8_qats0i.svg",
      name: "African Woman",
      price: "$5000",
      userName: "Dianne Russell",
      userProfession: "Painter",
      userImg:
        "https://res.cloudinary.com/henrybee558/image/upload/v1655732127/sanna/Avatar_vgdf4d.svg",
    },
    {
      id: 6,
      imgData:
        "https://res.cloudinary.com/henrybee558/image/upload/v1656602056/sanna/Rectangle_4_ivxtck.svg",
      name: "African Woman",
      price: "$5000",
      userName: "Dianne Russell",
      userProfession: "Painter",
      userImg:
        "https://res.cloudinary.com/henrybee558/image/upload/v1655732127/sanna/Avatar_vgdf4d.svg",
    },
  ];
  const paintingData = [
    {
      id: 1,
      imgData:
        "https://res.cloudinary.com/henrybee558/image/upload/v1655730805/sanna/sanna_img_t6air3.svg",
      name: "African Woman",
      price: "$5000",
      userName: "Dianne Russell",
      userProfession: "Painter",
      userImg:
        "https://res.cloudinary.com/henrybee558/image/upload/v1655732127/sanna/Avatar_vgdf4d.svg",
    },
    {
      id: 2,
      imgData:
        "https://res.cloudinary.com/henrybee558/image/upload/v1655737073/sanna/sanna_img2_zhkw9i.svg",
      name: "African Woman",
      price: "$5000",
      userName: "Dianne Russell",
      userProfession: "Painter",
      userImg:
        "https://res.cloudinary.com/henrybee558/image/upload/v1655732127/sanna/Avatar_vgdf4d.svg",
    },
    {
      id: 3,
      imgData:
        "https://res.cloudinary.com/henrybee558/image/upload/v1655737197/sanna/sanna_img3_ys1mc7.svg",
      name: "African Woman",
      price: "$5000",
      userName: "Dianne Russell",
      userProfession: "Painter",
      userImg:
        "https://res.cloudinary.com/henrybee558/image/upload/v1655732127/sanna/Avatar_vgdf4d.svg",
    },
    {
      id: 4,
      imgData:
        "https://res.cloudinary.com/henrybee558/image/upload/v1655737073/sanna/sanna_img2_zhkw9i.svg",
      name: "African Woman",
      price: "$5000",
      userName: "Dianne Russell",
      userProfession: "Painter",
      userImg:
        "https://res.cloudinary.com/henrybee558/image/upload/v1655732127/sanna/Avatar_vgdf4d.svg",
    },
    {
      id: 5,
      imgData:
        "https://res.cloudinary.com/henrybee558/image/upload/v1655737197/sanna/sanna_img3_ys1mc7.svg",
      name: "African Woman",
      price: "$5000",
      userName: "Dianne Russell",
      userProfession: "Painter",
      userImg:
        "https://res.cloudinary.com/henrybee558/image/upload/v1655732127/sanna/Avatar_vgdf4d.svg",
    },
    {
      id: 6,
      imgData:
        "https://res.cloudinary.com/henrybee558/image/upload/v1655730805/sanna/sanna_img_t6air3.svg",
      name: "African Woman",
      price: "$5000",
      userName: "Dianne Russell",
      userProfession: "Painter",
      userImg:
        "https://res.cloudinary.com/henrybee558/image/upload/v1655732127/sanna/Avatar_vgdf4d.svg",
    },
  ];
  return (
    <div>
      <Header />
      <div className="home-page">
        <h1>Paintings</h1>
        <div className="container">
          {paintingData.map((data) => (
            <div className="parent-div">
              <div
                style={{
                  backgroundImage: `url(${data.imgData}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)`,
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "416px",
                  backgroundSize: "cover",
                }}
              >
                <div className="user-container">
                  <img src={data.userImg} alt="" />
                  <div className="text-box">
                    <h3>{data.userName}</h3>
                    <p>{data.userProfession}</p>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <h2>{data.name}</h2>
                <p>{data.price}</p>
              </div>
              <div className="like-icon">
                <img src={likeIcon} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="home-page">
        <h1>Sculptures</h1>
        <div className="container">
          {sculptureData.map((data) => (
            <div className="parent-div">
              <div
                style={{
                  backgroundImage: `url(${data.imgData}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)`,
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "416px",
                  backgroundSize: "cover",
                }}
              >
                <div className="user-container">
                  <img src={data.userImg} alt="" />
                  <div className="text-box">
                    <h3>{data.userName}</h3>
                    <p>{data.userProfession}</p>
                  </div>
                </div>
              </div>
              <div className="pricing">
                <h2>{data.name}</h2>
                <p>{data.price}</p>
              </div>
              <div className="like-icon">
                <img src={likeIcon} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
