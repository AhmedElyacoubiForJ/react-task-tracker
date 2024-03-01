export const introToJS = () => {

    console.log("Hello World");
    console.error('This is an error');
    console.warn('This is an warning');

    // let, const have a block-level scope
    // let variable values can be reassinged but const not
    // var has a global-level scope don't use it any more */

    // data types
    // String, Numbers, Boolean, null, undefined, Symbol(ES6)
    const name = 'John';
    const age = 30;
    const rating = 4.5;
    const isCool = true;
    const x = null; // means is empty but not value in it. typeof is null and not object console öog is wrong
    const y = undefined; // explizit
    let z; // undefined

    console.log(typeof z);
}