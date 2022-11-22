export const convertToPath = (title: string) => {
  return title.toLowerCase().replace(/\s/g, '-')
}
