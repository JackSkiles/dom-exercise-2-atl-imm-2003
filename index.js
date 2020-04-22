
const sites = [
    {
        "address": "https://apple.com",
        "logo": "https://www.logodesignlove.com/images/classic/apple-logo-rob-janoff-01.jpg"
    },
    {
        "address": "https://google.com",
        "logo": "https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
    },
    {
        "address": "https://microsoft.com",
        "logo": "https://cdn.vox-cdn.com/thumbor/drG69iSTSbsYDNcckVzB3x97pDA=/7x0:633x417/920x613/filters:focal(7x0:633x417):format(webp)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"
    },

];

const head = document.createElement('header');
head.style.display = 'flex';
head.style.justifyContent = 'center';
head.style.alignItems = 'center';
head.style.fontSize = "30px";
head.style.backgroundColor = '#ccc';
head.style.height = "10vh";
head.textContent = 'Welcome to the search engine picker!'

const div1 = document.createElement("div");
div1.style.display = 'flex';
div1.style.justifyContent = 'center';
div1.style.backgroundColor = '#50A6EB'

const list = document.createElement("ul");
list.style.display = 'flex';
list.style.justifyContent = 'center';
// list.style.flexDirection = 'column';
list.style.listStyleType = "none";
list.style.fontSize = '20px'
div1.appendChild(list);


const listContainer = document.querySelector('nav.js-link-container');
listContainer.appendChild(head);
listContainer.appendChild(div1);



function createLink(object) {
    // const address = array[index];
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    const img = document.createElement('img');
    link.setAttribute('href', object.address);
    link.style.display = "inline-block";
    link.style.color = "white";
    link.style.textDecoration = "none";
    link.style.margin = "20px";
    img.setAttribute('src', object.logo);
    link.appendChild(img);
    listItem.appendChild(link);
    list.appendChild(listItem);
}


sites.forEach(createLink);