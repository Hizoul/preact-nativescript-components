import componentMaker from "./maker"

const ActionBar = componentMaker<any>("actionBar")
const ActionItem = componentMaker<any>("actionItem")

export default ActionBar
export {
  ActionItem
}
