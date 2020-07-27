type IBeznadBekaData = {
  testTitle: string;
  idTitle: string;
  instruction: string;
  items: {
    [key: string]: IBeznadBekaItem;
  };
}

type IBeznadBekaItem = {
  assertion: string;
  weightVariant: boolean;
}