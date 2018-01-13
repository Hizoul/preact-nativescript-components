import componentMaker from "./maker"

const TextView = componentMaker<any>("textView")
const TextField = componentMaker<any>("textField")
const Slider = componentMaker<any>("slider")
const Switch = componentMaker<any>("switch")

export {
  TextView, TextField, Slider, Switch
}
