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
// rounded and/or loadingIcon props are mandatory when
// isRounded and/or isLoading is true, respectively, as shown below

<Button
    label = 'Hello World'
    size = 'lg'
    btnType = 'primary'
    onClick = { onClickHandler }
    isRounded = { true }
    rounded = 'soft'
    isLoading = { true }
    loadingIcon = { <SomeLoaderComponent/> }
/>
```
