import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const data = [
  {
    requestNum: "#330",
    jobs: [
      {
        position: "Офис-менеджер ",
        description: "3 года опыта работы",
        count: 3,
        keySkills: [
          "документооборот",
          "деловая переписка",
          "стрессоустойсивость",
          "многозадачность",
          "Обеспечение жизнедеятельности офиса",
        ],
        responsibilities: [
          "организация системы делопроизводства в офисе, включая электронный документооборот;",
          "ведение деловой переписки;",
          "обеспечение жизнедеятельности офиса;",
        ],
        requirements: [
          "опыт работы: от 1 года;",
          "опыт ведения деловой переписки, грамотность при написании документов;",
          "умение самостоятельно искать ответы на поставленные вопросы;",
        ],
        insider_info: [
          "В офисе работает 120 человек",
          "Техника старая, часто требует обслуживания",
          "Непосредственный начальник страдает СДВГ",
        ],
      },
      {
        position: "Backend dev ",
        description: "3 года опыта работы",
        count: 3,
        keySkills: ["Python", "JS", "MongoDB", "OOP"],
        responsibilities: [
          "обеспечение жизнедеятельности офиса;",
          "организация системы делопроизводства в офисе, включая электронный документооборот;",
          "ведение деловой переписки;",
        ],
        requirements: [
          "опыт ведения деловой переписки, грамотность при написании документов;",
          "опыт работы: от 5 лет;",
          "умение самостоятельно искать ответы на поставленные вопросы;",
        ],
        insider_info: [
          "В офисе работает 120 человек",
          "Техника старая, часто требует обслуживания",
          "Непосредственный начальник страдает СДВГ",
        ],
      },
    ],
  },
  {
    requestNum: "#340",
    jobs: [
      {
        position: "Системный админ",
        description: "3 года опыта работы",
        count: 3,
        keySkills: [
          "документооборот",
          "деловая переписка",
          "стрессоустойсивость",
          "многозадачность",
          "Обеспечение жизнедеятельности офиса",
        ],
        responsibilities: [
          "организация системы делопроизводства в офисе, включая электронный документооборот;",
          "ведение деловой переписки;",
          "обеспечение жизнедеятельности офиса;",
        ],
        requirements: [
          "опыт работы: от 1 года;",
          "опыт ведения деловой переписки, грамотность при написании документов;",
          "умение самостоятельно искать ответы на поставленные вопросы;",
        ],
        insider_info: [
          "В офисе работает 120 человек",
          "Техника старая, часто требует обслуживания",
          "Непосредственный начальник страдает СДВГ",
        ],
      },
      {
        position: "Devops",
        description: "3 года опыта работы",
        count: 3,
        keySkills: ["Python", "JS", "MongoDB", "OOP"],
        responsibilities: [
          "обеспечение жизнедеятельности офиса;",
          "организация системы делопроизводства в офисе, включая электронный документооборот;",
          "ведение деловой переписки;",
        ],
        requirements: [
          "опыт ведения деловой переписки, грамотность при написании документов;",
          "опыт работы: от 5 лет;",
          "умение самостоятельно искать ответы на поставленные вопросы;",
        ],
        insider_info: [
          "В офисе работает 120 человек",
          "Техника старая, часто требует обслуживания",
          "Непосредственный начальник страдает СДВГ",
        ],
      },
    ],
  },
];

const cards = data.map((el) => el.requestNum);
const recruiterSlice = createSlice({
  name: "recruiter",
  initialState: {
    data,
    cards,
    currentPosition: null as number | null,
    currentCard: cards[0],
  },
  reducers: {
    setCurrentCard(state, action: PayloadAction<{ card: string }>) {
      // const newSelectedCardIdx = state.data.findIndex(el => el.requestNum === action.payload.card)
      state.currentCard = action.payload.card;
    },
    setCurrentPosition(state, action: PayloadAction<null | number>) {
      state.currentPosition = action.payload;
    },
  },
});

export const { setCurrentCard, setCurrentPosition } = recruiterSlice.actions;

export const getCurrentCard = (state: RootState) => state.recruiter.currentCard;
export const getCurrentPositionIdx = (state: RootState) =>
  state.recruiter.currentPosition;
export const getCurrentCardsPositions = (state: RootState) => {
  const currentCardNum = state.recruiter.currentCard;
  const currentCard = state.recruiter.data.find(
    (el) => currentCardNum === el.requestNum
  );
  return currentCard?.jobs;
};
export const getCurrentPositionData = (state: RootState) => {
  const currentCardNum = state.recruiter.currentCard;
  const currentCard = state.recruiter.data.find(
    (el) => currentCardNum === el.requestNum
  );
  if (currentCard && state.recruiter.currentPosition !== null)
    return currentCard?.jobs[state.recruiter.currentPosition];

  return null;
};

export default recruiterSlice.reducer;
