// TailwindCSS example

function CardTwo({ card }) {
  return (
    <div className="border border-black w-72 p-5 bg-white">
      <div className="flex justify-between items-center mb-6">
        <div className="flex justify-center items-center">{card.icon}</div>
        <div>
          <h1 className="text-lime-700 font-extrabold text-2xl mb-0">
            {card.stats}
          </h1>
          <p className="text-gray-600 font-thin mt-1.5">{card.comment}</p>
        </div>
      </div>
      <progress
        value={card.value}
        max={100}
        className={`w-full ${
          card.progressbar === false ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}

export default CardTwo;
