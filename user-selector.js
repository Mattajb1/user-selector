let users = [
    {
        "name": "Mortuary Staff",
        "id": "0LQBgJYxuZZygUmjUjNybgMsMO53",
        "teamId": [
            "-Lce1vH7Zf1KXxCwP6cc"
        ]
    },
    {
        "name": "Thomas Cooper",
        "id": "0La5qocbqfTii4K6hH8zsCw5ZZK2",
        "teamId": [
            "-LElVhUEMz4RrHz65hSw",
            "1234"
        ]
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
    if (users) {
        //TABLE
        const userListTable = document.createElement('table');
        userListTable.classList.add('overlay-element');
        userListTable.id = 'user-list';
        modal.appendChild(userListTable);

        //HEAD TR
        const userListHeadTr = document.createElement('tr');
        userListHeadTr.classList.add('overlay-element');
        userListTable.appendChild(userListHeadTr);

        //HEAD TH
        let headings = ["Name", "ID", "TeamID(s)"]
        headings.forEach(heading =>{
            let userListHeadTh = document.createElement('th');
            userListHeadTh.classList.add('overlay-element');
            userListHeadTh.textContent = heading;
            userListHeadTr.appendChild(userListHeadTh);   
        })

        users.forEach(user => {
            //TR
            let userListTr = document.createElement('tr');
            userListTr.classList.add('overlay-element');
            userListTable.appendChild(userListTr);
            
            //TD - DATA HERE
            Object.entries(user).forEach(([key, value]) => {
                let userListTd = document.createElement('td');
                userListTd.classList.add('overlay-element');
            
                if (Array.isArray(value)) {
                    value.forEach(item => {
                        const textNode = document.createTextNode(item);
                        userListTd.appendChild(textNode);
                        userListTd.appendChild(document.createElement('br'));
                    });
                } else {
                    userListTd.textContent = value;  
                }

                userListTr.appendChild(userListTd);  
            });
            
        })
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
                width: 100%;
                border: 1px solid black;
                background-color: #dedcdc
            }

            #user-list tr {
                height: 30px;
                border-bottom: 1px solid black;
            }

            #user-list td {
            }
        `;
        head.appendChild(style);
}