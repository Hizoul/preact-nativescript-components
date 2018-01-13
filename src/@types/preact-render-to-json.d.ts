import * as preact from "preact"

type prtj = (node: JSX.Element) => any

declare module "preact-render-to-json" {
  export = prtj
}
