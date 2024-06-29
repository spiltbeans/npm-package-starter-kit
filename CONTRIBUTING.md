# Contributing to npm-package-starter-kit

## Setup the Project

The following steps will get you up and running to contribute to npm-package-starter-kit:

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of
   [this page](#https://github.com/spiltbeans/npm-package-starter-kit))

2. Clone your fork locally

```sh
git clone https://github.com/spiltbeans/npm-package-starter-kit.git
cd npm-package-starter-kit
```

3. Setup all the dependencies and packages by running `npm i`. This
   command will install dependencies.

## Commands

**`npm install`**: bootstraps the entire project, symlinks all dependencies for
cross-component development and builds all components.

**`npm start`**: starts application.

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

-   `feat / feature`: all changes that introduce completely new code or new
    features
-   `fix`: changes that fix a bug (ideally you will additionally reference an
    issue if present)
-   `refactor`: any code related change that is not a fix nor a feature
-   `docs`: changing existing or creating new documentation (i.e. README, docs for
    usage of a lib or cli usage)
-   `build`: all changes regarding the build of the software, changes to
    dependencies or the addition of new dependencies
-   `test`: all changes regarding tests (adding new tests or changing existing
    ones)
-   `ci`: all changes regarding the configuration of continuous integration (i.e.
    github actions, ci system)
-   `chore`: all changes to the repository that do not fit into any of the above
    categories

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

### release-please

Note: if you'd like the release-please bot to bump the repo version use the following keywords:

-   `feat!:`, or `fix!:`, `refactor!:`, etc., which represent a breaking change (indicated by the `!`) and will result in a SemVer major.
-   `feat:` which represents a new feature, and correlates to a [SemVer](https://semver.org/) minor.
-   `fix:` which represents bug fixes, and correlates to a [SemVer](https://semver.org/) patch.

See more [here](https://github.com/googleapis/release-please)

## Pull Request Convention

When you create a pull request we kindly ask you to follow the convention `[type/scope]`. For example `fix/sync-org-hook` or `docs/deployment`. `type` can be either:

-   `docs`
-   `fix`
-   `feat`
-   `build`
-   or any other conventional commit type

`scope` is just a short id that describes the scope of work in [Kebab Case](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case).

## Steps to Pull Request

1. Fork of the `npm-package-starter-kit` repository and clone your fork.

2. Create a new branch from the `main` branch using the convention described [above](#pull-request-convention).

3. When ready to submit pull request, create a replica branch with the suffix `_STAGING` (e.g., `fix/sync-org-hook_STAGING`).

4. Rebase off of the `staging` branch. Recommended:

```
git rebase -i staging`
```

4. Submit both a pull request to `main` and `staging`.

5. When merging, use `Merge and Squash`.
