export function rootVariables (colors: {
  headerBgColor: string,
  bgColor: string,
  primaryColor: string,
  secondaryColor: string,
  primaryTextColor: string
}): void {
  const { bgColor, headerBgColor, primaryColor, primaryTextColor, secondaryColor } = { ...colors }
  const style = document.createElement("style")
  style.textContent = `
  :root {
    --header-bg-color: ${headerBgColor};
    --bg-color: ${bgColor};
    --primaryColor: ${primaryColor};
    --secondaryColor: ${secondaryColor};
    --primaryTextColor: ${primaryTextColor};
  }
  `
  document.head.append(style)
}
