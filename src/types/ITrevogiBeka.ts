type ITrevogiBekaData = {
  testTitle: string;
  idTitle: string;
  instruction: string;
  items: {
    [key: string]: ITrvogiBekaItem;
  };
  mapping: {
    [key: string]: number;
  };
}

type ITrvogiBekaItem = {
  question: string;
  vars: [string, string][];
}