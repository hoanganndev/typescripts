//function overloading
// function have a same name, same amount or different amount parameter, different type and same or diffrent return  type
// function overloading rất ít được sử dụng trong typescript

function total(a: number, b: number): number;
function total(a: string, b: string): string;
function total(a: any, b: any) {
  return a + b;
}

// total(5, 7); //12
// total("a", "b"); //ab

// Ví dụ:

// Không dùng overloading
interface ICoodinate {
  x: number;
  y: number;
}

const parseCoodinateFromObject = (obj: ICoodinate): ICoodinate => {
  return { ...obj };
};
const parseCoodinateFromNumber = (x: number, y: number): ICoodinate => {
  return { x, y };
};

// cùng mục đích trả về 10 và 20 thì viết kiểu này rất dài

// parseCoodinateFromObject({ x: 10, y: 20 });
// parseCoodinateFromNumber(10, 20);

// dùng overloading
//assertions: dùng as
interface ICoodinate2 {
  x: number;
  y: number;
}
function parseCoodinate(obj: ICoodinate2): ICoodinate2;
function parseCoodinate(x: number, y: number): ICoodinate2;
function parseCoodinate(arg1: any, arg2?: any): ICoodinate2 {
  let coord = { x: arg1 as number, y: arg2 as number };
  if (typeof arg1 === "object") {
    coord = { ...(arg1 as ICoodinate2) };
  } else {
    coord = { x: arg1 as number, y: arg2 as number };
  }
  return coord;
}

// parseCoodinate({ x: 10, y: 20 });
// parseCoodinate(10, 20);

//🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
//nomal function
function addNumbers(a: number, b: number) {
  return a + b;
}

//arrow function
const addStrings = (a: string, b: string) => {
  return `${a} ${b}`;
};

//default parameters
const addNumberWithDefaultPrams = (a: number = 10, b: number = 20) => {
  return a + b;
};

addNumberWithDefaultPrams(); //30

//union types
const format = (title: string, desc: string, amount: string | number) => {
  return `${title} ${desc} ${amount}`;
};

format("marcus", "developer", 123);
format("marcus", "developer", "123");

//void function
const contact = (email: string, phone: number) => {
  console.log(">>> check email,phone", email, phone);
};

//promise functions
const fetchData = (url: string): Promise<string> => {
  return Promise.resolve(`get data from ${url}`);
};

//rest parameters
const information = (id: number, ...names: string[]) => {
  return `${id} ${names.join("")}`;
};

information(1, "marcus", "dev"); //["marcus", "dev"]

//with callback
const handleFile = (text: string, callback: () => void) => {
  console.log(text);
  callback();
};

//function params with params
type UpdateArray = (n: number) => number; // function as types
const handleUpdateArray = (numbers: number[], update: UpdateArray): number[] => {
  return numbers.map(item => update(item));
};
handleUpdateArray([1, 2, 3], n => n + 5); //5 10 15

//function return function

const handleValue = (val: number): ((n: number) => number) => {
  return (n: number): number => n * val;
};

const value = handleValue(5); // return function
console.log(">>> check value", value(10)); //50
