import componentMaker from "./maker"

const SearchBar = componentMaker<any>("webView")
const SegmentedBar = componentMaker<any>("htmlView")
const SegmentedBarItem = componentMaker<any>("segmentedBarItem")

export {
  SearchBar, SegmentedBar, SegmentedBarItem
}
