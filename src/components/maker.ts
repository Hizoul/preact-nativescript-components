import { FunctionalComponent } from "preact"
import { h } from "preact-to-nativescript"

function componentMaker<T>(name: string): FunctionalComponent<T> {
  return (props: any) => h(name, props, props === undefined ? undefined : props.children)
}

export default componentMaker
