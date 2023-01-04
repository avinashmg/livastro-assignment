import { useContext } from "react";
import { Context } from "../../Context";

const Radio = () => {
  const { answer, index, questions, setAnswer } = useContext<any>(Context);
  if (questions !== undefined) {
    const options = questions[index].questionoption;
    const questionid = questions[index].questionid;
    const answer_selected = answer[questionid];

    const respond = (value: string) => {
      let _answer = answer;
      _answer[questionid] = value;
      setAnswer(_answer);
    };
    return (
      <div>
        {options.map((option: any) => (
          <div key={option.optionid.toString()}>
            <input
              onClick={() => respond(option.optionvalue)}
              type="radio"
              name={questions[index].questionid}
              value={option.optionid}
              defaultChecked={answer_selected === option.optionvalue}
            />
            {option.optionvalue}
          </div>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Radio;
