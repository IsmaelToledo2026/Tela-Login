function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // 1. Pegar a tag da imagem
  const img = document.querySelector("#profile img")

  // 2. Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    // Se tiver dark mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
