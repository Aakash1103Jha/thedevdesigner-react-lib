# React UI Component Library

https://www.npmjs.com/package/thedevdesigner-react-lib

A collection of reusable React UI components, by yours truly, thedevdesigner.

Right now, I am coming up with a list of simple components to add in this package.

## Usage

Run `npm i --save thedevdesigner-react-lib` in your project root (that contains the `package.json` file) to get started.

## Example

```javascript
import { Button } from 'thedevdesigner-react-lib'
...
// A simple button with just mandatory lable
// all other props take default values

<Button label="Click Me" />

// A customised button with values provided for optional props
<Button
    label = 'Hello World'
    size = 'lg'
    btnType = 'primary'
    onClick = { onClickHandler }
    rounded = 'soft'
    isLoading = { true }
    loadingIcon = { <SomeLoaderComponent/> }
/>
```
