import { createContext, useState, useEffect } from "react";
import { Question } from "./types";
import axios from "axios";

const Context = createContext({});

const Provider = (props: any) => {
  const [questions, setQuestions] = useState<Question[] | undefined>(undefined);
  const [index, setIndex] = useState<number>(0);
  const [answer, setAnswer] = useState<Object>({});
  const [submitted, setSubmit] = useState(false);
  useEffect(() => {
    axios
      .get("/api/response.json")
      .then((res) => res.data)
      .then((data) => {
        setQuestions(data.questions);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        questions,
        index,
        answer,
        submitted,
        setIndex,
        setAnswer,
        setSubmit,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export { Provider, Context };
