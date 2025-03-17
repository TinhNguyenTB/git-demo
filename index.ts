interface Student {
  id: string;
  name: string;
  age: {};
}

type Human = Pick<Student, "id" | "name">;

const init: Human[] = [
  { id: "dsdss", name: "huamna" },
  { id: "dsdss", name: "huamna" },
];
