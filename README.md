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