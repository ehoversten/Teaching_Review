# HTML Forms

###  What are forms used for?

* User Input

#### So how do we take in input from our user (`CLIENT` Browser) ? 

* The `<form>` tag

```html
<form action='/route' method="POST">
    <!-- ... form elements -->
</form>
```

&nbsp;   
### An HTML form contains form elements.

* Form elements are different types of `input` elements, like `text` fields, `checkboxe`s, `radio` buttons, `submit` buttons, and more.

&nbsp;    
## Form Elements:

* `<label>`
    * Labels are important for `web accessibility`
* `<input>`
    * We can define the `type` of user input and how that data will be connected upon submission (Input Attributes : `id`, `name`, `value`, `placeholder`, etc ...)
    * Input Types: `type="INPUT_TYPE"`
        * `text`
        * `email`
        * `password`
        * `radio`
        * `submit`
        * and many more ...
* `<select>`
    * Allows us to create specified `option` values for the user to select from using a pull down menu
* `<option>`
    * Defines an option (and `value`) in a drop-down list
* `<textarea>`
    * Defines a multi-line input field
* `<button>`
    * Often used with `type="submit"` to submit the form
* `<fieldset>`
    * An element we can use to group together form inputs
* `<legend>`
    * Element we use to caption our fieldset element

&nbsp;  
## Form Attributes:

#### The Action Attribute:

* The action attribute defines the `action` to be performed, or location / `URL` where the forms collected data should be sent when the `form is submitted`.
* The action attribute defines the location (URL) where the form's collected data should be sent when it is submitted.

* If the action attribute is `omitted`, the action is set to the `current page`. Meaning the page with refresh. 

#### The Target Attribute:

* The `target` attribute specifies if the submitted result will open in a new browser tab, a frame, or in the current window.

#### The Method Attribute:

* The `method` attribute specifies the `HTTP method` (`GET` or `POST`) to be used when submitting the form data:

&nbsp;   
#### When to use the `GET` method:
* `GET` is the default method when a form is submitted.

* When we use a GET request, the data submitted via the form will be visible in the page address field: `Appends form-data into the URL in name/value pairs`

* Use `GET` for `non-secure` data, like query strings

* Never use GET to send sensitive data! As it will be visible in the URL

&nbsp;   
#### When to use the 'POST' method:

* Use `POST` if the form data contains `sensitive` or `personal` information.


&nbsp;  

### Putting it all together: Example
```html
<form action="/route_or_file" method="POST">
  <label for="match_Input_Id">Input Name</label>
  <input
    id="match_Input_Id"
    type="text"
    name="object.user.username"
    value="object.username"
    target="_blank"
  />

  <label for="email">Enter Email</label>
  <input id="email" type="email" name="email" value="object.user.email" />

  <input type="submit" class="button_styles" value="Submit"/>
</form>
```

#
&nbsp;    
#### Then what do we do with it?
* We can manipulate that data using JavaScript /jQuery and dynamically add that data to the browser.
* We can send the form data as a query string and make a request (`AJAX` call) to an outside server (`API`) for data. Then dynamically present that data to the client browser.
* Send it to a Backend (`Node/Express`) server, and have the server do some logic or action on that data. Save/persist data to a database (`SQL/noSQL DB`), route the user to another page on your website.

#

## TO DO: 
* examples of various input types
* Styling Forms


# 

## Resources:

* https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms

* https://www.w3schools.com/html/html_forms.asp
