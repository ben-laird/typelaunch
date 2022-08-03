# TypeLaunch

![GitHub](https://img.shields.io/github/license/ben-laird/typelaunch) ![GitHub all releases](https://img.shields.io/github/downloads/ben-laird/typelaunch/total) ![GitHub issues](https://img.shields.io/github/issues-raw/ben-laird/typelaunch) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/ben-laird/typelaunch) ![GitHub last commit](https://img.shields.io/github/last-commit/ben-laird/typelaunch) ![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/ben-laird/typelaunch)

TypeLaunch is an opinionated, public template repository made to easily bootstrap a TypeScript library with the latest features and best practices.

## Pipeline

### Setup

To use this template

There are multiple edits that should be made to personalize TypeLaunch. Below is a checklist in order of importance.

1. Add a `name` beyond "example" in [`package.json`](package.json) and [`package-lock.json`](package-lock.json)
2. Replace all instances of the placeholder name "John Appleseed" with the project owner's name.
   1. [`package.json`](package.json)
   2. [`LICENSE`](.github/LICENSE)
3. Replace all instances of the placeholder email "johnnyappleseed@example.com" with the project owner's email address.
   1. [`package.json`](package.json)
   2. [`CODE_OF_CONDUCT.md`](.github/CODE_OF_CONDUCT.md)
4. Customize these fields in [`package.json`](package.json):
   1. `description`
   2. `repository`: provide a link to the GitHub repo this project resides in
   3. `homepage`: provide a link to one of these resources
      1. Front-facing webpage
      2. Documentation
      3. GitHub repo
   4. `bugs.url`: provide a link to your bug tracker
   5. `keywords`

### Cycle

#### Opening

When opening the project, create two terminal windows. In one, run `npm watch:build`, and in the other, run `npm watch:test`. These will set up tsc and AVA to rebuild and retest your project, respectively, every time the project is saved. Best practice is to stop these terminals when closing the project, though that's not entirely necessary.

#### Committing

##### VSCode

When a commit is ready to be made, head to the Version Control pane and stage the files you'd like to commit. Next, look for the circle above the commit field labeled "Conventional Commits", or hit `Ctrl/Cmd + Shift + P` to open the Command Palette and find it that way. In the Command Palette, type "Conventional Commits" and find the command with that title.

The Conventional Commits extension will walk you through the steps to making a conventional commit that commitlint will accept. In fact, commitlint will be linting your commit message as you type it via the [`commit-msg`](.husky/commit-msg) hook. If you provide a description/body in your commit, when finished, the Conventional Commits extension will automatically commit your changes, running the [`precommit`](.husky/pre-commit) hook.

#### Command Line

## Conventions

This project adheres to the following conventions to keep code writing and reviewing easy.

1. [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
2. [Semantic Versioning](https://semver.org)
3. ESLint recommended rules
4. Prettier recommended rules

## Dependencies

This project makes use of some dev dependencies that enforce following the above conventions and overall improve code quality.

- Essentials
  - [TypeScript](https://www.typescriptlang.org/), a type-safe superset of JavaScript
  - [TypeDoc](https://typedoc.org) for generating documentation through docstrings
- Testing and Coverage
  - [AVA](https://avajs.dev), a test running library
  - [nyc](https://istanbul.js.org) for code coverage
- Linting and Formatting
  - [ESLint](https://eslint.org) for potential bugs and convention adherence
  - [Prettier](https://prettier.io) for styling
  - [CSpell](https://streetsidesoftware.github.io/cspell/) for possible spelling errors
  - [Markdownlint](https://github.com/DavidAnson/markdownlint) for formatting Markdown files
- Version Control and CI/CD
  - [Husky](https://typicode.github.io/husky) for automating running scripts via git hooks
  - [Commitlint](https://commitlint.js.org/) for enforcing Conventional Commit guidelines
  - [Lint-staged](https://github.com/okonet/lint-staged#readme) for only checking staged files
  - [GitHub Actions](https://docs.github.com/en/actions) for the wider CI/CD pipeline

## Recommendations

- TypeScript is provided for type-safety and is intended to be used instead of JavaScript. Both [tsconfig](tsconfig.json) and [tsconfig.module](tsconfig.module.json) also use strict mode, so the TypeScript compiler will complain about a lot of things. Remember, TypeScript errors are your friend.
- Usage of TypeDoc is highly encouraged, as it provides an easy way to produce documentation. The docstrings TypeDoc pulls from also allow IDE's like VSCode (my personal favorite) to provide inline documentation and tab completion directly in the editor!
- Use AVA and nyc for test-driven or behavior-driven development. Before working on the project, run `npm run watch:build` at the root of the project to build it whenever it's saved, then in a separate terminal instance, run `npm run watch:test` to run tests in watch mode. See the [Commands](typelaunch.md#commands) section for more details.
- Code should reside in the `src` directory and only in the `src` directory. All tools are configured to read files only from the `src` directory. `types` is a subdirectory intended to house type declarations for code or for modules that need to be declared. Oftentimes it's only used for the latter as the code usually implicitly contains its own type declarations through classes, functions, etcetera.

## Opinions and Philosophy

TypeLaunch is an opinionated template. The most important tenets of TypeLaunch are:

- Clutter bad, :x: intuitive structure good :white_check_mark:
- Rigidity bad, :x: easy customization good :white_check_mark:
- Looseness bad, :x: constructive strictness good :white_check_mark:
- Manual bad, :x: automatic help good :white_check_mark:

The more granular opinions are described below:

- ESLint Prettier, and CSpell are pre-configured in the [project's package file](package.json). This is where most of the opinions are.
  - Prettier has no config key because all presets/recommendations are followed.
  - All recommended ESLint presets are followed, with the exception of two additional rules. They are set to warn and not throw an exception because they are slightly pedantic.
    - `spaced-comment` is in `always` mode, which will "enforce consistent spacing after the // or /\* in a comment". See [here](https://eslint.org/docs/latest/rules/spaced-comment#rule-details) for details.
    - `yoda` is in `never` mode, which will disallow "Yoda conditions" where a literal is compared to a variable and not the other way around. See [here](https://eslint.org/docs/latest/rules/yoda#rule-details) for details.
- I've worked on projects where the root directory is a mess of config files with no way to hide them because they all had to be at the root. Therefore, I've tried to hide as much of the config in [`package.json`](package.json) as I can. Most of these config keys can be moved to their own files if necessary by making a `<package>rc.*` file at the root. Read the package's documentation before doing so to see if it is possible, but if so, feel free to.
- In the same spirit, the [license](.github/LICENSE) and [code of conduct](.github/CODE_OF_CONDUCT.md) are in the `.github` folder, but can be moved to the project root.
- Part of the reason I made this template is to have full control over what tools I used and how I used them. I brought this design philosophy to TypeLaunch as much as I could; if a package is getting in your way, you just need to remove any mentions of it in `.husky` hooks or `package.json` scripts and then run `npm uninstall <package>`. It's that simple.
- TypeLaunch is also dependency-free for a reason: the thing shouldn't get in the way of what your application needs and should only help you if you develop it. Usage of TypeLaunch not contributing to build sizes is also a nice plus.
- Errors are your friend. No seriously. I've configured TypeLaunch to berate the developer with errors, exceptions, and test failures. Errors are also the lifeblood of test-driven development, a practice I'm getting better at following. Adding these errors is meant to make sure the code, docs, and tests are in tip-top shape.

## Commands

Utilize these commands in your development pipeline by running `npm run <command>`. For convenience, a table for these commands is included here:

| Command        | Description                                                                                        |
| -------------- | -------------------------------------------------------------------------------------------------- |
| build          | run all `build:*` commands in parallel                                                             |
| build:main     | build the project using `tsc` and specs in [tsconfig.json](tsconfig.json)                          |
| build:module   | build the project using `tsc` and specs in [tsconfig.module.json](tsconfig.module.json.json)       |
| watch:build    | build the project in watch mode                                                                    |
| watch:test     | run project tests in watch mode                                                                    |
| fix            | run all fix commands sequentially                                                                  |
| fix:prettier   | run prettier on all `src` .ts files and fix some violations                                        |
| fix:lint       | run eslint on all .ts files and fix some violations                                                |
| fix:markdown   | run markdownlint on all .md files and fix some violations as well as check spelling                |
| test           | run all test commands sequentially                                                                 |
| test:lint      | run eslint on all .ts files                                                                        |
| test:prettier  | run prettier on all `src/**/*.ts` files                                                            |
| test:spelling  | check spelling for [`README.md`](README.md), all `.github/*.md` files, and all `src/**/*.ts` files |
| test: markdown | run markdownlint on all .md files as well as check spelling for .md files                          |
| test:unit      | run AVA tests and nyc code coverage                                                                |
| cov            | unit test, create coverage reports, and open the html coverage report                              |
| cov:html       | create html coverage report                                                                        |
| cov:lcov       | create lcov coverage report                                                                        |
| cov:check      | run an nyc report and the `check-coverage` command                                                 |
| doc            | create html documentation and open it                                                              |
| doc:html       | create html documentation                                                                          |
| doc:json       | create json documentation                                                                          |
| lint-staged    | run the `lint-staged` cli                                                                          |
| release        | create a release                                                                                   |
| prepare        | setup husky hook tool                                                                              |

Not included in the table are the `___Section` commands, which are mostly meant to visually split the `package.json` scripts apart. If ever it is unclear what sections of commands are available in the developer pipeline, simply run `npm run sections` to get the summary of each section of commands. To get a summary of a single section, run `npm run ___Section:<section-name>`.
