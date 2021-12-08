import { TabContent, DestinationObject, CrewObject, TechnologyObject } from "./interfaces";

const hamburger: HTMLButtonElement = document.querySelector(".btn")!;
const menu: HTMLLIElement = document.querySelector(".nav__list")!;
const tabButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".main__tab-button")!;
let tabContent: TabContent;
async function fatchTabContent() {
    const response: Response = await fetch("/src/data.JSON");
    const data = await response;
    console.log(await data)
    //tabContent = await data;
    //localStorage.setItem('TabContent', await data);
}

function setContent(page: string, requestedContent: string): void {
    // will have to modify this part
    console.log(tabContent)
    //const pageContent: DestinationObject = tabContent[page]
}

function toggleMainMenu(): void {
    if (hamburger.classList.contains("btn--active")) {
        menu.classList.remove("nav__list--open");
        menu.classList.add("nav__list--close");
        hamburger.classList.remove("btn--active");
    }
    else {
        menu.classList.remove("nav__list--close");
        menu.classList.add("nav__list--open");
        hamburger.classList.add("btn--active");
    }
}

function showTabContent(e: Event): void {
    const clickedTabButton: any = e.target!;
    const tabButtonText: string = clickedTabButton.textContent
    if (!clickedTabButton.classList.contains("main__tab-button--active")) {
        tabButtons.forEach((tabButton: HTMLButtonElement) => {
            tabButton.classList.remove("main__tab-button--active")
        })
        setContent("destinations", tabButtonText);
        clickedTabButton.classList.add("main__tab-button--active");
    }
}

hamburger.addEventListener("click", toggleMainMenu);
tabButtons.forEach((tabButton: HTMLButtonElement) => {
    tabButton.addEventListener("click", showTabContent)
})
fatchTabContent();
