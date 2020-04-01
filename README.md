# Battle.net Classic Web Bot

![Demo bot](.github/demo.png?raw=true)

Built with:

- React (CRA)
- Emotion
- Typescript

## Obtain an API Key from Blizzard

An API key is required to connect.

Connect to Battle.net using `StarCraft Remastered`, `Diablo 2` or `Warcraft 3` and once in your preferred
channel (Op or Clan) use the command `/register-bot` to start the registration process. An email is
required to be registered to the account and after executing the command an email with activation link will be sent to the email on file. The user is required to click on the link to get a valid API Key. Executing the command a second time will issue a new API Key and invalidate the old key.

## Available Scripts

```
// Installs dependencies
yarn

// Runs the app in the development mode.
yarn start

// Builds the app for production to the `build` folder
yarn build

// Launches the test runner in the interactive watch mode.
yarn test
```

## Note

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
