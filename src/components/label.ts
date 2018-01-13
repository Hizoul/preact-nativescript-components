import { CallbackFunc } from "../types"
import componentMaker from "./maker"
export interface ILabel {
  text?: string
  onTextChanged?: CallbackFunc
}

const Label = componentMaker<ILabel & any>("label")

export default Label
