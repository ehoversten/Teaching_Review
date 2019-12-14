# HTML Forms

## What are forms used for?

* User Input

#### So how do we take in input from our user (`CLIENT` Browser) ? 

* The `<form>` tag

```html
<form action='/route' method="POST">
    <!-- ... form elements -->
</form>
```

&nbsp;   
## An HTML form contains form elements.

* Form elements are different types of `input elements`, like `text` fields, `checkboxes`, `radio` buttons, `submit` buttons, and more.




&nbsp;   
```html
<form action="/route" method="POST">
  <label for="match_Input_Id">Input Name</label>
  <input
    id="match_Input_Id"
    type="text"
    name="object.user.username"
    value="object.username"
  />

  <label for="email">Enter Email</label>
  <input id="email" type="email" name="email" value="object.user.email" />
</form>
```

#
&nbsp;    
#### Then what do we do with it?
* We can manipulate that data using JavaScript /jQuery and dynamically add that data to the browser.
* We can send the form data as a query string and make a request (`AJAX` call) to an outside server (`API`) for data. Then dynamically present that data to the client browser.
* Send it to a Backend (`Node/Express`) server, and have the server do some logic or action on that data. Save/persist data to a database (`SQL/noSQL DB`), route the user to another page on your website.


