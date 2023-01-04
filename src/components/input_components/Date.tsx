import { useContext } from "react";
import { Context } from "../../Context";
import { DateTime } from "../../types";

const Date = () => {
  const { answer, index, questions, setAnswer } = useContext<any>(Context);
  if (questions !== undefined) {
    const questionid = questions[index].questionid;
    // Get the value from the state variable to set default
    const answer_written = answer["datetime"]
      ? answer["datetime"][questionid]
      : undefined;
    var date = ""; // Variable to take Date value from the input
    var time = ""; // Variable to take Time value from the input

    const respond = (value: string, type: DateTime) => {
      let _answer = answer; //Take the state value into variable
      if (_answer[questionid] === undefined) {
        _answer[questionid] = {};
      }
      if (type === DateTime.Date) date = value;
      else time = value;
      _answer[questionid] = `${date}  ${time}`;

      // For filling the inputs during navigation store the values into state in a format that's easy to access
      if (_answer["datetime"] === undefined) {
        _answer["datetime"] = {};
        _answer["datetime"][questionid] = {};
      }
      _answer["datetime"][questionid]["date"] = date;
      _answer["datetime"][questionid]["time"] = time;
      setAnswer(_answer);
    };
    return (
      <div className="DateContainer">
        <input
          onChange={(e) => respond(e.target.value, DateTime.Date)}
          className="Date"
          type="date"
          defaultValue={
            answer_written !== undefined
              ? answer_written["date"] !== undefined
                ? answer_written["date"]
                : null
              : null
          }
        />
        <input
          onChange={(e) => respond(e.target.value, DateTime.Time)}
          className="Date"
          type="time"
          defaultValue={
            answer_written !== undefined
              ? answer_written["time"] !== undefined
                ? answer_written["time"]
                : null
              : null
          }
        />
      </div>
    );
  } else return <div></div>;
};

export default Date;
