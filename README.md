![Example](http://archakov.im/uploads/react-shnyaga-1.gif)

**Shnyaga** - is a switch ui component for React.

## Example
**[Visit example](https://htmlpreview.github.io/?https://github.com/Archakov06/react-shnyaga/blob/master/example/dist/index.html)**

## Installation
```bash
npm install react-shnyaga
```

## Usage
```js
import React from 'react'
import Shnyaga from 'react-shnyaga'
React.render(<Shnyaga />, document.getElementById('root'))
```

## Props
The component takes the following props.

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>checked</td>
          <td>Boolean</td>
          <td>false</td>
          <td>whether switch is checked</td>
        </tr>
        <tr>
          <td>onClick</td>
          <td>Function</td>
          <td>() => {}</td>
          <td>called when switch is clicked</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>switch is disabled</td>
        </tr>
        <tr>
          <td>className</td>
          <td>String</td>
          <td></td>
          <td>custom class name</td>
        </tr>
        <tr>
          <td>offColor</td>
          <td>Color</td>
          <td>#e6e6e6</td>
          <td>`Off` background color</td>
        </tr>
        <tr>
          <td>onColor</td>
          <td>Color</td>
          <td>#468cff</td>
          <td>`On` background color</td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>normal</td>
          <td>Switch size (default: normal)</td>
        </tr>
    </tbody>
</table>

## Contacts
* 	**E-Mail**
	<hello@archakov.im>
* 	**Website**
	<http://archakov.im>

## License
Now licensed under the MIT License: <http://deuxhuithuit.mit-license.org>
