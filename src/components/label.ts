import { FunctionalComponent } from "preact"
import h from "../h"
import { CallbackFunc, IMaybeChildren } from "../types"

export interface ILabel {
  text?: string
  onTextChanged?: CallbackFunc
}

const Label: FunctionalComponent<ILabel> = (props) => {
  return h("label", props, props !== undefined ? props.children : null)
}

export default Label
