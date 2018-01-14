import componentMaker from "./maker"

const ActionBar = componentMaker<any>("actionBar")
const ActionItem = componentMaker<any>("actionItem")
const NavigationButton = componentMaker<any>("navigationButton")

export default ActionBar
export {
  ActionItem, NavigationButton
}
