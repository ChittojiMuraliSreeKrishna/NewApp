interface IPeople {
  id: number;
  username: string;
  password: string;
}

type PeopleState = {
  peoples: People[];
};

type PeopleAction = {
  type: string;
  people: IPeople;
};

type DispatchType = (args: PeopleAction) => PeopleAction;
