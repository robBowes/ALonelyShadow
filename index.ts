onload = () => document.querySelectorAll("section").forEach(addEventListeners)

const addEventListeners = (element: HTMLElement) => {
  element.children[0].addEventListener("click", makeVisible)
  element.children[1].addEventListener("click", makeInvisible)
}

const makeVisible: EventListener = (event) => {
  const section = (event.srcElement as HTMLButtonElement)
    .parentElement as HTMLDivElement
  const article = section.children[1] as HTMLDivElement
  article.style.opacity = "1"
  article.style.pointerEvents = "auto"
}

const makeInvisible = (event: Event) => {
  const src = event.srcElement as HTMLDivElement
  src.style.opacity = "0"
  src.style.pointerEvents = "none"
}
