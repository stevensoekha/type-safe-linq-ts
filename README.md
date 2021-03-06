## Type Safe LINQ in TypeScript

A small system in which data can be easily retrieved by querying in a type safe manner. This is the [assignment](https://github.com/hogeschool/Software-Engineering-Minor/blob/master/Projects/project2%20-%20mini%20typesafe%20LINQ%20to%20SQL.md) regarding the third year minor Software Engineering at the Hogeschool Rotterdam.

### Preface: Thinking out loud
![Brainstorming](./documentation/preface.png)

A proper way to start of this project is by brainstorming. In this session all problems, questions and thoughts were documented on paper to get a clearer view of the assignment.


### Fase 1: Select
![Category](./documentation/fase-1-1.png)

The first step was to think in terms of a category. This category, in which there is movement by morphisms, has been carefully designed to be as simple as possible.

<br />

![Query](./documentation/fase-1-2.png)

The `Query<a>` type in more depth

<br />

![SelectedQuery](./documentation/fase-1-3.png)

The `SelectedQuery<a,b>` type in more depth

<br />

### Fase 2: Include
![Update Category](./documentation/fase-2-1.png)

Updating the category by adding a new morphism: `include: SelectedQuery -> SelectedQuery`.

<br />

![Update SelectedQuery](./documentation/fase-2-2.png)

In order to add the `include()`, `SelectedQuery<a,b>` must be updated with this new functionality.

<br />
