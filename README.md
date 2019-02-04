This project is a proof of concept on how to create a library of reusable, self-documenting react components.

## Create a Component

Create a directory with the same name as your component.  This allows the pre-build script to find your component and compile metadata on it. Ex, MyComponent -> MyComponent.js

### index.js

Create a file in your component directory called `index.js`.  It should contain the export statement 

`export {default} from './MyComponent';`

This helps to shorten import statements and make them less redundant.

### material-ui

Use Google's material-ui library for smaller building blocks: [Material-UI](https://material-ui.com/)

Declare your props on component.PropTypes. The build script will read these and display the expected props and their types in a table.

### Examples

Under docs -> examples, create a folder with the same name as your component, and create implementations for your component.  Be thorough and show all different possible states.

The build scripts will throw an error if there is a component without an example.

## How it works

### generateComponentData.js

When the application runs, a build script will extract all of the component code and store it in `config -> componentData.js`. The documentation site reads from this file to build each component page.  The scripts section of package.json shows the build process.

## Architecture

![Component Architecture](https://github.com/cecilydantam/component-library/blob/master/Component-Architecture.png)