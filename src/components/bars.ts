import componentMaker from "./maker"

const SearchBar = componentMaker<any>("searchBar")
const SegmentedBar = componentMaker<any>("segmentedBar")
const SegmentedBarItem = componentMaker<any>("segmentedBarItem")

export {
  SearchBar, SegmentedBar, SegmentedBarItem
}
