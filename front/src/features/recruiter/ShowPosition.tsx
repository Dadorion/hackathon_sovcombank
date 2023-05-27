import { useAppSelector } from "../../app/hooks";
import GeoLogo from "./assets/geo.png";
import { getCurrentPositionData } from "./recruiterSlice";

export default function ShowPosition() {
  const positionData = useAppSelector(getCurrentPositionData);
  if (positionData === null) {
    return <h1>no data</h1>;
  }
  return (
    <div>
      <div className="mb-5 max-w-[670px] rounded-lg bg-white px-8 py-7 shadow-sm">
        <p className="mb-4 text-2xl font-medium">{positionData.position}</p>
        <div className="mb-1 flex items-center gap-1">
          <img src={GeoLogo} alt="geologo" />
          <p>Нижний Новгород</p>
        </div>
        <p className="mb-1">Требуемый опыт работы: 1–3 года</p>
        <p className=" mb-7">Полная занятость, полный день</p>
        <button className=" h-[44px] w-[290px] rounded-2xl bg-[#1B378C] text-white">
          начать работу
        </button>
      </div>
      <div className="mb-5 max-w-[670px] rounded-lg bg-white px-8 py-7 shadow-sm">
        <p className="mb-4 text-lg font-medium">Ключевые навыки</p>
        <div className="flex flex-wrap gap-4">
          {positionData.keySkills.map((skill) => {
            return (
              <div className="rounded border-2 border-gray-400 px-2 py-1 text-xs">
                {skill}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mb-5 max-w-[670px] rounded-lg bg-white px-8 py-7 shadow-sm">
        <p className="mb-4 text-lg font-medium">Непубличная информация</p>
        <DisplayPositionList data={positionData.insider_info} />
      </div>
      <div className="mb-5 max-w-[670px] rounded-lg bg-white px-8 py-7 shadow-sm">
        <p className="mb-4 text-lg font-medium">Обязанности</p>
        <DisplayPositionList data={positionData.responsibilities} />
      </div>
    </div>
  );
}

function DisplayPositionList({ data }: { data: string[] }) {
  return (
    <ul className="list-disc">
      {data.map((info, idx) => {
        return (
          <li key={idx} className="relative left-6 text-sm">
            {info}
          </li>
        );
      })}
    </ul>
  );
}
