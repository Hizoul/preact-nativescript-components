import { FunctionalComponent } from "preact"
import { Preact } from "preact-to-nativescript"

function componentMaker<T>(name: string): FunctionalComponent<T> {
  return (props) => Preact.h(name, props, props === undefined ? undefined : props.children)
}

export default componentMaker
