interface Sizes {
  [key: string]: string;
}

const mediaSizes: Sizes = {
  xs: "575.98px",
  sm: "767.98px",
  md: "991.98px",
  lg: "1199.98px",
};

const sizes = {
  up() {},

  down(size: keyof Sizes): string {
    return `@media (max-width: ${mediaSizes[size]})`;
  },
};

export default sizes;
