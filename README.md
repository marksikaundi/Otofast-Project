<p align="center">
    <a href="https://github.com/badges/shields/graphs/contributors" alt="Contributors">
    <a href="https://github.com/badges/shields/pulse" alt="Activity">
        <img src="https://img.shields.io/github/commit-activity/m/badges/shields" /></a>
    <a href="https://circleci.com/gh/badges/shields/tree/master">
        <img src="https://img.shields.io/circleci/project/github/badges/shields/master" alt="build status"></a>
    <a href="https://circleci.com/gh/badges/daily-tests">
        <img src="https://img.shields.io/circleci/project/github/badges/daily-tests?label=service%20tests"
            alt="service-test status"></a>
    <a href="https://coveralls.io/github/badges/shields">
        <img src="https://img.shields.io/coveralls/github/badges/shields"
            alt="coverage"></a>
    <a href="https://discord.gg/Pf9kBYDv">
        <img src="https://img.shields.io/discord/308323056592486420?logo=discord"
            alt="chat on Discord"></a>
    <a href="https://twitter.com/intent/follow?screen_name=Alisikaundi">
        <img src="https://img.shields.io/twitter/follow/Alisikaundi?style=social&logo=twitter"
            alt="follow on Twitter"></a>
</p>

This is home to [Otofast Project](http://otofastproject.com/), Otofast Project is a vibrant community of technology enthusiasts and professionals who are passionate about exploring the latest trends and innovations in the tech industry. With a focus on fostering collaboration, creativity, and learning, the community provides a platform for members to connect with like-minded individuals, share their ideas and expertise, and participate in engaging discussions and events.

Whether you're a seasoned tech expert or just starting out in your career, Otofast offers a welcoming and supportive environment where you can learn from others, gain new insights and perspectives, and build meaningful connections with peers and mentors. Members of the community come from a diverse range of backgrounds and fields, including software development, data science, cybersecurity, AI, and more, making it a great place to explore different areas of interest and broaden your horizons.

From meetups and hackathons to online forums and social media groups, Otofast offers a range of opportunities for members to connect and engage with the community. Whether you're looking to network, collaborate on a project, or simply learn more about the latest trends and technologies, Otofast is the place to be for anyone passionate about tech., [VS Code][vscode], [React.js][React]
and [Bootstrap][bootstrap] to name a few.

[vscode]: https://github.com/Microsoft/vscode
[vue]: https://github.com/vuejs/vue
[bootstrap]: https://github.com/twbs/bootstrap

This repo hosts:

- The [Otofast][otofastproject.com]
- Frontend only - {backend near future}
  - [documentation]()
  - [changelog]()
- The [frontend design specification]()

[badge-maker]: https://www.npmjs.com/package/badge-maker
[badge-spec]: https://github.com/badges/shields/tree/master/spec
[badge-maker-docs]: https://github.com/badges/shields/tree/master/badge-maker/README.md
[badge-maker-changelog]: https://github.com/badges/shields/tree/master/badge-maker/CHANGELOG.md

## Examples

- code coverage percentage: ![coverage](https://img.shields.io/badge/coverage-80%25-yellowgreen)
- stable release version: ![version](https://img.shields.io/badge/version-1.2.3-blue)
- package manager release: ![gem](https://img.shields.io/badge/gem-2.2.0-blue)
- status of third-party dependencies: ![dependencies](https://img.shields.io/badge/dependencies-out%20of%20date-orange)
- static code analysis grade: ![codacy](https://img.shields.io/badge/codacy-B-green)


### Quickstart👨‍💻

Browse a [complete list of featured you can contribute to][Ducumentation.md] and locate a particular badge by using the search bar or by browsing the categories. Click on the badge to fill in required data elements for that badge type (like your username or repo) and optionally customize (label, colors etc.). And it's ready for use!

Use the button at the bottom to copy your badge url or snippet, which can then be added to places like your GitHub readme files or other web pages.

## Contributing

Otofast Project Community. We invite your participation through issues
and pull requests. You can peruse the [contributing guidelines][contributing].

When adding or changing a service [please add tests][service-tests].

This project has quite a backlog of suggestions! If you're new to the project,
maybe you'd like to open a pull request to address one of them.

You can read a [tutorial on how to add a badge][tutorial].

[![GitHub issues by-label](https://img.shields.io/github/issues/badges/shields/good%20first%20issue)](https://github.com/badges/shields/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

[service-tests]: https://github.com/badges/shields/blob/master/doc/service-tests.md
[tutorial]: https://github.com/badges/shields/blob/master/doc/TUTORIAL.md
[contributing]: https://github.com/badges/shields/blob/master/CONTRIBUTING.md

## Development

1. Install Node 16 or later. You can use the [package manager][] of your choice.
   Tests need to pass in Node 16 and 17.
2. Clone this repository.
3. Run `npm i or yarn add` to install the dependencies.
4. Run `npm run dev or yarn run dev` to start the badge server and the frontend dev server.
5. Open `http://localhost:3000/` to view the frontend.

When server source files change, the badge server should automatically restart
itself (using [nodemon][]). When the frontend files change, the frontend dev
server (`gatsby dev`) should also automatically reload. However the badge
definitions are built only before the server first starts. To regenerate those,
either run `npm run defs` or manually restart the server.

To debug a badge from the command line, run `npm run badge -- /npm/v/nock`.
It also works with full URLs like
`npm run badge -- https://img.shields.io/npm/v/nock`.

Use `npm run debug:server` to start server in debug mode.
[This recipe][nodemon debug] shows how to debug Node.js application in [VS Code][].


Daily tests, including a full run of the service tests and overall code coverage, are run via [badges/daily-tests][daily-tests].

[package manager]: https://nodejs.org/en/download/package-manager/
[gitpod]: https://www.gitpod.io/
[snapshot tests]: https://glebbahmutov.com/blog/snapshot-testing/
[prometheus]: https://prometheus.io/
[prometheus configuration]: https://github.com/badges/shields/blob/master/doc/self-hosting.md#prometheus
[sentry]: https://sentry.io/
[sentry configuration]: https://github.com/badges/shields/blob/master/doc/self-hosting.md#sentry
[daily-tests]: https://github.com/badges/daily-tests
[nodemon]: https://nodemon.io/
[nodemon debug]: https://github.com/Microsoft/vscode-recipes/tree/master/nodemon
[vs code]: https://code.visualstudio.com/

## Related projects

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

Since this is an open source project, feel free to suggest what basically looks good and great for the project then you can make a PR.
[Contributions][contributing to awesome-badges] may be considered there.
(The presence of a project in that collection should not be interpreted as an endorsement nor promotion from the Shields project)

[awesome-badges]: https://github.com/badges/awesome-badges
[contributing to awesome-badges]: https://github.com/badges/awesome-badges/blob/main/CONTRIBUTING.md


## License

All assets and code are under the [MIT LICENSE](LICENSE) and in the public
domain unless specified otherwise.

The assets in `logo/` are trademarks of their respective companies and are
under their terms and license.

## Community

Thanks to the people and companies who donate money, services or time to keep the project running. [Otofast Project](http://otofastproject.com/)
