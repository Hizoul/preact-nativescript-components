import componentMaker from "./maker"

const TabView = componentMaker<any>("tabView")
const TabViewItem = componentMaker<any>("tabViewItem")

export default TabView
export {
  TabView, TabViewItem
}
