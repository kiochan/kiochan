# Kiochan's Home Page

[![CI Build](https://img.shields.io/github/actions/workflow/status/kiochan/kiochan/ci.yml?branch=dev&label=Build&logo=github)](https://github.com/kiochan/kiochan/actions/workflows/ci.yml/badge.svg?branch=dev)
[![CI Build](https://img.shields.io/github/actions/workflow/status/kiochan/kiochan/ci.yml?branch=prod&label=Deploy&logo=github)](https://github.com/kiochan/kiochan/actions/workflows/ci.yml?query=branch%3Aprod)

This is Kiochan's homepage, primarily built with Nx, to apply, summarize, and showcase the cool things I'd like to try.

## Features

- app-web: A homepage built with React.js / Next.js for [Kiochan.one](https://kiochan.one)。

## Wanna try it youself?

If you want to try a local installation, please follow these steps:

1. Clone the project

   ```bash
   git clone https://github.com/kiochan/kiochan.git
   ```

2. Install dependencies

   ```bash
   cd kiochan
   ```

3. Build Project
   To ensure that the build follows the dependency order, you can use the --with-deps option.

   ```bash
   nx run-many --target=build --all --with-deps
   ```

4. Run a application
   Since this project is managed with Nx, you just need to run the following command:

   ```bash
   npx nx start app-web
   ```

## Contributing

Contributions are welcome!

## License

This project is licensed under the [MIT License](./LICENSE)。
