export enum QType {
  Radio,
  Date,
  Textarea,
  Checkbox,
}

export enum DateTime {
  Date = "date",
  Time = "time",
}
export interface QOption {
  optionid: number;
  optionvalue: string;
  price: number;
  optionaction: string;
  selected: boolean;
  subquestion: [];
}
export interface Question {
  questionid: number;
  question: string;
  questiontype: QType;
  attributetype: number;
  validation: boolean;
  questionoption: QOption[];
}
