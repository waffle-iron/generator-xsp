# generator-xsp

> a yeoman generator to scaffold an XPages runtime (xsp) compliant On Disk Project (ODP)

<!--
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
-->

## Installation

First, install [Yeoman](http://yeoman.io) and generator-xsp using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-xsp
```

## Use

Then generate your new project:

```bash
yo xsp
```

### Importing to DDE

Importing your On Disk Project (ODP) into IBM Domino Designer is the end-goal. This will not work as a full NSF application without being interacted with from a Domino Designer instance.

If you need help getting started with source control and its relationship to Domino/XPages applicaitons, you may wish to get started at Notes in 9 episode 131: Use SourceTree for Better XPages Source Control](http://www.notesin9.com/2013/11/12/notesin9-131-use-sourcetree-for-better-xpages-source-control/).

### Sub-Generators

A sub-generator is one that creates/scaffolds a _part_ or _parts_ of an _app_. By default, yeoman will generator the entirety of the defined _app_. For example, if one were to [look at generator-angular](https://github.com/yeoman/generator-angular#generators), you would find that you can scaffold an _app_ or a specific _directive_ or _filter_, etc. The format of this follows the basics of `yo xsp:<sub-generator>`.

Available are:

* XPages, `yo xsp:xpage`
* Custom Controls, `yo xsp:cc`
* more coming soon!

### Optional Inline Naming

For any of the sub-generators, you can optionally pass in as a CLI parameter the name, as opposed to being prompted for it each time. An example of creating an XPage in your app (from the rood project directory path), with a name of "beer" (`ODP/XPages/beer.xsp`), is:

```bash
yo xsp:xpage beer
```

## About

Yeoman is a "scaffolding tool for modern webapps". This generator, a scaffolding "blueprints", invoked after Yeoman's CLI command (`yo anAwesomeGenerator`), was built using [Yeoman's generator-generator](https://github.com/yeoman/generator-generator). Feel free to [learn more about it at all yeoman.io](http://yeoman.io/).

The generator builds a starter On Disk Project (ODP) from which this application (NSF) can be built. The NSF is a stock app, with virtually no content, save this XPage, for reference.

Out of the box, you should be prompted for an applicaiton name (which will drive the ap name, ODP name, and file name). Over time, more options will be configured to prompt, with defaults specified.

### An XPages Flavor

To see more about how this, and other advanced, node-based tooling, can be used with XPages applications, check out the author's [blog series on task runners with Domino/XPages](https://edm00se.io/task-runners-with-domino-apps).

## Road Map

Currently planned

Near term:

- [x] default app Theme inclusion
- [ ] starter CSS and JS files
- [ ] possibly automate pulling from XPages boilerplate resources, such as a `JSFUtil` class, etc.

Long term:

- [ ] config of **common** XSP properties
- [ ] config inclusion of `ExtLib` (assumes dependency already on server), and/or other/given plugins to enable for NSF
- [ ] specify the Theme the app theme will extend (Bootstrap 3, oneui, webstandard, etc.)
- [ ] scaffold basic Java packages and classes
- [ ] scaffold managed bean (at specified *Scope)

### Want More?

Feel free to report bugs [in Issues](https://github.com/edm00se/generator-xsp/issues), and should you have an addition to the road map, [create a Pull Request to this repo, of just this ReadMe.md](https://github.com/edm00se/generator-xsp/edit/master/ReadMe.md), with what you would like added. If you would like to contribute otherwise, read the [CONTRIBUTING guide](https://github.com/edm00se/generator-xsp/blob/master/CONTRIBUTING.md), then [create a Pull Request from a Fork](https://github.com/edm00se/generator-xsp/compare).

## License

The code in this project governs my unique contributions and is open, free to use and redistribute or modify, for public or private use, without warranty or liability.

[The MIT License (MIT)](http://choosealicense.com/licenses/mit/) © 2016 Eric McCormick

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[npm-image]: https://badge.fury.io/js/generator-xsp.svg
[npm-url]: https://npmjs.org/package/generator-xsp
[travis-image]: https://travis-ci.org/edm00se/generator-xsp.svg?branch=master
[travis-url]: https://travis-ci.org/edm00se/generator-xsp
[daviddm-image]: https://david-dm.org/edm00se/generator-xsp.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/edm00se/generator-xsp
[coveralls-image]: https://coveralls.io/repos/edm00se/generator-xsp/badge.svg
[coveralls-url]: https://coveralls.io/r/edm00se/generator-xsp
