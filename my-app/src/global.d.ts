// src/global.d.ts
declare module "*.css" {
  const css: { [key: string]: string };
  export default css;
}
