import * as renderToJson from "preact-render-to-json"
import {
  AbsoluteLayout, ActionBar, ActionItem, ActivityIndicator, Button, DatePicker,
  DockLayout, FlexboxLayout, GridLayout,
  HtmlView,
  Image,
  Label,
  ListPicker,
  ListView,
  NavigationButton,
  Page,
  Placeholder,
  Progress,
  ScrollView,
  SearchBar,
  SegmentedBar,
  SegmentedBarItem,
  Slider, StackLayout,
  Switch,
  TabView,
  TabViewItem, TextField,
  TextView,
  TimePicker,
  WebView,
  WrapLayout
} from "../src"
import h from "../src/h"

test("All Components rendered in one", () => {
  expect(
    renderToJson(
      <Page>
        <ActionBar>
          <StackLayout>
            <Label>Custom Header</Label>
          </StackLayout>
          <ActionItem text="act" />
        <NavigationButton text="mybut" />
        </ActionBar>
        <StackLayout>
          <ActivityIndicator />
          <AbsoluteLayout />
          <DockLayout />
          <FlexboxLayout />
          <GridLayout />
          <Button />
          <DatePicker />
          <HtmlView />
          <Image />
          <Label />
          <ListPicker />
          <ListView />
          <Page />
          <Placeholder />
          <Progress />
          <ScrollView />
          <SearchBar />
          <SegmentedBar />
          <SegmentedBarItem />
          <Slider />
          <Switch />
          <TabView />
          <TabViewItem />
          <TextField />
          <TextView />
          <TimePicker />
          <WebView />
          <WrapLayout />
        </StackLayout>
      </Page>
    )
  ).toMatchSnapshot("all componts rendered in one")
})
