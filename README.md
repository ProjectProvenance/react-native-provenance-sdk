# react-native-provenance-sdk

A library to add Provenance experiences into your mobile applications to validate sustainability credentials of products you sell.

## Installation

```sh
npx expo install react-native-webview@^13.10.3 		# install webview that should match the version of webviewe from the package
npm install react-native-provenance-sdk --save      # Note, keep save it's important for linking
# OR until available on npm
# npm install ProjectProvenance/react-native-provenance-sdk --save
npx expo run:android --no-build-cache 			    # ensures linking, after this `npx expo start` works as usual
```

## Usage

```js
import { multiply } from 'react-native-provenance-sdk';

// ...

const result = await multiply(3, 7);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
