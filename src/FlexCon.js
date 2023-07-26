import Picture from "./Picture";
import Greeting from "./Greeting";
import "./FlexCon.css";

export default function FlexCon() {
  return (
    <div className="FlexCon">
      <Picture
        imgSrc={"./elizabeth-bday/img1love.jpg"}
        message={"Así yo cuando te veo jiji"}
      />
      <Greeting />
      <Picture
        imgSrc={"./elizabeth-bday/img2love.jpg"}
        message={"Así yo cuando te veo x2 jiji"}
      />
    </div>
  );
}
