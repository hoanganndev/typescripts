type ThreeDCoodinate = [x: number, y: number, z: number];

const add3DCoodinate = (a: ThreeDCoodinate, b: ThreeDCoodinate): ThreeDCoodinate => {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
};

add3DCoodinate([1, 100, 200], [200, 400, 600]);
