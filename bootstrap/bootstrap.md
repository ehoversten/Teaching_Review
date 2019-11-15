# What is Bootstrap and why would we choose to use it?

### Bootstrap is a popular front-end component library. Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Bootstrap gives us `predefined CSS` styles.

&nbsp; 
## Advantages:
* Browser Compatibility   (Link to compatible browsers)
* Fast Development and Prototyping
* Useful for developers without strong design skills
* Easy to Learn
* Responsive Layouts 

&nbsp; 
## Installation:
* Include the CDN (Content Delivery Network) Link                `** Preferred Method **`
* Download and Include (* if you don't have internet or working offline, use this method)
* Package Managers (NPM, Yarn)

&nbsp; 
## UI Utilities and Classes
* Grid System - FLEXBOX vs. CSS-GRID
* Text and Typography
* Positioning
* Spacing
* Sizing
* Align Content
* Colors
* Images
* Responsive Utilities (Mobile First)
* and more ...

&nbsp; 
## CSS Components
* Forms and Input Groups
* Tables
* List Groups
* Cards
* Progress Bars
* Alerts
* Navbars and Menus
* Buttons and Button Groups
* Pagination
* Media Objects
* Jumbotron
* Badges

&nbsp; 
## Javascript Widgets
* Carosel Slider
* Collapsible Accordian
* Modals
* Tooltips
* Popovers
* ScrollSpy 

&nbsp; 
## What do we need to start?
* Your favorite IDE (VScode, Atom, Sublime)
* Live Server Extension (Recommended)
* Emmet Extension (Recommended)
* An HTML file to code in (usually `index.html`)

&nbsp; 
## The `Box-Model`

The CSS box model acts as a `container` which has the ability to modify properties including `borders`, `margin`, `padding` and the `content` itself. It is helpful to create the design and layout of web pages. The web browser renders every element as a rectangular box according to the CSS box model. The Box-Model has multiple properties in CSS. 

Some of them are as follows:

* Margins
* Borders
* Padding
* Content

The following figure illustrates the box model:

<p align="center">
  <img src='./assets/img/box-model.jpeg'/>
</p>
&nbsp; 

#### So how do we calculate the size our content will actually take up?
* Element Width + Padding + Border + Margin = actual visible/rendered `width` of an element's box

* Element Height + Padding + Border + Margin = actual visible/rendered `height` of an element's box

&nbsp;   

## CSS Font Sizing: `Pixels` vs `Em` vs `Rem` vs `Percent` vs `Viewport Units`

Each is a unit of length used to define the size of an element on a webpage. You can use them across on divs, margins, padding, \<h> tags, \<p> tags, etc ...

* Pixel - Pixels are `fixed-size` units and do not change based on the size of the viewport. One pixel is equal to one dot on the computer screen (the smallest division of your screen’s resolution).
    * `The Problem...?` Pixel Size differs on screen sizes
* Em - Em is a `flexible`, scalable unit that is converted by the browser into pixel valid values.
* Rem - Rem is `relative` to the font size of the `root element` (html element). 
    * For example: If the font-size of the html element is 16 px, then 1rem = 16 px.
* Percent (%) - Percent value is always relative to another value, be it the element’s parent value or from another property of the element itself. 
    * Percentages are used widely in responsive design
* Viewport Units (vw, vh) - Viewport width and height properties are relative to the width/height of the current viewport size.   

    * 1vw = 1% of viewport width
    * 1vh = 1% of viewport height 


Resources: 
* https://j.eremy.net/confused-about-rem-and-em/
* https://kyleschaeffer.com/css-font-size-em-vs-px-vs-pt-vs-percent

&nbsp;  
## Responsive Styling with Bootstrap CSS Media-Queries

#### What is Responsive Design?
* Responsive web design is creating web layouts that can adapt to a multitude of displays and devices.

&nbsp;   
We use a handful of media queries to create breakpoints for our web layouts. These breakpoints are based on minimum viewport widths and allow us to scale elements as the viewport changes.

&nbsp;   
#### From Bootstrap Documentation: Common break point cases
```css
// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
```


#
&nbsp;   

## Resources:

FlexBox:
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background
* https://www.youtube.com/watch?v=k32voqQhODc&t=1s

CSS-Grid:
* https://css-tricks.com/snippets/css/complete-guide-grid/

View Port Units: 
* https://www.youtube.com/watch?v=du6gnsImsLU&list=PLpcSpRrAaOaqfJ5uIRikm04Gd5X5aiqSB&index=23