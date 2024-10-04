export const getImageURL = (src: string) => {
  return new URL(`../assets/${src}`, import.meta.url).href;
}