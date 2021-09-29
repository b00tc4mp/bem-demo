# BEM

## Naming conventions

```
BLOCK
BLOCK--MODIFIER
BLOCK__ELEMENT
BLOCK__ELEMENT--MODIFIER
```

Example

```html
<!-- HTML -->

<div class="panel">
    <div class="panel__title">Hello, World!</div>
    
    <p class="panel__body">
        Lorem ipsum...
    </p>
</div>

<div class="panel panel--dark">
    <div class="panel__title">Hello, World!</div>
    
    <p class="panel__body">
        Lorem ipsum...
    </p>
</div>

<div class="panel panel--dark">
    <div class="panel__title panel__title--alert">Hello, World!</div>
    
    <p class="panel__body">
        Lorem ipsum...
    </p>
</div>
```

```css
/* CSS */

.panel {
    border: 2px solid black;
    background-color: white;
    margin: 1rem;
    padding: 1rem;
}

.panel--dark {
    background-color: black;
    color: white;
}

.panel__title {
    font-family: 'Permanent Marker';
    text-align: center;
}

.panel__title--alert {
    background-color: yellow;
    color: black;
}

.panel__body {
    font-family: Caveat;
}
```

**DO NOT** create nested blocks or elements or modifiers (that's not legal BEM)

Example of **illegal** names

```
BLOCK__BLOCK__BLOCK__...
BLOCK--MODIFIER--MODIFIER--...
BLOCK__ELEMENT__ELEMENT__ELEMENT__...
BLOCK__ELEMENT--MODIFIER--MODIFIER--...
```


