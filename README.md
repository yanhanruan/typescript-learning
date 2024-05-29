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



**how to setState correctlly**

The `setState` function you’re familiar with, where you pass a direct value like `setState(0)`, is used to set the state to that specific value, regardless of its previous value. This is straightforward when you know the exact value you want to set the state to.

However, the `setState(prev => prev + 1)` usage is slightly different. It’s used when you want to update the state based on its **previous value**. Here’s a detailed explanation:

```jsx
setState(prev => prev + 1)
```



- `setState`: This is the function to update the state variable `count`.
- `prev`: This is a parameter that represents the **current state** of `count` just before the update. You can name it anything, but `prev` is commonly used to indicate that it’s the previous state.
- `prev + 1`: This is the new value you’re calculating for the state. You take the previous value of `count`, add 1 to it, and this becomes the new state after the update.

The reason for using a function that receives the previous state and returns the new state is to ensure that the update is **reliable** and **predictable**. In React, state updates may be asynchronous, which means if you have multiple `setState` calls in a row, they might not always reflect the immediate changes of the state. By using the previous state directly, you might end up with outdated values.

When you pass a function to `setState`, React guarantees that the `prev` parameter is the most recent value of the state at the time the update is applied. This is particularly useful when the new state depends on the old state, like in a counter where each increment is based on the last value.

Here’s an example to illustrate the difference:

- If you use `setState(count + 1)`, and `count` is 1, you might expect `count` to become 2. But if `setState` is called multiple times before the component re-renders, all calls might read `count` as 1 and set it to 2, ignoring intermediate states.
- If you use `setState(prev => prev + 1)`, each call will correctly increment the previous state, so if it’s called twice in quick succession, `count` will become 3 as expected.

In summary, using `prev => prev + 1` ensures that each state update is based on the most up-to-date value of the state, avoiding potential bugs in scenarios where the state is updated multiple times in rapid succession. It’s a best practice when the new state is calculated from the old state.





