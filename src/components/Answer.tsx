import { useContext } from "react";
import { Context } from "../Context";
import Checkbox from "./input_components/Checkbox";
import Date from "./input_components/Date";
import Radio from "./input_components/Radio";
import Text from "./input_components/Text";
const Answer = () => {
  const { questions, index } = useContext<any>(Context);
  if (questions !== undefined) {
    // Render the options according to the type of question
    switch (questions[index].questiontype) {
      case "Radio":
        return <Radio></Radio>; //Radio component
      case "Date":
        return <Date></Date>; // Date component
      case "Textarea":
        return <Text></Text>; //Text input commponent
      case "Checkbox":
        return <Checkbox></Checkbox>; // Checkbox component
    }
  }
  return <div></div>;
};

export default Answer;
