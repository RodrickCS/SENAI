const func = () => {
  const first = { x: 1, y: 2, z: 3 };
  const second = Object.assign({ x: 3, z: 4, w: 5 }, first);
  console.log(second.z + "</br>");
  console.log(second.w + "</br>");
  console.log(second.x);
};

3
5
1