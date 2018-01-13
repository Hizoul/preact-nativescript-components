import componentMaker from "./maker"

const WebView = componentMaker<any>("webView")
const HtmlView = componentMaker<any>("htmlView")
const ListView = componentMaker<{items: any[]} & any>("listView")
const Placeholder = componentMaker<{items: any[]} & any>("placeholder")

export {
  WebView, HtmlView, ListView, Placeholder
}
