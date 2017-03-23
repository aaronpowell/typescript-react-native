# Problem

When trying to compile with TypeScript you get a bunch of errors that `native-base` can't find the React Native TypeScript stuff. This doesn't seem to make sense since the `@types/react-native` package is installed and `native-base` includes definitions for it too.

## To build

Run the following:

```
npm run build
```

It results in the following errors:

```
node_modules/native-base/index.d.ts(6,38): error TS2694: Namespace 'React' has no exported member 'TextProperties'.
node_modules/native-base/index.d.ts(10,40): error TS2694: Namespace 'React' has no exported member 'SwitchProperties'.
node_modules/native-base/index.d.ts(12,38): error TS2694: Namespace 'React' has no exported member 'ViewProperties'.
node_modules/native-base/index.d.ts(16,40): error TS2694: Namespace 'React' has no exported member 'PickerProperties'.
node_modules/native-base/index.d.ts(21,36): error TS2694: Namespace 'React' has no exported member 'TextProperties'.
node_modules/native-base/index.d.ts(25,36): error TS2694: Namespace 'React' has no exported member 'TextProperties'.
node_modules/native-base/index.d.ts(29,36): error TS2694: Namespace 'React' has no exported member 'TextProperties'.
node_modules/native-base/index.d.ts(33,39): error TS2694: Namespace 'React' has no exported member 'ViewProperties'.
node_modules/native-base/index.d.ts(74,27): error TS2694: Namespace 'React' has no exported member 'ViewStyle'.
node_modules/native-base/index.d.ts(97,27): error TS2694: Namespace 'React' has no exported member 'ViewStyle'.
node_modules/native-base/index.d.ts(103,27): error TS2694: Namespace 'React' has no exported member 'ViewStyle'.
node_modules/native-base/index.d.ts(109,27): error TS2694: Namespace 'React' has no exported member 'ViewStyle'.
node_modules/native-base/index.d.ts(115,27): error TS2694: Namespace 'React' has no exported member 'ViewStyle'.
node_modules/native-base/index.d.ts(125,27): error TS2694: Namespace 'React' has no exported member 'ViewStyle'.
node_modules/native-base/index.d.ts(136,27): error TS2694: Namespace 'React' has no exported member 'ViewStyle'.
node_modules/native-base/index.d.ts(141,40): error TS2694: Namespace 'React' has no exported member 'TouchableOpacityProperties'.
node_modules/native-base/index.d.ts(145,27): error TS2694: Namespace 'React' has no exported member 'ViewStyle'.
node_modules/native-base/index.d.ts(149,31): error TS2694: Namespace 'React' has no exported member 'TextStyle'.
node_modules/native-base/index.d.ts(219,42): error TS2694: Namespace 'React' has no exported member 'TouchableOpacityProperties'.
node_modules/native-base/index.d.ts(245,42): error TS2694: Namespace 'React' has no exported member 'TouchableOpacityProperties'.
node_modules/native-base/index.d.ts(253,57): error TS2694: Namespace 'React' has no exported member 'ScrollViewProperties'.
node_modules/native-base/index.d.ts(253,97): error TS2694: Namespace 'React' has no exported member 'ListViewStatic'.
node_modules/native-base/index.d.ts(339,51): error TS2694: Namespace 'React' has no exported member 'ScrollViewProperties'.
node_modules/native-base/index.d.ts(339,101): error TS2694: Namespace 'React' has no exported member 'ScrollViewProperties'.
node_modules/native-base/index.d.ts(377,35): error TS2694: Namespace 'React' has no exported member 'ListViewStatic'.
node_modules/native-base/index.d.ts(377,58): error TS2694: Namespace 'React' has no exported member 'ScrollViewStatic'.
node_modules/native-base/index.d.ts(377,83): error TS2694: Namespace 'React' has no exported member 'ViewStatic'.
node_modules/native-base/index.d.ts(382,38): error TS2694: Namespace 'React' has no exported member 'ViewProperties'.
node_modules/native-base/index.d.ts(384,37): error TS2694: Namespace 'React' has no exported member 'ViewProperties'.
node_modules/native-base/index.d.ts(384,60): error TS2694: Namespace 'React' has no exported member 'ListViewProperties'.
node_modules/native-base/index.d.ts(385,35): error TS2694: Namespace 'React' has no exported member 'ViewProperties'.
node_modules/native-base/index.d.ts(390,38): error TS2694: Namespace 'React' has no exported member 'ViewProperties'.
node_modules/native-base/index.d.ts(391,37): error TS2694: Namespace 'React' has no exported member 'ViewProperties'.
node_modules/native-base/index.d.ts(392,37): error TS2694: Namespace 'React' has no exported member 'ViewProperties'.
node_modules/native-base/index.d.ts(396,44): error TS2694: Namespace 'React' has no exported member 'ViewProperties'.
node_modules/native-base/index.d.ts(425,39): error TS2694: Namespace 'React' has no exported member 'TextInputProperties'.
node_modules/native-base/index.d.ts(442,42): error TS2694: Namespace 'React' has no exported member 'TextInputProperties'.
node_modules/native-base/index.d.ts(450,27): error TS2694: Namespace 'React' has no exported member 'TextStyle'.
node_modules/native-base/index.d.ts(456,43): error TS2694: Namespace 'React' has no exported member 'ImageProperties'.
node_modules/native-base/index.d.ts(476,41): error TS2694: Namespace 'React' has no exported member 'ActivityIndicatorProperties'.
node_modules/native-base/index.d.ts(503,28): error TS2694: Namespace 'React' has no exported member 'ViewStyle'.
node_modules/native-base/index.d.ts(504,26): error TS2694: Namespace 'React' has no exported member 'ViewStyle'.
node_modules/native-base/index.d.ts(505,35): error TS2694: Namespace 'React' has no exported member 'ViewStyle'.
node_modules/native-base/index.d.ts(506,33): error TS2694: Namespace 'React' has no exported member 'ViewStyle'.
node_modules/native-base/index.d.ts(517,34): error TS2694: Namespace 'React' has no exported member 'ScaledSize'.
node_modules/native-base/index.d.ts(554,35): error TS2694: Namespace 'React' has no exported member 'ViewStyle'.
node_modules/native-base/index.d.ts(555,30): error TS2694: Namespace 'React' has no exported member 'TextStyle'.
node_modules/native-base/index.d.ts(556,36): error TS2694: Namespace 'React' has no exported member 'TextStyle'.
node_modules/native-base/index.d.ts(669,57): error TS2694: Namespace 'React' has no exported member 'PickerItemProperties'.
src/input.tsx(11,14): error TS2339: Property 'placeholder' does not exist on type 'IntrinsicAttributes & IntrinsicClassAttributes<Input> & Readonly<{ children?: ReactNode; }> & Rea...'.
```
