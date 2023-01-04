import { useContext } from "react";
import { Context } from "../Context";
import Answer from "./Answer";
import Card from "./Card";

function Question() {
  const { questions, index, setIndex, setSubmit } = useContext<any>(Context);
  return (
    <div>
      <Card>
        <span className="Solid">
          {questions ? questions[index].question : ""}
        </span>
        <div className="AnswerSection">
          <Answer></Answer>
        </div>
        <div className="BottomNavigation">
          <button
            disabled={index === 0 ? true : false}
            onClick={() => {
              setIndex(index - 1);
            }}
            className="ButtonPrimary"
          >
            Previous
          </button>
          <button
            hidden={
              questions !== undefined
                ? index === questions.length - 1
                  ? true
                  : false
                : false
            }
            onClick={() => setIndex(index + 1)}
            className="ButtonPrimary"
          >
            Next
          </button>
          <button
            onClick={() => setSubmit(true)}
            hidden={
              questions !== undefined
                ? index === questions.length - 1
                  ? false
                  : true
                : false
            }
            className="ButtonPrimary"
          >
            Submit
          </button>
        </div>
      </Card>
    </div>
  );
}

export default Question;
