---
layout: ../../layouts/BlogPostLayout.astro
title: "Working with forms with vanilla JavaScript"
description: "Today, we’re going to look at some modern JavaScript methods for working with forms and form data. Let’s dig in!"
author: "Tim Neubauer"
date: "09 Aug 2022"
img: "https://i.ytimg.com/vi/48NWaLkDcME/maxresdefault.jpg"
draft: true
---

## The FormData Object

was bgeht ab

The FormData object provides an easy way to serialize form fields into key/value pairs.

Use the new FormData() constructor to create a new FormData object, passing in the form to serialize as an argument. Form fields must have a name attribute to be included in the object. Otherwise, they’re skipped. The id property doesn’t count.

### Code

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
