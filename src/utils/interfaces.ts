//🔥🔥🔥
export interface Product {
  name: string;
  brand: string;
  color: string;
}
//extends: kế thừa các thuộc tính của product và thêm thuộc tính mới
export interface ProductNewFeature extends Product {
  speed?: string;
}
// interaction type
// tạo 1 type mới có tất cả Product và ProductNewFeature
export type FinalProduct = Product & ProductNewFeature;

//🔥🔥🔥
// ngoài ra interface còn có thể merger 2 interface cùng tên thành 1
// nhưng không nên dùng cách này, nếu muốn phát triển cái gì mới thì vẫn nên dùng extend
export interface Product2 {
  name: string;
}
export interface Product2 {
  brand: string;
  color?: string;
}

export interface ICard {
  title: string;
  description: string;
  image: string;
  link: string;
}
