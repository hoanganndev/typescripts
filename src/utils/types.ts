export type Age = 18 | 19 | 20; // khi dùng kiểu Age thì tuổi chỉ có thể là 18 hoặc 19 hoặc 20

// Union types: typeA | typeB

// Intersection types:  typeA & typeB
interface IBusinessPartner {
  name: string;
  credit: number;
}
interface IIdentity {
  id: number;
  name?: string;
}
interface IContact {
  email: string;
  phone: string;
}

type Employee = IIdentity & IContact;
type Customer = IBusinessPartner & IContact;
type Other = IContact | IIdentity;

let marcusDev: Employee = {
  email: "marcus@gmail.com",
  phone: "123",
  id: 123,
};

// Type casting: as
// covert element sang type Khác , sử dụng nhiều trong react component, liên quan đến dom

// Type assertion: as
// xem 1 giá trị nào đó như là 1 type mà mình muốn
