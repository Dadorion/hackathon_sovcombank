import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ArrowDown from "./assets/arrow_down.png";
import ArrowUp from "./assets/arrow_up.png";
import CurrentSelectionCard from "./CurrentSelectionCard";
import { setCurrentCard, setCurrentPosition } from "./recruiterSlice";

export default function CurrentSelection() {
  const [closed, setClosed] = useState(false);
  const data = useAppSelector((state) => state.recruiter.data);
  const [activeIdx, setActiveIdx] = useState(0);
  const dispatch = useAppDispatch();

  return (
    <section className={closed ? "closed" : ""}>
      <div
        className="mb-6 mt-6 flex cursor-pointer items-center justify-between "
        onClick={() => {
          setClosed(!closed);
        }}
      >
        <p className="text-2xl font-medium">Подборы</p>
        <div>
          <img src={ArrowDown} className={closed ? "" : "hidden"} alt="" />
          <img src={ArrowUp} className={closed ? "hidden" : ""} alt="" />
        </div>
      </div>

      <ul className={closed ? "hidden" : "" + " " + "flex flex-col gap-3"}>
        {data.map((c, idx) => {
          return (
            <li key={idx}>
              <CurrentSelectionCard
                requestNum={c.requestNum}
                jobs={c.jobs}
                active={activeIdx === idx}
                setActiveIdx={() => {
                  setActiveIdx(idx);
                  dispatch(setCurrentCard({ card: c.requestNum }));
                  console.log("123");
                  dispatch(setCurrentPosition(null));
                }}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}