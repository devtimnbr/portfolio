---
layout: ../../layouts/BlogPostLayout.astro
title: "Working with forms with vanilla JavaScript"
description: "Today, we’re going to look at some modern JavaScript methods for working with forms and form data. Let’s dig in!"
author: "Tim Neubauer"
date: "06 Jan 2023"
img: "/blog/formdata_object.webp"
draft: false
---

## The FormData Object

The FormData object is a powerful tool for handling form submissions in JavaScript. It allows you to easily send key-value pairs to a server, similar to how you would with a traditional HTML form. In this tutorial, we'll take a look at how to use the FormData object in a JavaScript project, and we'll also see how to handle the form submission on a Node.js backend using the express library.

First, let's create a simple HTML form that we can use to submit data to a server:

```html
<form id="form">
  <label>Name:</label>
  <input type="text" name="name" />
  <br />
  <label>Email:</label>
  <input type="email" name="email" />
  <br />
  <button type="submit">Submit</button>
</form>
```

Next, we'll create a JavaScript file and import the FormData object:

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
});
```

In this code, we are selecting the form element and attaching a submit event listener to it. When the form is submitted, we prevent the default action (which would be to reload the page) and create a new FormData object using the form element as an argument.

Now that we have our FormData object, we can use it to access the form data that was submitted. We can do this using the `get()` method, which takes the name of the form field as an argument and returns the value. For example, to get the name that was entered in the form, we could do the following:

```javascript
const name = formData.get("name");
```

We can also use the `set()` method to set the value of a form field. This is useful if we want to update the form data before sending it to the server. For example, to update the email field, we could do the following:

```javascript
formData.set("email", "new@email.com");
```

Finally, we can use the FormData object to send the form data to a server using an HTTP request. For example, to send the form data using the fetch() function, we could do the following:

```javascript
fetch("/api/submit", {
  method: "POST",
  body: formData,
});
```

This will send a POST request to the `/api/submit` endpoint with the form data as the request body.

### Node.js Backend

Now let's take a look at how we can handle this form submission on the backend. Here is an example of how we can do this using the express library in Node.js:

```javascript
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api/submit", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);

  res.send("Form submitted successfully!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
```

This backend code creates an express server and sets up a route for the `/api/submit` endpoint. When the server receives a `POST` request to this endpoint, it will parse the request body and extract the name and email fields. It will then log these values to the console and send a response back to the client.

One important thing to note is that we are using the body-parser middleware to parse the request body. This is necessary because the default behavior of the express server is to not parse the request body for POST requests. The body-parser middleware will parse the request body and attach the resulting object to the req.body property, which we can then access to get the form data.

And that's it! With just a few lines of code, we were able to use the FormData object in a JavaScript frontend to easily send form data to a Node.js backend, where we were able to process and handle the data as needed. Whether you're working on a simple form or a more complex application, the FormData object is a powerful tool that can help you manage form submissions with ease."
