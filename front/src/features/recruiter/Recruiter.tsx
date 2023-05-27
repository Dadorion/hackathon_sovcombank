import { getCurrentPositionIdx } from "./recruiterSlice";
import { useAppSelector } from "../../app/hooks";
import CurrentSelection from "./CurrentSelection";
import { PositionDescription } from "./PositionDescription";
import ShowPosition from "./ShowPosition";

const Recruiter = () => {
  const dropDownData = [
    "Подборы",
    "События",
    "Календарь",
    "Вакансии",
    "Резюме",
  ];

  const currentPositionIdx = useAppSelector(getCurrentPositionIdx);

  return (
    <main className="mx-auto grid h-[calc(100%_-_85px)] max-w-[1440px] grid-cols-[95px_275px_1fr]">
      <div className="flex flex-col items-center gap-[44px] bg-[#cecece] pt-[44px]">
        {dropDownData.map((_, idx) => {
          return (
            <div
              key={idx}
              className="h-[54px] w-[54px] cursor-pointer rounded-full bg-[#d9d9d9]"
            ></div>
          );
        })}
      </div>
      <CardsForJobs />
      <div className="bg-[#F5F6FA]">
        <Funnel />
        <div className="pl-8 pt-11">
          {currentPositionIdx !== null ? (
            <ShowPosition />
          ) : (
            <PositionDescription />
          )}
        </div>
      </div>
    </main>
  );
};

function Funnel() {
  const data = [
    "В работе",
    "Новые",
    "Контакт",
    "Тестовое задание",
    "Оценка",
    "Согласование",
    "Финальное интервью",
    "Решение заказчика",
    "Выставление офера",
    "Выход на работу",
    "Закрытие",
  ];

  return (
    <div className="flex gap-3 pl-8 pt-11">
      {data.map((d, idx) => {
        return (
          <a key={idx} href="#" className="text-xs text-gray-400">
            {d}
          </a>
        );
      })}
    </div>
  );
}

function CardsForJobs() {
  return (
    <section className="relative flex flex-col px-2">
      <CurrentSelection />
      <ArchivedSelection />
    </section>
  );
}

function ArchivedSelection() {
  return <div></div>;
}

export default Recruiter;
