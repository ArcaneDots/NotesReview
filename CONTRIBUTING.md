# Contributing guidelines
Thank you for your interest in contributing to NotesReview!

If you want to work on improving the application, the following tips and hints may be useful for you. 😉

## Building and running
NotesReview is a web application and is therefore mainly written in Javascript. `npm` is used as the preferred package manager, `webpack` is used as a module bundler.

You may want to take a look at the [`package.json`](https://github.com/ENT8R/NotesReview/blob/main/package.json) file in order to get an overview on which modules are being used and what commands to run.

To setup, change and run the application locally, simply follow these commands:
```shell
# 1. Install all necessary dependencies using npm
npm install
# 2. Now it's your turn — change something in the files
# 3. Start the application and test it
# by visiting http://localhost:8000 in your browser
npm run start
# 4. Don't forget to build the files if you're happy with the changes
npm run build
```
That's it already! Now you can submit your change as a [pull request on Github](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests).

## Translating
If you want to translate the website into your language or fix a wrong term, you can do so by visiting the project at POEditor.

Follow [**this link** to improve the translations](https://poeditor.com/join/project/oVilUChBdf):

[![POEditor](https://poeditor.com/public/images/logo_small.png)](https://poeditor.com/join/project/oVilUChBdf)

The use of POEditor is preferred over proposing new translations via pull requests.

## Testing and reporting bugs
The easiest way to contribute is of course to use and test the application and report bugs on Github using the [issue tracker](https://github.com/ENT8R/NotesReview/issues/). Just let me know if you spot something that looks suspicious. 🙃
