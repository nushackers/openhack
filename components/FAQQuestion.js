import { Text } from "./Text";

export const FAQQuestion = ({ question, answer }) => (
  <div className="my-5 last:mb-0">
    <Text className="font-medium mb-2">{question}</Text>
    {typeof answer === "string" ? <Text>{answer}</Text> : <>{answer}</>}
  </div>
);
