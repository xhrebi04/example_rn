Example React Native app is mobile application used for demonstration purposes. For small project like this **Javascript** language was used. For larger projects, **Typescript** must also be considered.

# My Tech Stack

> **Note**: Not all these libraries are used in this project.

- **react-native 0.76.5**
- **axios** - HTTP client
- **react-navigation** - navigation library
- **react-native-config** - handling enviroment or configuration
- **react-redux & @reduxjs/toolkit** - Redux for state management
- **react-hook-form** - handling forms
- **@react-native-async-storage/async-storage** - storing unencrypted values
- **react-native-keychain** - keychain/keystore access (e.g. storing Access Token)
- **react-native-localize** - app localization
- **ESLint** - linting utility for better code quality
- **Prettier** - code formatter for better code quality

## Useful commands

```bash
# create release *.apk file for testing
yarn run create-release-apk

# run lint
yarn run lint

# iOS setup
cd path/to/example_rn-main/folder
yarn install
cd ios && pod install && cd ..
```
