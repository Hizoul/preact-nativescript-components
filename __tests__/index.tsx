import * as renderToJson from "preact-render-to-json"
import Label from "../src/components/label"
import h from "../src/h"

test("Label Render", () => {
  expect(
    renderToJson(<Label text={"my text"} />)
  ).toMatchSnapshot("label render")
})
