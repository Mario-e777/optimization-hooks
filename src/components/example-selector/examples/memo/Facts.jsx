export const FACTS = [
    <>ππ» Cache the component between re-renders.</>,
    <>ππ» <code>memo</code> lets you skip re-rendering a component when its props are unchanged.</>,
    <>ππ» To get the most out of <code>memo</code>, minimize the times that the props change. For example, if the prop is an object, prevent the parent component from re-creating that object every time by using <code>useMemo</code></>,
    <>ππ» Dependencies are compared with <code>Object.is</code></>,
    <>ππ» Keep in mind that your machine is probably faster than your usersβ.</>,
    <>ππ» To get the most accurate timings, build your app for production and test it on a device like your users have.</>,
    <>ππ» If a specific interaction feels laggy, use the React Developer Tools profiler to see which components would benefit the most from memoization, and add memoization where needed.</>,
];
