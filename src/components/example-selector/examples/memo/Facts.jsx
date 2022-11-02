export const FACTS = [
    <>👉🏻 Cache the component between re-renders.</>,
    <>👉🏻 <code>memo</code> lets you skip re-rendering a component when its props are unchanged.</>,
    <>👉🏻 To get the most out of <code>memo</code>, minimize the times that the props change. For example, if the prop is an object, prevent the parent component from re-creating that object every time by using <code>useMemo</code></>,
    <>👉🏻 Dependencies are compared with <code>Object.is</code></>,
    <>👉🏻 Keep in mind that your machine is probably faster than your users’.</>,
    <>👉🏻 To get the most accurate timings, build your app for production and test it on a device like your users have.</>,
    <>👉🏻 If a specific interaction feels laggy, use the React Developer Tools profiler to see which components would benefit the most from memoization, and add memoization where needed.</>,
];
