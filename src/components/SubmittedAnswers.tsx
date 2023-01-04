import { useContext } from "react";
import { Context } from "../Context";
import Card from "./Card";

// Display the answers provided in card elements
const SubmittedAnswers = () => {
  const { questions, answer } = useContext<any>(Context);
  if (questions !== undefined) {
    return (
      <div>
        {questions.map((question: any) => (
          <div key={question.questionid}>
            <Card>
              <p className="Question">{question.question}</p>
              <p>
                <span className="Solid">Your Answer:</span>
                {answer[question.questionid]
                  ? answer[question.questionid]
                  : "Not Answered"}
              </p>
            </Card>
          </div>
        ))}
      </div>
    );
  } else return <div></div>;
};

export default SubmittedAnswers;
