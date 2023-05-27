import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getCurrentCard, getCurrentCardsPositions, setCurrentPosition } from "./recruiterSlice";

export function PositionDescription() {
  const dispatch = useAppDispatch();
  const currentCard = useAppSelector(getCurrentCard);
  const currentPositions = useAppSelector(getCurrentCardsPositions);

  return (
    <div className="  ">
      <div className="mb-9 max-w-[375px] rounded-lg bg-white p-8 shadow-lg">
        <p className="narrow mb-4 text-5xl font-bold">Набор {currentCard}</p>
        <p className="mb-1 text-sm">ООО «Вымпелком»</p>
        <p className="mb-1 text-sm">принят: 25.05.2023</p>
        <p className="mb-1 text-sm">закрыть до : 01.08.2023</p>
        <p className="text-sm">в работе дней: 3</p>
      </div>

      <div className="max-w-[min-content] rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-6 grid grid-cols-[290px_85px_120px] items-end gap-[35px]">
          <p className="text-left text-2xl font-medium">Вакансии (0/3)</p>
          <p className=" text-sm">в работе, дн.</p>
          <p className=" text-sm">кандидатов</p>
        </div>
        {currentPositions &&
          currentPositions.map((pos, idx) => {
            return (
              <div
                key={idx}
                className="mb-4 grid grid-cols-[290px_85px_120px] items-end gap-[35px]"
              >
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    dispatch(setCurrentPosition(idx));
                  }}
                >
                  {pos.position} (0/3)
                </p>
                <p>0</p>
                <p>0</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
