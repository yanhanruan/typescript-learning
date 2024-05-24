typescript-learning-note

- **Singleton** design pattern

```typescript
export default class FullList implements List {

    static instance: FullList = new FullList()

    private constructor(
        private _list: ListItem[] = [],
    ) { }
}
```

The line `static instance: FullList = new FullList()` in your code is implementing a design pattern known as the **Singleton**.

In the Singleton pattern, a class ensures that only a single instance of itself can be created. This is useful when exactly one object is needed to coordinate actions across the system.

Here’s how it works in your code:

- `static instance: FullList = new FullList()` creates a static instance of the `FullList` class. The `static` keyword means that the variable `instance` belongs to the `FullList` class itself, not to any instance of the class.
- The `new FullList()` part is calling the constructor of the `FullList` class, which creates a new instance of the class.
- Because the constructor is `private`, it can’t be called from outside the class. This ensures that no more instances of `FullList` can be created.
- Whenever you need to use the `FullList`, you can access it via `FullList.instance`. This will always return the same instance, ensuring that there’s only one `FullList` in your application.

This pattern is commonly used in scenarios where system-wide actions need to be coordinated from a single central place. For example, in a logging system, where messages from throughout an application need to be funneled to a single output, or in a database connection pool, where the number of connections needs to be limited to a specific number.



- convert any type to boolean type

The !! operator in JavaScript is a common way to convert a value to a boolean. Here’s how it works:

The first ! is the logical NOT operator, which negates the value. This means that it converts truthy values (values that are considered true in a boolean context) to false and falsy values (values that are considered false in a boolean context) to true.
The second ! negates the value again, effectively converting the original truthy values to true and the original falsy values to false.
In JavaScript, the following values are considered falsy:

false
0 and -0
"" (empty string)
null
undefined
NaN
All other values are considered truthy. So, for example, !!"hello" would return true because "hello" is a truthy value, while !!0 would return false because 0 is a falsy value.

**empty array and object will be converted to true**



- usage of underscode


The underscore `_` prefix in `_id` is a common convention used in many programming languages, including TypeScript and JavaScript, to indicate that a property or variable is intended to be private or protected. 