import { useState } from "react";
import "./App.css";
import FeelingImg from "./FeelingImg";
import process from "immer";

type Entry = {
  feelings?: number;
  extras?: Record<string, boolean>;
  date: Date;
};
type DateType = { history: Entry[]; currentIdx: number };

function getDays(date1: Date, date2: Date) {
  var Difference_In_Time = date2.getTime() - date1.getTime();

  // To calculate the no. of days between two dates
  return Difference_In_Time / (1000 * 3600 * 24);
}

function getDatePlusDays(date: Date, days: number) {
  const yesterday = new Date(date);
  yesterday.setDate(yesterday.getDate() + days);
  return yesterday;
}

function getSavedHistory() {
  let history: Entry[] = [];
  try {
    history = JSON.parse(localStorage.getItem("history") || "") as Entry[];
    history.forEach((d) => {
      d.date = new Date(d.date);
    });
    let lastDate = history[history.length - 1].date;
    let daysSince = getDays(lastDate, new Date());
    while (daysSince > 0) {
      lastDate = getDatePlusDays(lastDate, 1);
      daysSince--;
      history.push({ date: lastDate });
    }
  } catch (e) {
    history = [{ date: getDatePlusDays(new Date(), -1) }, { date: new Date() }];
  }
  return { history, currentIdx: history.length - 1 };
}

const defaultHistory = getSavedHistory();

const EXTRA_OPTIONS = {
  social: [
    "family",
    "lover",
    "kids",
    "friends",
    "coworkers",
    "acquaintances",
    "compliments",
  ],
  other: [
    "great_work",
    "bad_work",
    "cook",
    "clean",
    "create_art",
    "create_something",
  ],
  vibe: ["relaxed", "excited", "tired", "stressed", "anxious", "annoyed"],
} as const;

function App() {
  const [data, setData] = useState<DateType>(defaultHistory);
  console.log(data);
  const today = data.history[data.currentIdx];
  const updateToday = (newData: Partial<Entry>) => {
    const updatedData = process(data, (draft) => {
      draft.history[data.currentIdx].feelings =
        newData.feelings ?? today.feelings;
      draft.history[data.currentIdx].date = newData.date ?? today.date;
      if (newData.extras) {
        draft.history[data.currentIdx].extras = today.extras || {};
        const key = Object.keys(newData.extras)[0];
        (draft.history[data.currentIdx].extras as any)[key] =
          newData.extras[key];
      }
    });
    setData(updatedData);
    localStorage.setItem("history", JSON.stringify(updatedData.history));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          onClick={() => setData({ ...data, currentIdx: data.currentIdx - 1 })}
          style={{ paddingBottom: 20, opacity: 0.2, cursor: "pointer" }}
        >
          {data.history[data.currentIdx - 1]?.date.toDateString()}
        </div>
        <div style={{ paddingBottom: 20 }}>{today.date.toDateString()}</div>
        <div
          onClick={() => setData({ ...data, currentIdx: data.currentIdx + 1 })}
          style={{ paddingBottom: 20, opacity: 0.2, cursor: "pointer" }}
        >
          {data.history[data.currentIdx + 1]?.date.toDateString()}
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
            cursor: "pointer",
            paddingTop: 60,
          }}
        >
          {[0, 1, 2, 3, 4].map((num) => (
            <FeelingImg
              style={{ opacity: today.feelings === num ? 1 : 0.5 }}
              onClick={() => updateToday({ feelings: num })}
              num={num}
            />
          ))}
        </div>

        {Object.values(EXTRA_OPTIONS).map((arr) => (
          <div
            style={{
              display: "flex",
              gap: 20,
              cursor: "pointer",
              paddingTop: 60,
            }}
          >
            {arr.map((d) => (
              <div
                onClick={() =>
                  updateToday({ extras: { [d]: !today?.extras?.[d] } })
                }
                className="button"
                style={{ opacity: today.extras?.[d] ? 1 : "" }}
              >
                {d.replace("_", " ")}
              </div>
            ))}
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
