# Project 1: Spike 2

## Flexbox

**Flexbox** = Flexible Box

Flexbox was introduced as a way to help position HTML elements. You will have a parent container element with the `display` property set to **flex**, and the children elements will be considered the flex **items**/**content**. A flex-child item can also have `display` set to flex, making it a container for its own children.

Flexbox works best for small-scale layouts, (eg. `<article>` or `<form>` content).

Check out this excellent guide with images on [css-tricks.com](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

The default settings for Flexbox set the `flex-direction` to **row**, and the `flex-wrap` property to **nowrap**.

`Align` and `justify` properties refer to the position of your elements along the direction axes. Be aware of which axis your elements are aligned on - it will change how these properties apply! By default, `align-items` is set to **stretch**, and `justify-content` is set to **flex-start**.

The `flex-flow` property can be used to condense `flex-direction` and `flex-wrap` into a single line. eg:

```css
div {
  display: flex;
  flex-flow: column wrap;
}
```

Flexbox child elements can be positioned independently using properties such as `order` and `self-align`. Playing games like [Flexbox Froggy](https://flexboxfroggy.com/) or [Flexbox Defence](http://www.flexboxdefense.com/) is a fun way to play with all the properties and learn how they work.

## CSS Animations

### Transition

The `transition` property can be used for small transitions, such as an element reacting to a **pseudo class**. Putting it on both the "before" and "after" states mean it will apply both ways. eg:

```css
div {
  background-color: red;
  transition: 0.2s;
}

div:hover {
  background-color: blue;
  transition: 0.2s;
}
```

### Keyframes

`@keyframes` keyword creates a new CSS animation. Every animation must be given an **identifier**, ie. a name. Curly braces will surround the property changes that are to be applied.

Your animation will be made up of keyframe, every point from 0-100% can be selected and manually controlled. Tip: setting 0% and 100% the same will ensure a smooth infinite animation loop. eg:

```css
@keyframes identifier {
  0%,
  100% {
    background-color: tomato;
    border-radius: 0%;
  }
  50% {
    background-color: violet;
    border-radius: 50%;
  }
}
```

`from` and `to` properties can simplify the syntax for a simple, linear animation that only has two steps.

The animation can then be linked to HTML elements via a selector, and the `animation` property will specify how the animation will apply. Only `animation-name` and `animation-duration` are compulsory for it to run.

The W3Schools [page on animation](https://www.w3schools.com/css/css3_animations.asp) is a great starting point.

## Google Fonts & Icons

**Google Fonts** and **Google Icons** is a free resource provided by Google, where you can use fonts and icons hosted by Google. Their [FAQ](https://developers.google.com/fonts/faq) will cover most of what we need to know.

For this project, we can `<link>` to the font we want to use from the `<head>` of our HTML document. Start by choosing a font from [https://fonts.google.com/](https://fonts.google.com/). The square icon at the very top right of the page will open a sidebar showing all your currently selected fonts. Many fonts will have multiple **weight** and/or **italic** options. Choose as many as you think you'll use.

Once you're happy with your selection, in the side bar under **Use on the web**, we're going to select the `<link>` radio. Copy the whole snippet, and paste it into the `<head>` of your HTML document. This creates a link between your project, and Google's online resource. So long as you have an Internet connection, you will be able to use this font!

In your `styles.css`, you can now use the `font-family` property to apply your font to whichever element you choose. Eg:

```css
h1 {
  font-family: "Sofia Sans Extra Condensed", sans-serif;
}
```

To apply Google Icons, the easiest way is to `<link>` the **Material Icons** font family in the same way you would link any other Google font. W3Schools has a good [page](https://www.w3schools.com/icons/google_icons_intro.asp) summarizing the process, for a more in depth explanation you can visit the [Google Fonts docs](https://developers.google.com/fonts/docs/material_icons#icon_font_for_the_web).

Once you've linked the font via the `<head>`, you can give a `class` of **"material-icons"** to an element (most commonly a `<span>`, or `<i>` within a `<p>`) and type the name of the icon as the content of your element. This combination will produce an **icon**! You can then use the inline **style** property or create a class to play with the **font-size** and **color** of your icon. eg:

```html
<span class="material-icons" style="font-size: 48px; color: pink">cake</span>
```
