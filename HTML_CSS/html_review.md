


## CSS Attributes

## Linking a stylesheet

```html
<link rel="stylesheet" type="text/css" href="./styles"/> 
```

## 

&nbsp;   
## CSS Box Model:

The model helps to understand the relationship between margin, padding, border, the width and the height of the elements.

* Content: The text, image, icon etc... contained by the html element
* Margin: It lies outside the box and is basically used to separate itself from other markup elements.
* Border: It is the border of our box, that also lies outside but before margin.
* Padding: Lies inside of the box, creates inner space in the box when used. It lies after the border.


&nbsp;   
The following figure illustrates the box model:

<p align="center">
  <img src='../bootstrap/assets/img/box-model.jpeg'/>
</p>
&nbsp; 

Calculating net height & width of the box:

Margin, border and padding – altogether make the overall width and height of our box:

* Width + Left margin + Right margin + Left border + Right border + Right padding + Left padding

The height of the box can be calculated using this way:

* Height + Top margin + Bottom margin + Top border + Bottom border + Top padding + Bottom padding

&nbsp;   
## Box Sizing:

Syntax: box-sizing: content-box|border-box|initial|inherit;

* Content-Box: Default. The width and height properties (and min/max properties) includes only the content. Border and padding are not included

* Border-Box: The width and height properties (and min/max properties) includes content, padding and border

```css
body {
    box-sizing: border-box;
}
```