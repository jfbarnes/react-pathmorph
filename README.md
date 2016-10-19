## react-pathmorph

React component for [https://github.com/jfbarnes/pathmorph](pathmorph)

### Usage

```cli
npm install react-pathmorph
```

```jsx
import PathMorph from 'react-pathmorph';

...

<PathMorph {props}>
  <path id="x" d="M14,5 29,20 14,35 12,33 25,20 12,7 14,5" />
  <path id="y" d="M0,19 40,19 40,22 0,22 0,19" />
</PathMorph>

...
```

where props may contain:

* **id** *(string, required)*: ID of the canvas to render the animation into

* **width** *(number, required)*: width of output canvas

* **height** *(number, required)*: height of output canvas

* **fromPathId** *(string, required)*: ID of the svg path that animation will begin at (*x* in the above example)

* **toPathId** *(string, required)*: ID of the svg path that animation will morph to (*y* in the above example)

* **hover** *(boolean, default true)*: If true, animation takes place on mouseenter and mouseleave events. If false, loops between paths.

* **fill** *(boolean, default false)*: Fills the path's shape if true. Uses a stroke if false

* **color** *(string, default '#000')*: Color of stroke/fill

* **sampleSteps** *(number, default 200)*: Number of sample points to take along each path. (Controls "resolution" of animation)

* **duration** *(number, default 500)*: Milliseconds to complete each animation

Any other props set on the PathMorph will be passed down to the rendered canvas element.
