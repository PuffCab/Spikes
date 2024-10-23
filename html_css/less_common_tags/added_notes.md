# Added Material

## Niche tags

### Code tag

<https://css-tricks.com/styling-code-in-and-out-of-blocks/>

### Keyboard Tag

```html
<p>Now press <kbd>CTRL</kbd> + <kbd>V</kbd> to paste</p>
```

```css
kbd {
  background-color: grey;
  border-radius: 5%;
  padding: 5px;
  border: 2px solid black;
}
```

### Progress tag

<https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_progress>

```html
<label for="file">Downloading progress:</label>
<progress id="file" value="32" max="100"> 32% </progress>
```

### Meter tag

Meant to disply graphic comparissons, not progress. Defines a scalar measurement within a known range

[text](https://www.w3schools.com/tags/tag_meter.asp);

```html
<label for="english">English</label>
<meter id="english" value="2" min="0" max="10">2 out of 10</meter><br>

<label for="german">German</label>
<meter id="german" value="0.6">60%</meter>
```

### Dialog (modal)

<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog>

```html
  <dialog open>
    <p>Greetings, one and all!</p>
    <form method="dialog">
      <button>OK</button>
    </form>
  </dialog>
```

### Datalist

[text](https://www.w3schools.com/tags/tag_datalist.asp)

```html
  <label for="browser">Choose your browser from the list:</label>
  <input list="browsers" name="browser" id="browser" />

  <datalist id="browsers">
    <option value="Edge"></option>
    <option value="Firefox"></option>
    <option value="Chrome"></option>
    <option value="Opera"></option>
    <option value="Safari"></option>
  </datalist>
```

### Fieldset and legend

[text](https://www.w3schools.com/tags/tag_fieldset.asp)

To create a box with options inside.

```html
  <fieldset>
    <legend>Stack</legend>
    <ul>
      <li>Html</li>
      <li>Css</li>
      <li>Javascript</li>
    </ul>
  </fieldset>
```

### Summary & Details tag

[text](https://www.w3schools.com/tags/tag_summary.asp)

```html
<details>
  <summary>Epcot Center</summary>
  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details>
```

### Time tag

[text](https://www.w3schools.com/tags/tag_time.asp)

No style change. It allows the browser to read the time as an actual value, helping with SEO.

```html
<p>Open from <time>10:00</time> to <time>21:00</time> every weekday.</p>
```

### Ruby tag (with  rt & rp)

A ruby annotation is a small extra text, attached to the main text to indicate the pronunciation or meaning of the corresponding characters.

```html
  <ruby>
      Apple
      <rt>🍏</rt>
      <rp>🍏</rp>
    </ruby>
```
