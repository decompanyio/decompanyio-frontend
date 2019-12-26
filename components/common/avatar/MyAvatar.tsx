import * as styles from "public/static/styles/main.scss";
import React from "react";

/*일반 유저 아바타
picture, croppedArea, size, (click) 지정하여 사용*/

// 이미지 정보 GET
const getImgInfo = picture => {
  if (typeof window === "undefined") return false;

  let img = new Image();

  img.src = picture;
  return (img.onload = () => img.height > img.width);
};

type Type = {
  croppedArea: any;
  size: number;
  picture: string;
  click?: any;
};

export default function({ size, picture, croppedArea, click }: Type) {
  let xLocation = 0;
  let yLocation = 0;
  let zoom = 1;
  let imgInfo = getImgInfo(picture);
  let wrapperStyle: {};
  let imgStyle: {};

  if (croppedArea) {
    xLocation = Math.floor(
      (croppedArea.x || xLocation) /
        ((imgInfo ? croppedArea.height : croppedArea.width) / size)
    );
    yLocation = Math.floor(
      (croppedArea.y || yLocation) /
        ((imgInfo ? croppedArea.height : croppedArea.width) / size)
    );
    zoom = croppedArea.zoom || zoom;
  }

  wrapperStyle = {
    width: (size || 30) + "px",
    height: (size || 30) + "px"
  };
  imgStyle = {
    width: !imgInfo ? "auto" : Number(zoom * 100) + "%",
    height: imgInfo ? "auto" : Number(zoom * 100) + "%",
    left: "-" + xLocation + "px",
    top: "-" + yLocation + "px"
  };

  const handleClick = () => click && click();

  return (
    <div
      className={styles.ua_container}
      style={wrapperStyle}
      onClick={() => handleClick()}
    >
      {picture.length > 0 ? (
        <img
          src={picture}
          alt="profile"
          style={imgStyle}
          onError={e => {
            let element = e.target as HTMLImageElement;
            element.onerror = null;
            element.src = require("public/static/image/icon/i_profile-default.png");
          }}
        />
      ) : (
        <img
          src={require("public/static/image/icon/i_profile-default.png")}
          className={styles.ma_avatar}
          alt="Link to my profile"
        />
      )}
    </div>
  );
}
