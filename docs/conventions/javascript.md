# JavaScript coding conventions

We follow the most widely adopted JavaScript Style Guide: [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript). It helps us follow good practices and avoid some errors.

## Prettier

Upon that, we use [prettier](https://github.com/prettier/prettier) which removes all original styling and ensures that all outputted JavaScript conforms to a consistent style.

## ECL configuration

Thus, our [eslint-config-ecl](https://github.com/ec-europa/ecl-toolkit/tree/master/packages/eslint-config-ecl) extends both [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) and [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).

## Automatically format the code and fix errors

On every git commit, a hook is called and runs the following commands:

```json
  "*.js": [
    "prettier-eslint --write",
    "git add"
  ],
```

It formats your JavaScript using `prettier` followed by `eslint --fix`.

#### MIGRATED AND NOT PROCESSED

Not all components require a dedicated JavaScript file. Most of them have a simple enough behavior that could be solved with CSS only. The following rules only apply to components with more complex behaviors.

Apart from [rules that should be applied to all JS files](javascript.md), there are some specifications for components:

### Generic component

Generic components should export a function, so that the complex JavaScript behavior is available in the system components.
This function should have an explicit name, based on component name, and an action verb (generally "Init"). It should also use camel case.

Example:
_(File name: generic-component-navigation-menu.js)_

```
export const initNavigationMenu = ({ [...] } = {}) => {
  [...]
}

export default initNavigationMenu;
```

### Systems component

As for Twig files, there are 2 cases here: the system component has the same behavior as the corresponding generic component, or behaviors are different.

#### Same behavior

In this case, system components should use exported function from corresponding generic component.

Example:
_(File name: ec-component-navigation-menu.js)_

```
export * from '@ecl/generic-component-navigation-menu';
```

#### Different behavior

If we can't reuse the behavior from the generic component as is, the specific component has to provide the whole javascript (instead of using generic one).
This is the same structure as in the generic Twig file.

As we lose the advantage of generic components here, it is recommended, when possible, to keep the exact same behavior for different systems.
