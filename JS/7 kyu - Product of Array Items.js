function product(values) {
  return (values === null || values.length === 0) ? null : values.reduce((a, b) => a * b);
}