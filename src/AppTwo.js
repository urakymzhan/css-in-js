import CardTwo from "./components/CardTwo";
import {
  BsFillBadge4KFill,
  BsFillBadgeHdFill,
  BsFillBadgeVrFill,
  BsFillBadge3DFill,
} from "react-icons/bs";

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
    <div className="flex justify-around text-center mt-10">
      {cards.map((card) => {
        return <CardTwo card={card} key={card.id} />;
      })}
    </div>
  );
}

export default App;
