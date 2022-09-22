import React from "react";
// union types: |

// 1 mảng chứa object: {}[]=[{}]
const user: {
  firstName: string;
  lastName: string;
  age: number;
  isStudent: boolean;
  school: string[];
  scores: number[];
  year: (string | number)[];
} = {
  firstName: "Nguyen",
  lastName: "Hoang An",
  age: 29,
  isStudent: false,
  school: ["Bach khoa", "Cong nghe thong tin"],
  scores: [1, 2, 3, 4, 5],
  year: [2022, "2022"],
};

const reviews: {
  name: string;
  image: string;
  starts: number;
  skills: {
    frontend: string;
    backend: string;
    isFullStack: boolean;
  };
}[] = [
  {
    name: "marcus",
    image: "",
    starts: 5,
    skills: {
      frontend: "reactjs",
      backend: "nodejs",
      isFullStack: true,
    },
  },
  {
    name: "hoang an",
    image: "",
    starts: 3,
    skills: {
      frontend: "vuejs",
      backend: "",
      isFullStack: false,
    },
  },
  {
    name: "nguyen",
    image: "",
    starts: 4,
    skills: {
      frontend: "laravel",
      backend: "",
      isFullStack: false,
    },
  },
];

const StructuralTypes = () => {
  return <div></div>;
};

export default StructuralTypes;
