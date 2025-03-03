let users = [
    {
        "id": "0LQBgJYxuZZygUmjUjNybgMsMO53",
        "teamId": [
            "-Lce1vH7Zf1KXxCwP6cc"
        ],
        "name": "Mortuary Staff"
    },
    {
        "id": "0La5qocbqfTii4K6hH8zsCw5ZZK2",
        "teamId": [
            "-LElVhUEMz4RrHz65hSw"
        ],
        "name": "Thomas Cooper"
    }
    //TODO INSERT DATA
]

const overlays = document.querySelectorAll('.overlay-element');

if (overlays.length > 0) {
    overlays.forEach(overlay => overlay.remove())
} else {
    //Shaded Background
    const background = document.createElement('div');
    background.classList.add('overlay-element');
    background.id = 'background'; 
    document.body.appendChild(background);

    //Modal
    const modal = document.createElement('div');
    modal.classList.add('overlay-element');
    modal.id = 'modal';
    background.appendChild(modal);

    //Title
    const title = document.createElement('h2');
    title.classList.add('overlay-element');
    title.appendChild(document.createTextNode('FireHawk User Selector'));
    modal.appendChild(title);

    //User list (table)
    const userList = document.createElement('table');
    if (users) {
        userList.classList.add('overlay-element');
        userList.id = 'user-list';
        modal.appendChild(userList);
    }

    //Style
    let head = document.getElementsByTagName('head')[0];
    let style = document.createElement('style');
		style.innerHTML = `
            #background {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #000000B3;
                z-index: 100000000;
            }

            #modal {
                width: 900px;
                height: 600px;
                top: calc(100vh / 2 - 300px);
                left: calc(100vw / 2 - 450px);
                background-color: #fff;
                position: fixed;
                padding: 15px;
                z-index: 99999999;
                box-sizing: border-box;
            }

            h2 {
				font-family: sans-serif;
				font-weight: 700;
				color: #000;
				text-align: center;
				margin: revert;
				box-sizing: content-box;
				line-height: normal;            
            }

            #user-list {
                width: 100%
                border: 1px solid black;
                background-color: #dedcdc
            }
        `;
        head.appendChild(style);
}