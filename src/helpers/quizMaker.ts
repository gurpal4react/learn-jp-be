type QuestionType = {
  question: string;
  answer: string;
  options?: string[];
  type?: string;
};

type TypeBasedOptionsType = { [key: string]: QuestionType[] };

export const quizMaker = (data: QuestionType[], limit?: number) => {
  if(!data.length) return []
  const shuffledArray = limit
    ? data.sort(() => 0.5 - Math.random()).splice(0, limit)
    : data.sort(() => 0.5 - Math.random());
  let typeBasedOptions: TypeBasedOptionsType | undefined = undefined;
  if (Object.keys(data[0]).includes("type")) {
    typeBasedOptions = data.reduce<TypeBasedOptionsType>(
      // eslint-disable-next-line
      (p, c) => {
        if (c.type) {
          if (p[c.type]) {
            p[c.type].push(c);
          } else {
            p[c.type] = [c];
          }
        }
        return p;
      },
      {}
    );
  }
  const questions: QuestionType[] = shuffledArray?.map((question) => {
    const optionData =
      typeBasedOptions &&
      question.type &&
      typeBasedOptions[question.type].length > 3
        ? typeBasedOptions[question.type]
        : data;
    const options =
      typeBasedOptions &&
      question.type &&
      typeBasedOptions[question.type].length <= 4
        ? typeBasedOptions[question.type]?.map((data) => data.answer)
        : [question.answer];
    let option = question.answer;
    while (options.length < 4) {
      while (options.includes(option)) {
        option =
          optionData[Math.floor(Math.random() * optionData.length)].answer;
      }
      options.push(option);
    }
    const newQuestion = {
      question: question.question,
      answer: question.answer,
      options: options.sort(() => 0.5 - Math.random()),
    };
    return newQuestion;
  });
  return questions;
};
