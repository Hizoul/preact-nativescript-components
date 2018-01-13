import * as renderToJson from "preact-render-to-json"
import {
  ActionBar, ActionItem, Button, Label, Page, ScrollView, StackLayout
} from "../src"
import h from "../src/h"

test("README Example Render", () => {
  expect(
    renderToJson(
      <Page>
        <ActionBar>
          <StackLayout>
            <Label>Custom Header</Label>
          </StackLayout>
          <ActionItem text="act" />
        </ActionBar>
        <StackLayout>
          <Label>PageContent</Label>
          <Button text="Button" />
        </StackLayout>
      </Page>
    )
  ).toMatchSnapshot("readme render")
})
