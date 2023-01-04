import { useContext } from "react";
import { Context } from "../../Context";

const Checkbox = () => {
  const { answer, index, questions, setAnswer } = useContext<any>(Context);
  if (questions !== undefined) {
    const options = questions[index].questionoption;
    const questionid = questions[index].questionid;
    const answer_selected = answer[questionid];
    const checks: { [x: string]: boolean } = {};
    const respond = (value: string, checked: boolean) => {
      let _answer = answer;
      checks[value] = checked;
      let response: string = ""; // Answer to be stored in the state
      for (const key in checks) {
        const value = checks[key];
        if (value === true) {
          response = `${response} ${key},`; // Generate a string from all the checked values
        }
      }
      _answer[questionid] = response;
      setAnswer(_answer);
    };
    return (
      <div>
        {options.map(
          (
            option: any // Render checkbox for option in the options
          ) => (
            <div key={option.optionid.toString()}>
              <input
                defaultChecked={
                  answer_selected !== undefined
                    ? answer_selected[option.optionvalue]
                      ? answer_selected[option.optionvalue]
                      : false
                    : false
                }
                onChange={(e) => respond(e.target.value, e.target.checked)}
                type="checkbox"
                name={questionid}
                value={option.optionvalue}
              />
              {option.optionvalue}
            </div>
          )
        )}
      </div>
    );
  } else return <div></div>;
};

export default Checkbox;
