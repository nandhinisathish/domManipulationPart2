/* var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
]; */

var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];

let mainEl = document.querySelector('main');

//let mainEl = document.getElementsByTagName('main');

console.log(mainEl);

mainEl.style.backgroundColor = `var(--main-bg)`;


mainEl.innerHTML = `<h1> DOM MANIPULATION </h1>`;

mainEl.classList.add("flex-ctr");

//Part - 2

let topMenuEl = document.getElementById('top-menu');
console.log(topMenuEl);

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = `var(--top-menu-bg)`

topMenuEl.classList.add('flex-around');

//Part - 3

// // To continue:
// // // // 1. Iterate over the entire menuLinks array and for each "link" object:
// // // // 2. Create an <a> element.
// // // // 3. On the new element, add an href attribute with its value set to the href property of the "link" object.
// // // // 4. Set the new element's content to the value of the text property of the "link" object.
// // // // 5. Append the new element to the topMenuEl element.
// // // // Progress Check - Here's what the page should look like so far:

for (link of menuLinks) {

    let menuButton = document.createElement('a');

    console.log(menuButton);

    menuButton.setAttribute('href', link.href);

    menuButton.textContent = link.text;

    topMenuEl.append(menuButton);
}

let subMenuEl = document.getElementById("sub-menu");

subMenuEl.style.height = `100%`;

console.log(subMenuEl)

subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;

subMenuEl.classList.add('flex-around');

//Below 2 lines of code made the sub menu hide under the top menu, because top height is set to zero.

subMenuEl.style.position = 'absolute';

subMenuEl.style.top = '0';

let topMenuLinks = document.querySelectorAll('a');

console.log(`top`, topMenuLinks);

let clickedItem = null;

topMenuEl.addEventListener('click', event => {

    event.preventDefault();

    const target = event.target;

    if (target.tagName !== 'A') {
        console.log(`Not clicked on anchor tag`);
        return
    }
    console.log(`clicked `, clickedItem);
    if (target.classList.contains(`active`)) {
         target.classList.toggle('active');
      
        console.log(`if `);
    } else {
          topMenuLinks.forEach(menuItem => {
            menuItem.classList.remove('active');
        });
       
    } 
        target.classList.toggle('active');
       // clickedItem = target;
        console.log(`end `);
  
for(link of menuLinks){
     console.log(`link.text `, link.text);
     console.log(`target.text `, target.text);
    if(link.text != target.text){
        continue;
    }
    if(target.classList.contains(`active`)){
          console.log(`target `, target.classList.contains(`active`));
            console.log(`sub `, 'subLinks' in link);
        if( 'subLinks' in link){
            subMenuEl.style.top = '100%';
        }else{
            subMenuEl.style.top = '0';
        }
    }
    
}

});


