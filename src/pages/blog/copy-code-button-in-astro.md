---
layout: ../../layouts/BlogPostLayout.astro
title: "Adding a Copy Code Button in Astro Markdown Code Blocks"
description: 'In this blog post, we will be discussing how to add a "Copy Code" button to HTML code blocks using the Astro.build framework. However, the JavaScript code provided can also be used in any other HTML project.'
author: "Tim Neubauer"
date: "14 Jan 2023"
img: "/blog/copy-code.webp"
draft: false
---

## Introduction

Adding a “Copy Code” button to code blocks on your website can greatly enhance the user experience for your visitors. It allows users to quickly and easily copy code snippets from your website without having to manually select, copy and paste the code. This can save users time and improve their overall experience on your website.

## Preparing Astro Layout

First, we'll create a new layout called "BlogPostLayout.astro". This layout will be used to display our Markdown files. Inside this layout, we'll later add some client-side JavaScript that will add the copy code button inside each `<pre>` tag of the generated HTML of the Markdown files.

```html
---
---

<script></script>
<slot />
```

Since Astro provides Markdown and MDX pages with a special frontmatter layout property, we can specify or newly created Astro layout inside our markdown pages.

````markdown
---
layout: ./layouts/BlogPostLayout.astro
---

# Post Title

```javascript
let hello = "world";
```
````

## Adding the Copy Code Button

Now comes the fun part. Inside our newly created layout we add some clientside javascript to render the button onto the dom. We start by defining a variable called "copyButtonLabel" and set its value to "Copy Code". This variable will be used to set the label of the copy button that we will be adding to the code blocks.

```javascript
let copyButtonLabel = "Copy Code";
```

Next, we use the document.querySelectorAll function to select all the pre elements of the page. To make the selected elmenets iterable, we convert them into an array with the Array.from method and store it in the "codeBlock" variable.

```javascript
let codeBlocks = Array.from(document.querySelectorAll("pre"));
```

For each code block, we create a new "div" element and set its "position" property to "relative". This will be used as a wrapper for the code block and will ensure that the copy button is positioned correctly in relation to the code block.

```javascript
for (let codeBlock of codeBlocks) {
  let wrapper = document.createElement("div");
  wrapper.style.position = "relative";
}
```

We then create a "button" element, assign it the class "copy-code" and set its inner HTML to the value of the "copyButtonLabel" variable.

```javascript
let copyButton = document.createElement("button");
copyButton.className = "copy-code";
copyButton.innerHTML = copyButtonLabel;
```

The copy-code class is used to style the button. Since we created the wrapper element with the position: relative attribute, we set the position of copy-code to absolute.

```css
.copy-code {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #3730a3;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
}

.copy-code:hover {
  background-color: #312e81;
}
```

Back to JavaScript. We set the "tabindex" attribute of the code block to "0" and append the copy button to it. This will make the code block focusable and allow users to interact with it using the keyboard.

```javascript
codeBlock.setAttribute("tabindex", "0");
codeBlock.appendChild(copyButton);
```

We then wrap the code block with the newly created "div" element and insert it before the code block in its parent element.

```javascript
codeBlock.parentNode.insertBefore(wrapper, codeBlock);
wrapper.appendChild(codeBlock);
```

Finally, we add a click event listener to the copy button and call the "copyCode" function when clicked.

```javascript
copyButton.addEventListener("click", async () => {
  await copyCode(codeBlock, copyButton);
});
```

The "copyCode" function is an asynchronous function that takes in the code block and button as arguments. It selects the "code" element within the code block, gets its inner text, and writes it to the clipboard using the "navigator.clipboard.writeText" method.

```javascript
async function copyCode(block, button) {
  let code = block.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);
}
```

To provide visual feedback that the code has been copied, the button's inner text is changed to "Code Copied" and after 700ms it will be set to default value.

```javascript
async function copyCode(block, button) {
  let code = block.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);

  // visual feedback that task is completed
  button.innerText = "Code Copied";

  setTimeout(() => {
    button.innerText = copyButtonLabel;
  }, 700);
}
```

That's it! Your astro layout should look like this.

```html
---
---

<script>
  let copyButtonLabel = "Copy Code";
  let codeBlocks = Array.from(document.querySelectorAll("pre"));

  for (let codeBlock of codeBlocks) {
    let wrapper = document.createElement("div");
    wrapper.style.position = "relative";

    let copyButton = document.createElement("button");
    copyButton.className = "copy-code";
    copyButton.innerHTML = copyButtonLabel;

    codeBlock.setAttribute("tabindex", "0");
    codeBlock.appendChild(copyButton);
    // wrap codebock with relative parent element
    codeBlock.parentNode.insertBefore(wrapper, codeBlock);
    wrapper.appendChild(codeBlock);

    copyButton.addEventListener("click", async () => {
      await copyCode(codeBlock, copyButton);
    });
  }

  async function copyCode(block, button) {
    let code = block.querySelector("code");
    let text = code.innerText;

    await navigator.clipboard.writeText(text);

    // visual feedback that task is completed
    button.innerText = "Code Copied";

    setTimeout(() => {
      button.innerText = copyButtonLabel;
    }, 700);
  }
</script>

<slot />
```

With this JavaScript code, you can easily add a "Copy Code" button to any code blocks on your website, making it more user-friendly and efficient for your users. The code is easy to understand and you can customize it to fit your needs.
