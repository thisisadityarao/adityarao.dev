---
title: "Javascript Linting with ESLint."
date: 2017-09-09
---

[ESLint][1] is a powerful and customizable Javascript [linter][2].

## What is a linter ?

**Linters** are programs that check your source code for syntactic errors and helps you adhere to certain style guidelines. It helps keep your code readable and maintain code quality.
Linters are static analysis tools (they inspect the code without executing them) hence, they are available as online programs, as extension/plugins for your favourite code editor, or as a CLI tool.

**ESLint** is an open source Javascript linter that lets you define your own linting rules. ESLint does not promote any particular coding style although it ships with some built-in rules to get you started.

## Prerequisite

You need to know Javascript. ESlint is Javascript tool that works on Javascript files.

## Installing ESLint

ESLint is written using Node.js and can be installed using npm.

1. Install ESLint locally

   ```shell
   $ npm install eslint --save-dev
   ```

2) Setup a configuration file

   ```shell
   $ ./node_modules/.bin/eslint --init
   ```

This will create `.eslintrc` configuration file by guiding you through a brief setup process.

3. You can run ESLint in your project’s root directory like so

   ```shell
   # yourfile.js is the javascript file to be linted.

   $ ./node_modules/.bin/eslint yourfile.js
   ```

**If you want to install ESLint globally than follow these steps:**

1. Install ESLint globally

   ```shell
   $ npm install -g eslint
   ```

2) Setup configuration file

   ```shell
   $ eslint --init
   ```

3. Run eslint on any file
   ```shell
   $ eslint yourfile.js
   ```

## Cool, but how does it work?

Let's create a demo project to install and use ESLint.

1. Let's create a directory `eslint-demo` and initialize `npm` within project folder.

   <script type="text/javascript" src="https://asciinema.org/a/qcbKUddGYu0m1oKj15WrfHMey.js" id="asciicast-qcbKUddGYu0m1oKj15WrfHMey" async></script>

2. Install ESLint locally and initialize it.
   <script type="text/javascript" src="https://asciinema.org/a/MRBt0KYM2Kt18yufJdIg0KK2v.js" id="asciicast-MRBt0KYM2Kt18yufJdIg0KK2v" async></script>

Open the `.eslintrc` file and you'll see the following JSON object. ( if you choose to save it as `.json` file as I did.)

```json
{
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 4],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"]
  }
}
```

ESLint will set up `.eslintrc` file with some initial settings depending on the options you choose. We can see few properties and their values here. We can change, remove, or override these values.

The first property we see is `env`, which defines the javascript runtime environment. Here it is set to browser. For Node `env` will instead have `"browser": true,` set.
By default, ESLint will parse ES5. `"es6": true` will enable ESLint for ES6.

```json
"env": {
    "browser": true,
    "es6": true
}
```

Next `extends` property extends the _recommended rules_ provided by ESLint.

```json
"extends": "eslint:recommended"
```

With `parserOptions` you can define features that are not in ECMAScript 5 by default, such as _ES6 syntax_, _modules_, _jsx_ etc.

```json
"rules": {
    "indent": [
        "error",
        4
    ],
    "linebreak-style": [
        "error",
        "unix"
    ],
    "quotes": [
        "error",
        "double"
    ],
    "semi": [
        "error",
        "always"
    ]
}
```

Finally, we have the `rules` object. Each `rule` can be set to one of the three values; `error`, `warn` and `off`. Each rule will check the javascript file for syntactic or logical consistency. To know about what a particular rule does you should refer to [this page][3].
Depending on the value set for each rule, ESLint will throw an **error** if the value of the rule is set as `error` or **warn** you for the value set to `warn` or you can decide not to check for the rule by setting its value `off`.
ESLint is powerful as it allows you to create your **own** rules.

```json
"env": {
    "browser": true,
    "es6": true
}
```

In our .eslintrc file, we have four rules defined in `rules` object. There are of course more than four rules defined in our config file, as we have extended `eslint:recommended` property. The rules defined in `rules` object **override** the corresponding rules set by `eslint:recommended`.

### Lets lint our code

It's time to test our config. Create a javascript file, **yourfile.js** with `console.log("Hello World")` statement and use ESLint on it to check for any errors.

<script type="text/javascript" src="https://asciinema.org/a/0Qpl1htHLHBsR8HX7wB2QVGuI.js" id="asciicast-0Qpl1htHLHBsR8HX7wB2QVGuI" async></script>

As you can see ESLint throws two errors `no-console` error & `semi` error. The `no-console` error is thrown as ESLint doesn't allow console statements on browser environment. This rule is defined in `eslint:recommended` property. The `semi` error is defined in the rules object. It checks for semicolon at the end of the statement and throws an error if it's missing.
See how easy it is to get started with ESLint.

If you head over to rules page on ESlint website you can see checkmarks before some rules. If any of these rules throws an error or warning ESlint can fix these rules using `./node_modules/.bin/eslint --fix yourfile.js` command.

<script type="text/javascript" src="https://asciinema.org/a/lLTGsVY9If72rOqdKPmHIH4Kw.js" id="asciicast-lLTGsVY9If72rOqdKPmHIH4Kw" async></script>

We see that ESLint fixes the no semicolon error with `--fix` flag. ESLint won't remove the console.log statement so `no-console` error is left for the developer to take care of.

We are using ESLint as command line tool, but ESLint can be integrated with your favourite text editor or your favourite build tool as well.
[This page][4] provides you with the list supported text-editors and recommended extension/plugins for them and information on how you can integrate it with build tools.

## Related Resources

[ESLint][1]

[1]: https://eslint.org/
[2]: https://en.wikipedia.org/wiki/Lint_(software)
[3]: https://eslint.org/docs/rules/
[4]: https://eslint.org/docs/rules/
