# preact-nativescript-components[![Build Status](https://travis-ci.org/Hizoul/preact-nativescript-components.svg?branch=master)](https://travis-ci.org/Hizoul/preact-nativescript-components) [![Coverage Status](https://coveralls.io/repos/github/Hizoul/preact-nativescript-components/badge.svg?branch=master)](https://coveralls.io/github/Hizoul/preact-nativescript-components?branch=master) [![dependencies](https://david-dm.org/Hizoul/preact-nativescript-components.png)](https://david-dm.org/Hizoul/preact-nativescript-components) [![npm](https://img.shields.io/npm/v/preact-nativescript-components.svg)](https://www.npmjs.com/package/preact-nativescript-components)

preact-nativescript-components was made to use JSX-Syntax for [preact-to-nativescript](https://github.com/Hizoul/preact-to-nativescript) components


# Usage
You should mostly be able to import and use the NativeScript UI Components by name e.g.

```javascript
import application from "tns-core-modules/application"
import { render } from "preact-to-nativescript"
import {
  ActionBar, ActionItem, Button, Label, Page, ScrollView, StackLayout
} from "preact-nativescript-components"

application.start({
  create: () => {
    return render(
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
  }
})
```

# List of importable Components
- Layouts
  - [AbsoluteLayout](https://docs.nativescript.org/cookbook/ui/layouts/absolute-layout)
  - [DockLayout](https://docs.nativescript.org/cookbook/ui/layouts/dock-layout)
  - [FlexboxLayout](https://docs.nativescript.org/cookbook/ui/layouts/flexbox-layout)
  - [GridLayout](https://docs.nativescript.org/cookbook/ui/layouts/grid-layout)
  - [StackLayout](https://docs.nativescript.org/cookbook/ui/layouts/stack-layout)
  - [WrapLayout](https://docs.nativescript.org/cookbook/ui/layouts/wrap-layout)
- [ActionBar / ActionItem / NavigationButton](https://docs.nativescript.org/cookbook/ui/action-bar)
- [ActivityIndicator](https://docs.nativescript.org/cookbook/ui/activity-indicator)
- [Button](https://docs.nativescript.org/cookbook/ui/button)
- [DatePicker](https://docs.nativescript.org/cookbook/ui/date-picker)
- [HtmlView](https://docs.nativescript.org/cookbook/ui/html-view)
- [Image](https://docs.nativescript.org/cookbook/ui/image)
- [Label](https://docs.nativescript.org/cookbook/ui/label)
- [ListPicker](https://docs.nativescript.org/cookbook/ui/list-picker)
- [ListView](https://docs.nativescript.org/cookbook/ui/list-view)
- [Page](https://docs.nativescript.org/cookbook/ui/page)
- [Placeholder](https://docs.nativescript.org/cookbook/ui/placeholder)
- [Progress](https://docs.nativescript.org/cookbook/ui/progress)
- [ScrollView](https://docs.nativescript.org/cookbook/ui/scroll-view)
- [SearchBar](https://docs.nativescript.org/cookbook/ui/search-bar)
- [SegmentedBar](https://docs.nativescript.org/cookbook/ui/segmented-bar)
- [Slider](https://docs.nativescript.org/cookbook/ui/slider)
- [Switch](https://docs.nativescript.org/cookbook/ui/switch)
- [TabView / TabViewItem](https://docs.nativescript.org/cookbook/ui/tab-view)
- [TextField](https://docs.nativescript.org/cookbook/ui/text-field)
- [TextView](https://docs.nativescript.org/cookbook/ui/text-view)
- [TimePicker](https://docs.nativescript.org/cookbook/ui/time-picker)
- [WebView](https://docs.nativescript.org/cookbook/ui/web-view)