# HTML + CSS

## Creating our first project in VSCode

- Create a folder with the name of your project.
- Drag and Drop that folder into VSCode, or
- In VSCode select New Window → in the lateral explorer, select Open Folder.

## HTML

HTML = **Hyper Text Markup Language**

In a new index.html file, use **!** shortcut to boilerplate. It is best practise for the **landing page** of your application to be called "index". This tells the browser where to start. The index.html should also always be in the root folder of your project.

- `<!DOCTYPE html>` declares the type of document. HTML implies HTML5, our markup language used to write content.
- `<html lang="en">` To set the primary language for a documen. The `lang` attribute is used to identify the language of text content on the web. This information helps search engines return language specific results, and it is also used by screen readers that switch language profiles to provide the correct accent and pronunciation.

- `<head>` is a container for _metadata_, data that is not displayed in the website, the most relevant ones are:

  - `<title>` holds the title of the page (what you see in the tab at the top), will also help with SEO (search engine optimization).
  - `<style>` can be used to define styles for an html page. Best practise, however, is to link an external CSS document.
  - `<script>` holds client-side JavaScript, but it is better to put the JS scripts at the end of the body. This ensures all hard-coded HTML is already mounted before the script starts running.
  - `<link>` links to documents, or to an external source, like fonts, CDNs with other styles. Most commonly used to link to the CSS stylesheet - type **link:css** to boilerplate.
  - `<meta>` specifies the **character set** (how the computer reads the text), **viewport** settings (how the browser displays the document on your device screen), **page description**, **keywords** and **author** of the document (also relevant for SEO).

- The `<body>` holds all our actual website content.

HTML **tags** open and close with angle brackets. A single [**element**](https://www.w3schools.com/html/html_elements.asp) will usually have an opening and closing tag - closing tag indicated with a forward slash before the element name. eg:

  ```html
  <p>paragraph content</p>
  ```

Some select HTML elements are self-closing, usually because they hold no content and so two separate tags are redundant. eg:

  ```html
  <img src="img-source" alt="img alt text" />
  ```

Many elements will have [**attributes**](https://www.w3schools.com/html/html_attributes.asp) that can modify their look, functionality, or behaviour - **class**, **type**, **src**, etc. These are always in the opening tag.

Other elements can be **nested**, such as `<li>` inside `<ul>`. However there are some rules and best-practices that should be followed (eg. `<p>` cannot hold a `<div>`). An [HTML validator](https://validator.w3.org/) will help to prevent these mistakes. It is best practise to **indent** nested elements. This isn't necessary for the computer to read the code, it is only for human readability.

`<div>` and `<span>` are like boxes that hold other elements. The only difference is positioning: `<div>` default to **block**, while `<span>` default to **inline**. There are other more [semantic](https://www.w3schools.com/html/html5_semantic_elements.asp) HTML elements that we recommend you use when appropriate: `<nav>`, `<header>`, `<footer>`, etc. This makes it easier to identify sections in your code.

- How to **link two HTML pages** ? : To link two HTML pages together, use an `<a>` tag, with an `href` attribute that specifies the file to be linked. eg:

```html
<a href="two.html">Link to Page Two</a>
```

### Extensions

- **Live Server** (ritwickdey.LiveServer) : It launches a local development server with live reload capability. It automatically refreshes the browser whenever you save changes to your HTML, CSS, or JavaScript files.
- **Prettier** (esbenp.prettier-vscode) :a code formatter which enforces a consistent style by follwing some pre-defined or custom rules, adjusting our code according to them.
- **HTML CSS Support** (ecmel.vscode-html-css): HTML id and class attribute completion for Visual Studio Code.
- **Auto Close Tag** (formulahendry.auto-close-tag) : very practical one to add the closing html tag.
- **Auto Rename Tag** (formulahendry.auto-rename-tag): Automatically rename paired HTML tags, although sometimes can be a bit annoying.
- **vscode-icons** (vscode-icons-team.vscode-icons) : some pre-defined set of icons for our folders. Besides making our file structure looking nicer,

Never used them, but many others do :

- **CSS Peek** (pranaygp.vscode-css-peek): similar to _HTML CSS Support_ , giving us suggestions about IDs and Classes declared in other files.
- **IntelliSense for CSS class names in HTML** (Zignd.html-css-class-completion): a good companion for _CSS Peek_ , providing code completion for HTML `class` attribute.

💡💡Do you have others you cannot live without? Share them in the group!!💡💡

## CSS

**CSS** stands for Cascading Style Sheet, and can be linked in the head tag of an HTML document. For your first project, I recommend against using any CSS libraries so you can get to understand the basic ways HTML and CSS interact.

[**Selectors**](https://www.w3schools.com/css/css_selectors.asp) target the element/s to which the styles will be applied (multiple elements can take the same style specifications). Playing games like [CSS Diner](https://flukeout.github.io/) and [CSS Speedrun](https://css-speedrun.netlify.app/) is a fun way to get in some practise.

```css
selector {
  color: red;
  font-size: large;
}
```

Commonly used:

- selector = element by type
- .selector = class
- #selector = id
- selector1, selector2 = multiple selectors can be separated by a comma
- selector1 > selector2 = all selector2 that are a direct child of a selector1
- selector1 selector2 = all selector2 nested inside a selector1

- **Pseudo-classes** can be added to selectors to specify that the styles only apply during a special state. Common examples are `:hover`, `:focus`, `:active`.

- **Specificity** given more than one css selector applying a style to the same element, _specificity_ is a CSS method to determin which selector is the most relevant and should be applied.

    In general **Inline style** > **id selector** > **class selector** > **tag selector**.

Many HTML elements already have a **default** style, such as display, margin, or padding. This can be overwritten with your custom styles.

- **Units** :
  - _Absolute_ : they express a fixed length. Some of them are `px`, `cm`, `in`.
  - _Relative_ : they specify a length relative to another length property. They scale better than absolut ones. Some of them are `em`, `rem`, `vw/vh`, `%`.
  
## DEBUGGING

It is the process of fixing errors, or "bugs", in software code.

It is gonna be an essential skill, because... ![meme coding](https://m.media-amazon.com/images/I/41MnYFgyIpL._AC_UF1000,1000_QL80_.jpg)

 Debugging involves systematically identifying the source of a problem, understanding why it occurred, and implementing a solution to resolve it.

As developers, we will refine our own individual approach for debugging, including the tools that modern browsers offer to us.

### DEVELOPER TOOLS

> Developer Tools (or DevTools) are programs that allow a developer to create, test and debug software.
> -- [MDN]

[MDN]:https://developer.mozilla.org/en-US/docs/Glossary/Developer_Tools

Nowadays most, if not all,  of the most popular browsers include it (Chrome, Firefox, Opera, Safari, Brave).

There are some tiny differences between them, some try to include the latest features quicker than others, and some do a better job in some specific functionalities, but overal they are very similar.

During this course we will be using mainly Chrome.

While having a website opened, we can open it by :

- Right-Click → inspect.
- Windows/Linux: `Crl + Shift + I`.
- MacOs: `Cmd + Option + I`.
- Via Chrome's menu : Click on the three dots (menu) in the top-right corner → More tools → Developer Tools.

Besides the most straight forward functionalities , there many others that can be of great help, such as :

- **Layers** : Click on the three dots in the top-right corner of the DevTools window → More Tools → Layers. This feature Allow us to visualize the stacking order of elements and how the might overlap.
- **CSS Overview** : Click on the three dots in the top-right corner of the DevTools window → More Tools → CSS Overview. If we want to find out which fonts and colors other websites are using, this tool is very handy. It will also give us information about unused CSS declarations in our code (so we can remove them), and Media Queries.

### Simple CSS Debugging trick

In styling, one of the hardest things to do for begginers (and not beginners), is positioning.

If we add this line at the beggining of our CSS file

```css
* {
    outline:1px solid red ;
}
```

It will add a border to every element, helping very quickly to visualize the space the different HTML elements take, and overlaps.

## Project Structure

Your **folder structure** is up to you, but it is important to have some system in place to organise your files. Having a folder to hold all HTML, a separate folder to hold all CSS, and a third folder for assets is one approach. Having a folder for each page and the relevant CSS and content is another. It's best to stick to all **lower-case** letters, and use **hyphens** (**-**) rather than spaces when naming your files and folders (we call this **kebab-case**!).

## Accesibility

Accesibility is crucial in web development to ensure that everyone, regardless of abilities or disabilities, can access and interact with your website.

Some of the best practices are :

- **Semantic HTML** : Use HTML elements for their intended purpose. This helps screen readers and other assistive technologies understand the content properly.It also helps to improve SEO.[more info](https://www.w3schools.com/html/html5_semantic_elements.asp).
- **Alt Text for Images** : Provides information about the image that the tag contains. That information will be rendered if the image cannot load.

```html
<img src="boorReader.jpg" alt="A person reading a book">
```

- **Keyboard Navigation**: Ensure all interactive elements are accessible via keyboard navigation to accommodate users who cannot use a mouse.
- **Color Contrast**: Maintain sufficient color contrast between text and background to make content readable for users with visual impairments.
- **Accessible Forms**: Use proper form labels and provide helpful error messages to assist users in filling out forms.

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>
```

- **Focus Styles**: Clearly indicate focus styles for interactive elements to assist users navigating with a keyboard.

```css
/*  focus style for links */
a:focus {
    outline: 2px solid blue;
}
```

- **ARIA Roles and Attributes**: Use ARIA roles and attributes to enhance the accessibility of complex web components, such as menus and sliders.
[more info](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

```html
<!-- ARIA role for a menu -->
<ul role="menu">
    <li role="menuitem"><a href="#">Home</a></li>
    <li role="menuitem"><a href="#">About</a></li>
    <li role="menuitem"><a href="#">Contact</a></li>
</ul>
```

- **Avoid Auto-Playing Media**: Do not autoplay audio or video, as it can be disruptive and disorienting for some users. Instead, provide controls for users to start media playback.

- **Skip Links**: Include skip links at the top of the page to allow users to bypass repetitive navigation and go directly to main content.

## Project kick-off

[Project kick-off](https://lms.codeacademyberlin.com/content/web/Module-1/Project-1/Sprint-1#epic2:projectkick-off)

### Figma

Usually, the design of every app will start by creating a **wireframe** : visual representation or blueprint of a web page or application interface.

To start with the development of our apps by creating a wireframe, it is not only how it would work in a professional enviroment, but a very recommended approach also for our particular projects, helpig us to :
    - have a clear structure
    - focus on the functionlities
    - identify some potential problems at an early stage
    - put the User at the center of our design.

One of the most popular tools for that is [Figma](https://www.figma.com/).

[Here](https://www.figma.com/file/L6CNEXvyGoXKlqVC3VVAcA/Wireframing ) you can find an example to get you started with Figma.

But tools like Figma have a learning curve, and sometimes they can be very time consuming.

If you prefer something simpler, [excalidraw](https://excalidraw.com/) is a user-friendly , drawing tool that can serve the purpose.

Ultimately, a wireframe done with **pen and paper** is also a very useful alternative. Even if we are not the best drawers out there.
![drawing meme](https://annhandley.com/ah/wp-content/uploads/2021/01/Horse-outline-drawing.jpg)

## Aditional Resources

- Images: [Unsplash](https://unsplash.com/) , [Pexels](https://www.pexels.com/), [Pixabay](https://pixabay.com/).
- Illustrations: [Freepik](https://www.freepik.com/), [Undraw](https://undraw.co/illustrations), [Ouch](https://icons8.com/illustrations).
- Icons: [Font Awesome](https://fontawesome.com/), [Flaticon](https://www.flaticon.com/), [Heroicons](https://heroicons.com/)
