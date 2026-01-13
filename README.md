<div>
  <h1 align="center"><a href="https://www.epicweb.dev/workshops">Structured Data 📦</a></h1>
  <strong>
    Organize and manipulate data with TypeScript's powerful data structures
  </strong>
  <p>
    Learn to work with objects, arrays, tuples, and enums—the building blocks for managing real-world data in your applications.
  </p>
</div>

<hr />

<div align="center">
  <a
    alt="Epic Web logo with the words Deployed Version"
    href="https://epicweb-dev-structured-data.fly.dev/"
  >
    <img
      width="300px"
      src="https://github-production-user-asset-6210df.s3.amazonaws.com/1500684/254000390-447a3559-e7b9-4918-947a-1b326d239771.png"
    />
  </a>
</div>

<hr />

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![GPL 3.0 License][license-badge]][license]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## Prerequisites

- [Programming Foundations](https://github.com/epicweb-dev/programming-foundations)
  workshop (or equivalent knowledge)
- Understanding of primitive types, variables, and functions in TypeScript

## Pre-workshop Resources

Here are some resources you can read before taking the workshop to get you up to
speed on some of the tools and concepts we'll be covering:

- [TypeScript Handbook - Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [TypeScript Handbook - Arrays](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)
- [JavaScript.info - Arrays](https://javascript.info/array)

## System Requirements

- [git][git] v2.18 or greater
- [NodeJS][node] v20 or greater
- [npm][npm] v8 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

Use the Epic Workshop CLI to get this setup:

```sh nonumber
npx --yes epicshop@latest add structured-data
```

If you experience errors here, please open [an issue][issue] with as many
details as you can offer.

## The Workshop App

Learn all about the workshop app on the
[Epic Web Getting Started Guide](https://www.epicweb.dev/get-started).

[![Kent with the workshop app in the background](https://github-production-user-asset-6210df.s3.amazonaws.com/1500684/280407082-0e012138-e01d-45d5-abf2-86ffe5d03c69.png)](https://www.epicweb.dev/get-started)

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[build-badge]: https://img.shields.io/github/actions/workflow/status/epicweb-dev/structured-data/validate.yml?branch=main&logo=github&style=flat-square
[build]: https://github.com/epicweb-dev/structured-data/actions?query=workflow%3Adeploy
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/epicweb-dev/structured-data/blob/main/LICENSE
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://kentcdodds.com/conduct
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/epicweb-dev/structured-data/issues/new
<!-- prettier-ignore-end -->
