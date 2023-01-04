import { useContext } from "react";
import { Context } from "../../Context";

const Text = () => {
  const { answer, index, questions, setAnswer } = useContext<any>(Context);
  if (questions !== undefined) {
    const questionid = questions[index].questionid;
    const answer_written = answer[questionid];

    const respond = (value: string) => {
      let _answer = answer;
      _answer[questionid] = value;
      setAnswer(_answer);
    };
    return (
      <div>
        <textarea
          className="Text"
          onChange={(e) => respond(e.target.value)}
          placeholder="Your response"
          defaultValue={answer_written ? answer_written : ""}
        ></textarea>
      </div>
    );
  } else return <div></div>;
};

export default Text;
