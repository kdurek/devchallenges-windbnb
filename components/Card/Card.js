export default function Card({ stay }) {
  return (
    <div className="flex flex-col gap-2 font-mont">
      <img
        className="mb-2 w-full h-60 rounded-2xl object-cover"
        src={stay.photo}
        alt={stay.photo}
      />
      <div className="flex justify-between ">
        <div className="flex items-center gap-2">
          {stay.superHost && (
            <p className="text-gray-darker font-bold uppercase border border-gray-darker rounded-xl px-2">
              Super host
            </p>
          )}
          <p className="text-gray-normal font-medium text-xs">
            {stay.type}
            {stay.beds && ` . ${stay.beds} ${stay.beds > 1 ? "beds" : "bed"}`}
          </p>
        </div>
        <div className="flex items-center">
          <span className="text-red-light transform scale-75 material-icons">
            star_rate
          </span>
          <p className="text-gray-darker font-medium text-xs">{stay.rating}</p>
        </div>
      </div>
      <h2 className="text-gray-darkest font-semibold text-sm">{stay.title}</h2>
    </div>
  )
}
