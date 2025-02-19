# Install and configure "Tailwind CSS" with "Vite" Framework:

> https://tailwindcss.com/docs/guides/vite

# Create a project:

> npm create vite@latest frontend -- --template react

# Run project command:

> cd frontend

> npm run dev

# Link search & install packages:

> https://www.npmjs.com/

# Install the necessary library packages:

## Install package "node_modules":

> npm install

## Install "Tailwind CSS":

> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p

## AOS : Perform animation using scroll event.

> npm i aos

- Link Github :

  > https://github.com/michalsnik/aos

- Link choose animation :
  > https://michalsnik.github.io/aos/

## React Slick & Slick-Carousel : Create slideshows on your website.

> npm install react-slick --save
> npm install slick-carousel

- Import css files `main.jsx`:

```css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
```

## React Icons : Add icons from different libraries as SVG elements.

> npm install react-icons --save

# Google Fonts : Pacifico

- Import font in file `index.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
```

# Technology used :

- React
- Tailwind CSS
- Vite

# Features:

- Responsive Complete Landing page.
- Responsive Navbar.
- Beautiful Animated website (Animate on scroll).
- Fully responsive Hero page (All device supported).
- Modern responsive product card.
- Responsive Footer with background image.

# Build And Deploy Project :

> npm run build

- Now, the `dist` folder will be created.
- Next, to `deploy` the project running on the domain, just copy the `dist` folder and paste it into the `Netlify` site.
  > https://www.netlify.com/
