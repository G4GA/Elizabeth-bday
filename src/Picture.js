import "./Picture.css";

export default function Picture({ imgSrc, message }) {
  return (
    <div className="Picture">
      {" "}
      <img src={imgSrc} alt="idk"></img>
      <p>{message}</p>{" "}
    </div>
  );
}
