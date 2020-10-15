# web-open

Open an url in the native webview

> Currently only Window has been tested but it should work on Mac and Linux too

## How it works?

It use [deskgap](https://github.com/patr0nus/DeskGap/) to open a native WebView and load the URL passed in command line argument

It is bundled with [nexe](https://github.com/nexe/nexe)

## Run with npx

```
npx webopen https://acailly.github.io
```

## Run from sources

```
git clone https://github.com/acailly/web-open
cd web-open
npm i
npm run start
```

## Build the webopen executable

On Windows:

```
npm run exe:win
```

On Linux:

```
npm run exe:linux
```

On Mac:

```
npm run exe:mac
```

## Use the webopen executable

```
webopen https://acailly.github.io
```
