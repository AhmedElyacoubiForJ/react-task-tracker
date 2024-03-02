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
    //console.log(document.getElementsByTagName('li'));

    // loop
    /* const items = document.querySelectorAll('.item');
    items.forEach((item) => {
        console.log(item);
    }); */

    // Manipulating doms
    /*  const ul = document.querySelector('.items');
     // ul.remove();
     // ul.lastElementChild.remove();
     ul.firstElementChild.textContent = 'Hello';
     ul.children[1].innerText = 'Brad';
     ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; */

    // css manipulation
    /* const btn = document.querySelector('.btn');
    btn.style.background = 'red';
    console.log(btn.style.background); */

    // add enventlistener and manipulate css
    /* const btn = document.querySelector('.btn');
    btn.addEventListener('click', (e) => { // mouseover, mouseout
        e.preventDefault(); // go no away before the form not submited
        // console.log('clicked');
        // console.log(e.target);
        // console.log(e.target.className);
        // console.log(e.target.value);
        const form = document.querySelector('#my-form'); // let's grab element w. id
        console.log(form);
        form.style.background = 'red';
        document.querySelector('body').classList.add('bg-dark'); // class s. style.css
        document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
    }); */

    // form validation and user list manipulation using form data
    const myForm = document.querySelector('#my-form'); // id
    const nameInput = document.querySelector('#name'); // id
    const emailInput = document.querySelector('#email'); // id
    const msg = document.querySelector('.msg'); // class
    const userList = document.querySelector('#users'); // id

    myForm.addEventListener('submit', onSubmit);
    function onSubmit(e) {
        e.preventDefault();

        if (nameInput.value === '' || emailInput.value === '') {
            msg.classList.add('error');
            msg.innerHTML = 'Please enter all fields';

            setTimeout(() => msg.remove(), 3000); // in 3 s will be removed 
        } else {
            const li = document.createElement('li');

            li.appendChild(document.createTextNode(
                `${nameInput.value} ${emailInput.value}`
            ));
            userList.appendChild(li);
            
            // clear fields
            nameInput.value = '';
            emailInput.value = '';
        }
    }
}