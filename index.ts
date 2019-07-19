onload = function() {
  const sections: SectionList = getSections()
  sections.forEach(addEventListeners)
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

const addEventListeners = (element: HTMLElement) => {
  element.children[0].addEventListener("click", makeVisible)
  element.children[1].addEventListener("click", makeInvisible)
}

const getSections = () => Array.from(document.querySelectorAll("section"))
