# web-open

Open an url in the native webview

> Currently only Window and Linux has been tested but it should work on Mac too

## How it works?

It use [deskgap](https://github.com/patr0nus/DeskGap/) to open a native WebView and load the URL passed in command line argument

## Run with npx

```
npx webopen https://acailly.github.io
```

## Run from sources

```
git clone https://github.com/acailly/web-open
cd web-open
npm i
npm run start -- https://acailly.github.io
```
