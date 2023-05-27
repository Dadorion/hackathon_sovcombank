interface ICurrentSelectionCard {
  requestNum: string;
  jobs: IJob[];
  active: boolean;
  setActiveIdx: () => void;
}

interface IJob {
  position: string;
  description: string;
  count: number;
}

export default function CurrentSelectionCard({
  requestNum,
  jobs,
  active,
  setActiveIdx,
}: ICurrentSelectionCard) {
  return (
    <div
      className={
        active
          ? "ml-auto max-w-[260px] rounded bg-[#1B378C] px-4 py-3 text-white"
          : "ml-auto max-w-[260px] rounded bg-slate-100 px-4 py-3 text-black"
      }
    >
      <p
        className="mb-3 cursor-pointer text-2xl font-medium"
        onClick={setActiveIdx}
      >
        {requestNum}
      </p>
      <ul className={"flex flex-col gap-3"}>
        {jobs.map(({ count, position }, idx) => {
          return (
            <li key={idx} className="">
              {position} ({count})
            </li>
          );
        })}
      </ul>
    </div>
  );
}
