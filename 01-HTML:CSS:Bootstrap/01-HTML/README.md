#### 07/30/2019

#### Required File: [01-HTML](./index.HTML)

## Small Quiz

1. What does HTML stand for?

   - [ ] Hyperlinks and Text Markup Language
   - [ ] Home Tool Markup Language
   - [ ] Hypertext Markup Language

1. The correct HTML code for adding a link is:

   - [ ] `<link src="http://www.google.com">Google</link>`

   - [ ] `<a src=http://www.google.com>Google</a>`
   - [ ] `<href="http://www.google.com">Google</href>`
   - [ ] `<a href="http://www.google.com">Google</a>`

1. Which of the following is the largest heading size by default?

   - [ ] h0
   - [ ] h6
   - [ ] h1
   - [ ] h10

1. Which tag would you use to add an image.

   - [ ] `<jpg>`
   - [ ] `<a>`
   - [ ] `<pic>`
   - [ ] `<img>`

1. What is the correct HTML element for inserting a line break?

   - [ ] `<br>`
   - [ ] `<lb>`
   - [ ] `<break>`
   - [ ] `\n`

1. What is the correct HTML for adding a background color?

- [ ] `<body style="background-color:yellow">`
- [ ] `<background>yellow</background>`
- [ ] `<body bg="yellow">`
- [ ] `<body><background>yellow</background></body>`

## Example File Explained

- The `<!DOCTYPE html>` declaration defines this document to be HTML5

- The `<html>` element is the root element of an HTML page
- The `<head>` element contains meta information about the document
- The `<title>` element specifies a title for the document
- The `<body>` element contains the visible page content
- The `<figure>` element is used to mark up a photo in a document:
- The `<figcaption>` tag defined a caption for a `<figure>` element. Can be placed first or last child of the `<figure>`
- The `<p>` element defines a paragraph

## Basic Review

- What is HTML?

  - HTML is the standard markup language for creating Web pages.

- HTML stands for Hyper Text Markup Language

- HTML describes the structure of a Web page

- HTML consists of a series of elements

- HTML elements tell the browser how to display the - content

- HTML elements are represented by tags

- HTML tags label pieces of content such as "heading", - "paragraph", "table", and so on

- Browsers do not display the HTML tags, but use them to render the content of the page

- HTML tags are element names surrounded by angle brackets, e.g:. `<p>Hello!</p>`

- HTML tags that can have content come in pairs like `<p>` and `</p>`

- What are block elements?
  - A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).
    - address
    - article
    - aside
    - blockquote
    - canvas
    - dd
    - div
    - dl
    - dt
    - fieldset
    - figcaption
    - figure
    - footer
    - form
    - h1-h6
    - header
    - hr
    - li
    - main
    - nav
    - noscript
    - ol
    - p
    - pre
    - section
    - table
    - tfoot
    - ul
    - video
- What is an Inline element?
  - An inline element does not start on a new line and only takes up as much width as necessary.
    - a
    - abbr
    - acronym
    - b
    - bdo
    - big
    - br
    - button
    - cite
    - code
    - dfn
    - em
    - i
    - img
    - input
    - kbd
    - label
    - map
    - object
    - output
    - q
    - samp
    - script
    - select
    - small
    - span
    - strong
    - sub
    - sup
    - textarea
    - time
    - tt
    - var

## Example HTML skeleton

  <div style="width:99%;border:1px solid grey;padding:3px;margin:0;background-color:#ddd">&lt;html&gt;
  <div style="width:90%;border:1px solid grey;padding:3px;margin:20px">&lt;head&gt;
  <div style="width:90%;border:1px solid grey;padding:5px;margin:20px">&lt;title&gt;Page title&lt;/title&gt;
  </div>
  &lt;/head&gt;
  </div>
  <div style="width:90%;border:1px solid grey;padding:3px;margin:20px;background-color:#ddd">&lt;body&gt;
  <div style="width:90%;border:1px solid grey;padding:3px;margin:20px;background-color:#fff">
  <div style="width:90%;border:1px solid grey;padding:5px;margin:20px">&lt;h1&gt;This is a heading&lt;/h1&gt;</div>
  <div style="width:90%;border:1px solid grey;padding:5px;margin:20px">&lt;p&gt;This is a paragraph.&lt;/p&gt;</div>
  <div style="width:90%;border:1px solid grey;padding:5px;margin:20px">&lt;p&gt;This is another paragraph.&lt;/p&gt;</div>
  </div>
  &lt;/body&gt;
  </div>
  &lt;/html&gt;
  </div>

## Resources:

- [HTML/CSS/Bootstrap Checkpoint](https://github.com/coding-boot-camp/checkpoint-bank/blob/master/checkpoints/multiple-choice/02-HTML-CSS-Git-MC/02-HTML-CSS-Git-MC.md)
