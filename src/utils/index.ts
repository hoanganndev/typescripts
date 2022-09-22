import { Permission } from "./enums";
import { Age } from "./types";
import { Product, ProductNewFeature } from "./interfaces";

export const total = (a: number, b: number) => {
  return a + b;
};

// const variable: dataTypes = value
const age: number = 5;
const name: string = "marcus";
const isFrontend: boolean = true;

//🔥 Tuple: là 1 mảng cố định các phần tử và cố định các kiểu dữ liệu trong phần tử đó
const user: { name: string; age: number; isStudent: boolean; contact: [number, string] } =
  {
    name: "marcus dev",
    age: 30,
    isStudent: false,
    contact: [123, "123"], // sai nếu viết : contact: [ "123", 123]
  };
//🔥 enum
const user2: {
  name: string;
  age: number;
  isStudent: boolean;
  contact: [number, string];
  permission: Permission;
} = {
  name: "marcus dev",
  age: 30,
  isStudent: false,
  contact: [123, "123"],
  permission: Permission.ADMIN,
};
//🔥 any
const reviews: any[] = [
  {
    name: "marcus",
    image: "",
    starts: 5,
  },
  {
    name: "hoang an",
    image: "",
    starts: 3,
  },
];
//🔥 union: hoặc a hoặc b

const reviews2: {
  name: string;
  date: string | number;
}[] = [
  {
    name: "marcus",
    date: 99999999, // hoặc có thể sử dụng date:'99999'
  },
];
//🔥 literal : giá trị của biến chỉ sử dụng được những thứ đã được định nghĩa

const user3: {
  name: string;
  age: Age;
  isStudent: boolean;
  contact: [number, string];
  permission: Permission;
} = {
  name: "marcus dev",
  age: 20, // nếu đề 30 sẽ sai
  isStudent: false,
  contact: [123, "123"],
  permission: Permission.ADMIN,
};
//🔥 function
const total2 = (a: number, b: number) => {
  return a + b;
};

//🔥 void
// function không trả về giá trị => void

const total3 = (a: number, b: number) => {};

//🔥 unknow
let aNumber: unknown;
aNumber = 100;
if (typeof aNumber === "number") {
  aNumber.toFixed(1); // 100.0
}

//🔥 never :
/**
 * Không chứa 1 giá trị gì cả: contains no values
 * Thường đại diện cho 1 lỗi: represent return  type of function throw error
 * Hoặc 1 vòng lặp không dừng lại
 */

function raiseError(err: string): never {
  throw new Error(err);
}

function reject() {
  return raiseError("Error");
}

const forever = () => {
  while (true) {
    console.log("hello world");
  }
};

//🔥 Interface
const product: ProductNewFeature = {
  name: "orange",
  brand: "bachhoaxanh",
  color: "red",
};

const addProduct = (product: ProductNewFeature) => {
  //do something
};

addProduct(product);

//
