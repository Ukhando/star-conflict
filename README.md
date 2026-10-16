# Star Conflict Documentation

An unofficial community wiki for setting up the Star Conflict client and hosting
or joining a Star Conflict server. This repository contains the documentation
website; it does not contain the game or server software.

## Guides

- [Client Guide](docs/client/index.md): client setup, using Proton on Linux, and
	connecting to a server.
- [Hosting Guide](docs/hosting/index.md): server setup and port forwarding.
- [Blog](blog/): project updates and notes.

## Run Locally

Requires Node.js 20 or newer. Install dependencies and start the development
server:

```sh
npm install
npm run start
```

The local site is available at `http://localhost:3000/star-conflict/` and
refreshes as you edit the docs and site source.

## Build

```sh
npm run build
```

The generated static site is written to `build/`.


For details about the site framework, see the
[Docusaurus documentation](https://docusaurus.io/docs).
