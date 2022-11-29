function fibRec(n) {
  if (n == 2) return [0, 1];

  let a = fibRec(n - 1);
  a.push(a[a.length - 1] + a[a.length - 2]);
  return a;
}

console.log(fibRec(8));
