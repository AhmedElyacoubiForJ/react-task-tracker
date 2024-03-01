export const domDemo = () => {
    // parent object of the browser
    // console.log(window)
    //window.alert(1);
    // is element of a top level element window we dont need window  obj to call alert function
    //alert(1);

    // Single element
    /* const form = document.getElementById('my-form');
    console.log(form);
    console.log(document.querySelector('.container'));
    console.log(document.querySelector('h1')); // select first one */

    // Multiple element
    //console.log(document.querySelectorAll('.item')); // not recomemded can be a class if ...or any thing
    //console.log(document.getElementsByClassName('item'));
    console.log(document.getElementsByTagName('li'));
}