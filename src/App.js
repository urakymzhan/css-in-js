// Styled Components example

import Card from "./components/Card";
import {
  BsFillBadge4KFill,
  BsFillBadgeHdFill,
  BsFillBadgeVrFill,
  BsFillBadge3DFill,
} from "react-icons/bs";
import { AppDiv } from "./styled";

const cards = [
  {
    id: 1,
    icon: <BsFillBadge4KFill />,
    stats: 280,
    comment: "100 New Comments",
    left: false,
    progressbar: true,
    value: 80,
  },
  {
    id: 2,
    icon: <BsFillBadgeHdFill />,
    stats: 100,
    comment: "New Comments",
    left: false,
    progressbar: true,
    value: 50,
  },
  {
    id: 3,
    icon: <BsFillBadgeVrFill />,
    stats: "89%",
    comment: "80 New Comments",
    left: false,
    progressbar: true,
    value: 30,
  },
  {
    id: 4,
    icon: <BsFillBadge3DFill />,
    stats: 900,
    comment: "90 New Comments",
    left: false,
    progressbar: false,
    value: 95,
  },
];

function App() {
  return (
    <AppDiv>
      {cards.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </AppDiv>
  );
}

export default App;
