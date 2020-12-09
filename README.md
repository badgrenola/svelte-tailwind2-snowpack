# SvelteJS + Tailwind2 + Snowpack = 👍 

This boilerplate sets up a simple SvelteJS + Tailwind2 app using Snowpack as the 'bundler'. So far this is the quickest production setup I've found for creating webapps.

---

## Installation

1. Ensure you have [NodeJS](https://nodejs.org/en/download/) installed on your system.
2. Open Terminal/Command Prompt, and __cd__ to the directory where you want your app to exist.
3. Run the following command to clone this repo into that directory:

        npx degit badgrenola/svelte-tailwind2-snowpack your-app-name
4. __cd__ into the newly created app directory
5. Run the following command to install the required node modules:

        npm i

----
## Running

1. Ensuring you are in the app directory, run the following command to launch the app:

        npm start
2. That's it!

----
## CSS
This structure allows you to add styling information:
* in the main _index.css_ file (between the @tailwind imports, where shown)
* in each Svelte component's _style_ section
* in-line directly on HTML elements using a _style_ attribute
* using Tailwind class names on your HTML elements