# Seniority Evaluation Task

## Getting started

Testing automation framework, built on WDIO and APPIUM. Please follow instructions below to prepare your environment.

## Preparing environment

Please download the code over terminal with the following command:

```
git clone https://code.tdlbox.com/gailius.besusparis/seniority-evaluation
```

Navigate to main folder of downloaded files, where `package.json` file is and run the following command:

```
npm install
```

After all the dependencies installed, you can run one of following scripts described in `package.json`:

```
# Runs mobile tests with Appium:
npm run wdio-mobile

# Runs web-api tests with WebdriverIO:
npm run wdio-web

# Generates Allure report from gathered data, if there are any:
npm run generate-allure
```
