import componentMaker from "./maker"

const AbsoluteLayout = componentMaker<any>("absoluteLayout")
const DockLayout = componentMaker<any>("dockLayout")
const FlexboxLayout = componentMaker<any>("flexboxLayout")
const GridLayout = componentMaker<any>("gridLayout")
const StackLayout = componentMaker<any>("stackLayout")
const WrapLayout = componentMaker<any>("wrapLayout")

export {
  AbsoluteLayout, DockLayout, FlexboxLayout, GridLayout, StackLayout, WrapLayout
}
