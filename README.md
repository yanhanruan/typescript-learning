# TypeScript

## **Singleton** design pattern

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



## **enum**

In TypeScript, an `enum` (short for "enumeration") is a feature that allows you to define a set of named constants. Enums provide a way to define a collection of related values that can be used to represent discrete options or states in a type-safe manner. They can be useful for scenarios where a variable should only have one out of a small set of possible values.

**Types of Enums**

TypeScript supports two types of enums:

1. **Numeric Enums**
2. **String Enums**

**Numeric Enums**

Numeric enums are the default. In a numeric enum, each member has a numeric value. By default, the first member is assigned the value `0`, and subsequent members are incremented by `1`.

```typescript
typescriptCopy codeenum Direction {
  Up,     // 0
  Down,   // 1
  Left,   // 2
  Right   // 3
}

// Usage
let dir: Direction = Direction.Up;
console.log(dir); // Output: 0
```

You can also explicitly set the values of enum members:

```typescript
typescriptCopy codeenum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

// Usage
let dir: Direction = Direction.Left;
console.log(dir); // Output: 3 (since Up = 1, Down = 2, Left = 3, Right = 4)
```

**String Enums**

String enums are more flexible than numeric enums and are often used when the meaning of the values is more important than their numeric representation.

```typescript
typescriptCopy codeenum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

// Usage
let dir: Direction = Direction.Up;
console.log(dir); // Output: "UP"
```

**Advantages of Using Enums**

1. **Readability**: Enums make the code more readable and meaningful by giving descriptive names to sets of values.
2. **Maintainability**: Enums provide a central place to define a set of related constants, making the code easier to maintain.
3. **Type Safety**: Enums ensure that only valid values can be assigned to variables, reducing the risk of errors.

**Example Usage**

**Numeric Enum Example**

```typescript
typescriptCopy codeenum Status {
  New,
  InProgress,
  Completed,
  Archived
}

function updateStatus(status: Status): void {
  switch (status) {
    case Status.New:
      console.log('Status is New');
      break;
    case Status.InProgress:
      console.log('Status is InProgress');
      break;
    case Status.Completed:
      console.log('Status is Completed');
      break;
    case Status.Archived:
      console.log('Status is Archived');
      break;
  }
}

updateStatus(Status.InProgress); // Output: "Status is InProgress"
```

**String Enum Example**

```typescript
typescriptCopy codeenum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

function getPermissions(role: Role): string {
  switch (role) {
    case Role.Admin:
      return "Full access";
    case Role.User:
      return "Limited access";
    case Role.Guest:
      return "Read-only access";
  }
}

console.log(getPermissions(Role.User)); // Output: "Limited access"
```

**Reverse Mapping (Numeric Enums Only)**

TypeScript provides reverse mapping for numeric enums, allowing you to map from the numeric value back to the name.

```typescript
typescriptCopy codeenum Status {
  New,
  InProgress,
  Completed,
  Archived
}

let statusName: string = Status[2]; // "Completed"
console.log(statusName); // Output: "Completed"
```



In TypeScript, `const enum` is a special kind of enum that can provide performance benefits by inlining enum values directly into the code during compilation, rather than generating additional code for the enum. This can be useful for reducing the size of the output JavaScript code.

Here’s an example of how to use `const enum` along with your `ReducerAction` type:

### Using `const enum` and `ReducerAction`

1. **Define the `const enum`**:
   - `const enum` values are inlined, meaning they are replaced with their respective values during compilation.
   - This can make your code more efficient at runtime.
2. **Define the `ReducerAction` type**:
   - The `ReducerAction` type will represent actions dispatched to a reducer function, including an optional `payload`.

### Example

```
typescriptCopy codeconst enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE;
    payload?: string;
}

// Example usage in a reducer function
function reducer(state: number, action: ReducerAction): number {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return state + 1;
        case REDUCER_ACTION_TYPE.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

// Example usage in a component
const [state, dispatch] = React.useReducer(reducer, 0);

dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: "new value" });
```

### Explanation

1. **Const Enum Definition**:
   - `const enum REDUCER_ACTION_TYPE` defines the action types as `INCREMENT`, `DECREMENT`, and `NEW_INPUT`.
   - Using `const enum` ensures that these values are inlined at compile time.
2. **ReducerAction Type**:
   - `type: REDUCER_ACTION_TYPE` ensures that the `type` property must be one of the defined enum values.
   - `payload?: string` makes the `payload` property optional and of type `string`.
3. **Reducer Function**:
   - The `reducer` function takes the current state and an action, then returns the new state based on the action type.
   - The switch statement handles different action types (`INCREMENT` and `DECREMENT`).
4. **Dispatching Actions**:
   - The `dispatch` function is used to send actions to the reducer.
   - Example actions for incrementing, decrementing, and setting a new input value are shown.

### Advantages of Using `const enum`

- **Performance**: Since `const enum` values are inlined, there’s no additional runtime cost associated with looking up the enum values.
- **Code Size**: The generated JavaScript code is smaller because the enum values are directly inlined.

### Note

Be cautious with `const enum` if you are using tools that do not support them or when interoperability with JavaScript is required, as they can cause issues if not compiled correctly. For most use cases, regular enums are sufficient and easier to debug.





## event object

In the line `e: ChangeEvent<HTMLInputElement>`, `HTMLInputElement` is neither an input nor an output of `ChangeEvent` in the traditional sense. Instead, it specifies the type of the target element associated with the `ChangeEvent`.

Let's break it down further:

### ChangeEvent and HTMLInputElement

1. **ChangeEvent**:
   - `ChangeEvent` is a generic type provided by React, representing an event that occurs when the value of an element changes. It's a generic type that can be used with different HTML elements.
2. **HTMLInputElement**:
   - `HTMLInputElement` is a built-in TypeScript type representing an `<input>` element in the DOM. It describes the properties and methods available on input elements.

### Type of `e`

- `e`

  :

  - `e` is the parameter of the function `handleTextInput`.
  - The type of `e` is `ChangeEvent<HTMLInputElement>`. This means `e` is an event object representing a change event on an `<input>` element.

### Understanding the Generic Type

- ```
  ChangeEvent<HTMLInputElement>
  ```

  :

  - This means `ChangeEvent` is a generic type that takes `HTMLInputElement` as a parameter. It tells TypeScript that this change event is specifically for an `<input>` element.
  - Therefore, `e` is not directly of type `HTMLInputElement`; instead, `e` is of type `ChangeEvent` where the target is an `HTMLInputElement`.

### Structure of `ChangeEvent<HTMLInputElement>`

The `ChangeEvent<HTMLInputElement>` type contains various properties and methods that are common to events, as well as specific details about the target element:

- Event Properties

  :

  - `e.target`: This property will be of type `HTMLInputElement`, providing access to the input element that triggered the event.
  - `e.currentTarget`: This property will also be of type `HTMLInputElement`, typically referencing the same element as `e.target` in this context.

### Example Usage

Here's an example showing how you might use this in a React component:

```
tsxCopy codeimport React, { ChangeEvent } from 'react';

const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value; // e.target is of type HTMLInputElement
    console.log(inputValue);
}

const MyComponent = () => {
    return (
        <input type="text" onChange={handleTextInput} />
    );
}
```

In this example:

- When the input value changes, `handleTextInput` is called.
- The parameter `e` is of type `ChangeEvent<HTMLInputElement>`.
- `e.target` is of type `HTMLInputElement`, allowing you to access properties specific to input elements, such as `value`.

### Summary

- `HTMLInputElement` is not an input or output of `ChangeEvent`; it specifies the type of the target element for the `ChangeEvent`.
- `e` is of type `ChangeEvent<HTMLInputElement>`, meaning it is an event object that





# React

## setState

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