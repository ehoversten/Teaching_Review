# Firebase Real-Time Database

## What is `Firebase` and why would we use it?

## ...

##  Server Side Storage: saves user info to a database that can be reused across multiple devices and sessions.

## Step 1: Create a Firebase project

Before you can add Firebase to your JavaScript app, you need to create a Firebase project to connect to your app.

1) In the Firebase console, click Add project, then select or enter a Project name.

2) (Optional) If you created a new project, you can edit the Project ID.

3) Click Continue

4) Click Create project

&nbsp;
## Step 2: Register your app

After you have a Firebase project, you can add your web app to it.

1) In the Firebase console's project overview page, click the Web icon (code) to launch the setup workflow.

2) Enter your app's nickname

3) Click Register app

&nbsp;
## Step 3: Add Firebase SDKs and initialize Firebase (`using the CDN`)

### Add the following to your `HTML` code
```html
<body>
  <!-- Insert these scripts at the bottom of the HTML, but before you use any Firebase services -->

  <!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/7.2.2/firebase-app.js"></script>

  <!-- Add Firebase products that you want to use -->
  <!-- FIREBASE REAL-TIME DATABASE LINK -->
  <script src="https://www.gstatic.com/firebasejs/7.2.2/firebase-database.js"></script>
  <!-- FIREBASE AUTHORIZATION LINK -->
  <script src="https://www.gstatic.com/firebasejs/7.2.2/firebase-auth.js"></script>
</body>

```


## Next we have to set up the Database Configuration

```javascript
// Initialize Firebase
var config = {
    apiKey: "FIREBASE-API_KEY",
    authDomain: "recent-user-with-all-use-e8e76.firebaseapp.com",
    databaseURL: "https://recent-user-with-all-use-e8e76.firebaseio.com",
    projectId: "recent-user-with-all-use-e8e76",
    storageBucket: ""
};

// Initialize an INSTANCE of a FIREBASE DATABASE with the passed in `config` parameter
firebase.initializeApp(config);

// Here we create a reference to our new DATABASE
var database = firebase.database();
```

&nbsp;
### Set the `key: value` OBJECT in the database

* The use of .ref() to specify where the data will be saved. Since there is nothing inside the parentheses the data is saved to the database's root directory.

* The use of .set() to save the data to the database


```javascript
database.ref().set({
    keyName_1: value_1,
      keyName_1: value_2
    });
```
&nbsp; 
* .on("value", function(){}) which effectively creates an "on-change" event so that the moment the page first loads or the moment the database changes, the impact is reflected immediately.

```javascript
database.ref().on("value", function(snapshot){
    console.log(snapshot.val());
});
```
