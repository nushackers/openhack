import Text from "./Text";
import classnames from "classnames";

const Question = ({ question, answer }) => (
  <div className={answer ? "my-5" : "mt-5 mb-2"}>
    <Text className="font-medium mb-2">{question}</Text>
    {answer && <Text>{answer}</Text>}
  </div>
);

export default Question;
