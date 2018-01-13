import componentMaker from "./maker"

const DatePicker = componentMaker<any>("datePicker")
const TimePicker = componentMaker<any>("timePicker")
const ListPicker = componentMaker<any>("listPicker")

export {
  DatePicker, TimePicker, ListPicker
}
