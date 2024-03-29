# ReX React UI Components Library
## ReX React UI Component: __COMPONENT_NAME__

This project is part of ReX Design Language and it can be used to create React UI Components.   
For more information visit:   

Github  
https://github.com/rakuten-rex

NPM  
https://www.npmjs.com/org/rakuten-rex

## How it was built 

1. webpack 4 (static module bundler)
1. HTML5
1. CSS3 & Sass (Normalize.css + Fork of Bootstrap project + ReX custom styles)
1. JavaScript ES6 Modules & Components based on React

# How to install

```
npm install @rakuten-rex/__COMPONENT_NAME__@__VERSION__ --save
```

## What you can do

This project is a started kit, it contains the settings to start the creations of a React component and publish it to NPM.   

Use it as a basement and reference for your own project and customize it as you will.  

If you need a full environment to create a React Web App, try the react-create-app to get a full environment for your App or use any other started kit.

### Live examples

For a complete guide of properties for React and HTML classes please visit the Storybook site:  

https://rakuten-rex.github.io/__COMPONENT_NAME__/

### JavaScript modules

#### React component (JavaScript + CSS Styles)

For plug and play components integration.   

Example: 

```js
import Carousel from '@rakuten-rex/__COMPONENT_NAME__';

const items = [
  {
    id: 0,
    src:
      'https://img.travel.rakuten.co.jp/movement/yamaguchi/201907/images/cImg01.jpg',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item A',
  },
  {
    id: 1,
    src:
      'https://img.travel.rakuten.co.jp/select/hokkaido/201906-2/images/149357_1.jpg',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item B',
  },
  {
    id: 2,
    src:
      'https://img.travel.rakuten.co.jp/select/hokkaido/201906-2/images/104743_1.jpg',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item C',
  }
];

function MyComponent() {
  return <Carousel items={items} transparency={0.24} />;
}
```

#### CSS Styles only

For your own JavaScript integration (React, Vue, Angular, etc.) or Static HTML.

Example: 

```js
import '@rakuten-rex/__COMPONENT_NAME__/css';

function MyComponent() {
  return (
    <div class="swiper-main-container">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" role="presentation" style="background-image:url(https://picsum.photos/376/200)" data-itemid="0">
            <div class="carousel-backdrop" style="background:rgba(0, 0, 0, 0.24)"></div>
            <div class="carousel-item-description">
              <div class="carousel-item-title">Sagano Bamboo Forest</div>
              <div class="carousel-item-caption">Located in Kyoto, Japan</div>
            </div>
          </div>
          <div class="isActive swiper-slide" role="presentation" style="background-image:url(https://picsum.photos/376/200)" data-itemid="1">
            <div class="carousel-backdrop" style="background:rgba(0, 0, 0, 0.24)"></div>
            <div class="carousel-item-description">
              <div class="carousel-item-title">Sagano Bamboo Forest</div>
              <div class="carousel-item-caption">Located in Kyoto, Japan</div>
            </div>
          </div>
          <div class="swiper-slide" role="presentation" style="background-image:url(https://picsum.photos/376/200)" data-itemid="2">
            <div class="carousel-backdrop" style="background:rgba(0, 0, 0, 0.24)"></div>
            <div class="carousel-item-description">
              <div class="carousel-item-title">Sagano Bamboo Forest</div>
              <div class="carousel-item-caption">Located in Kyoto, Japan</div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next rex-icon chevron-right"></div>
        <div class="swiper-button-prev rex-icon chevron-left"></div>
      </div>
    </div>
  );
}
```

### Static HTML

Add it from our CDN into your HTML template or HTML static page.

For development mode:

```markdown
<!-- __COMPONENT_NAME__ -->
<link href="https://r.r10s.jp/com/rex/__COMPONENT_NAME__/__VERSION__/__COMPONENT_NAME__.development.css" rel="stylesheet">
<script src="https://r.r10s.jp/com/rex/__COMPONENT_NAME__/__VERSION__/__COMPONENT_NAME__.development.js"></script>
```

For production mode:

```markdown
<!-- __COMPONENT_NAME__ -->
<link href="https://r.r10s.jp/com/rex/__COMPONENT_NAME__/__VERSION__/__COMPONENT_NAME__.production.min.css" rel="stylesheet">
<script src="https://r.r10s.jp/com/rex/__COMPONENT_NAME__/__VERSION__/__COMPONENT_NAME__.production.min.js"></script>
```

Example: 

```markdown
<div class="rex-css-style my-component">
  <div class="swiper-main-container">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" role="presentation" style="background-image:url(https://picsum.photos/376/200)" data-itemid="0">
          <div class="carousel-backdrop" style="background:rgba(0, 0, 0, 0.24)"></div>
          <div class="carousel-item-description">
            <div class="carousel-item-title">Sagano Bamboo Forest</div>
            <div class="carousel-item-caption">Located in Kyoto, Japan</div>
          </div>
        </div>
        <div class="isActive swiper-slide" role="presentation" style="background-image:url(https://picsum.photos/376/200)" data-itemid="1">
          <div class="carousel-backdrop" style="background:rgba(0, 0, 0, 0.24)"></div>
          <div class="carousel-item-description">
            <div class="carousel-item-title">Sagano Bamboo Forest</div>
            <div class="carousel-item-caption">Located in Kyoto, Japan</div>
          </div>
        </div>
        <div class="swiper-slide" role="presentation" style="background-image:url(https://picsum.photos/376/200)" data-itemid="2">
          <div class="carousel-backdrop" style="background:rgba(0, 0, 0, 0.24)"></div>
          <div class="carousel-item-description">
            <div class="carousel-item-title">Sagano Bamboo Forest</div>
            <div class="carousel-item-caption">Located in Kyoto, Japan</div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next rex-icon chevron-right"></div>
      <div class="swiper-button-prev rex-icon chevron-left"></div>
    </div>
  </div>
</div>
```

## How to start the project

The development environment is based on Storybook, for more info visit https://storybook.js.org/ .   

```
npm start
```

## How to build

The build task will generate a NPM package ready to be published and also a static version of Storybook, one folder for NPM `./node_modules/@rakuten-rex/__COMPONENT_NAME__` and other one for Github pages `./docs`.   

```
npm run build
```

## How to check build version

By using Node http-server, you can check the static version of Storybook with production settings and builds.

```
npm run serve
```

## How to publish to NPM
### Build the project

```
npm run build
```

### Login into NPM

Build the project first.  
After that run the following commands:

```
cd ./node_modules/@rakuten-rex/__COMPONENT_NAME__
npm login
npm publish
```

Once the process finish, take a look to the NPM site:   

https://www.npmjs.com/package/@rakuten-rex/__COMPONENT_NAME__


## Javascript and React related documents

Take a look to this nice documentation pages to be more familiar with React and modern Javascript:

### Official site
https://reactjs.org/docs/getting-started.html   

### Google Web Fundamentals (the whole site is a must to read)
https://developers.google.com/web/fundamentals/

### Webpack as magic bundler
https://webpack.js.org/

### Composing Software series (how to understand Funcional Programming)
https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea   

### Common React patterns
https://reactpatterns.com   

### Understanding Storybook with nice images
https://blog.hichroma.com/the-delightful-storybook-workflow-b322b76fd07   

### Some guidelines for clean code
https://americanexpress.io/clean-code-dirty-code/

