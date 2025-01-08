import"./points.css"
import '../Card/card.css'

const PointsTable = ({rows}) =>{
  return(
    <div className="m2 w-full lg:w-[800px] sm:w-[400px]   border rounded-2xl mx-auto">
            <ul className="divide-y  w-full">
              {rows.map((point, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center py-4 px-6"
                >
                  <h1 className="ml-4 text-lg font-medium text-gray-300 neon6 text-[28px]">
                    {point.department}
                  </h1>
                </li>
              ))}
            </ul>
          </div>
  );  
};

export default PointsTable;