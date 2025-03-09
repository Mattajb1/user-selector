// CODE: CLICK TO GO TO CODE
const codeNavigate = null

// USER: Change this to the Google user number you are using
let googleUserNumber = 1;

let users = [
  //INSERT DATA FROM USER-LIST (Last update 09/03/25)
    {
      "name": "Georgia Charlwood",
      "id": "-NV3g1FnJUAepYsWHIxe",
      "teamid": [
        "-NGtuMZRnOfQ4cxpFUn2"
      ]
    },
    {
      "name": "Anthony Catajar",
      "id": "-NV3gnvuVUU8ovdIpFae",
      "teamid": [
        "-NGtuMZRnOfQ4cxpFUn2"
      ]
    },
    {
      "name": "Michele Clifton",
      "id": "-NV3h2Jzi_1oydgxjnR3",
      "teamid": [
        "-NGtuMZRnOfQ4cxpFUn2"
      ]
    },
    {
      "name": "Terry Clifton",
      "id": "-NV3hBu62_tht_c3I6bp",
      "teamid": [
        "-NGtuMZRnOfQ4cxpFUn2"
      ]
    },
    {
      "name": "Ekroop Singh",
      "id": "00JPRX8znAYfAgq6cyghzj9AjIG2",
      "teamid": [
        "-O23hH_6zUnORBpuCRa5"
      ]
    },
    {
      "name": "Luke Casilli",
      "id": "00QatGSMLPfI0Uh6veg9cMW4BCr1",
      "teamid": [
        "-Nl0aLQOkX1TVVVuq-z6"
      ]
    },
    {
      "name": "Aiden King",
      "id": "01AVnUpfZ4TvBWNepEhgsjakWY12",
      "teamid": [
        "-MLAjhFBk3NLlYji6DdM"
      ]
    },
    {
      "name": "Malaga Clerk",
      "id": "01AVnUpfZ4TvBWNepEhgsjakWY82",
      "teamid": [
        "-MgEqZuXHga8LocAzl0l"
      ]
    }
]

// CODE: CLICK TO GO TO TOP 
codeNavigate

let overlays = document.querySelectorAll('.overlay-element');

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
    title.id = 'title'
    title.appendChild(document.createTextNode('FireHawk User Selector'));
    modal.appendChild(title);

    // Search Bar (Insert Here)
    const searchInput = document.createElement('input');
    searchInput.classList.add('overlay-element');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search users';
    searchInput.id = 'search-input';
    modal.appendChild(searchInput);

    // Event Listener for Search
    searchInput.addEventListener('input', function () {
        let filter = searchInput.value.toLowerCase();
        let rows = document.querySelectorAll('#user-list tr:not(:first-child)'); // Exclude header

        rows.forEach(row => {
            let text = row.innerText.toLowerCase();
            row.style.display = text.includes(filter) ? '' : 'none';
        });
    });

    //User list (table)
    if (users) {
        //DIV (For overflow)
        const userList = document.createElement('div');
        userList.classList.add('overlay-element');
        userList.id = 'user-list';
        modal.appendChild(userList);

        //TABLE
        const userListTable = document.createElement('table');
        userListTable.classList.add('overlay-element');
        userList.appendChild(userListTable);

        //THEAD
        const userListThead = document.createElement('thead');
        userListThead.classList.add('overlay-element');
        userListTable.appendChild(userListThead);

        //HEAD TR
        const userListHeadTr = document.createElement('tr');
        userListHeadTr.classList.add('overlay-element');
        userListThead.appendChild(userListHeadTr);

        //HEAD TH
        let headings = ["Name", "ID", "TeamID(s)", 'Test']
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

                if (Array.isArray(value) && value.length > 1) {
                    value.forEach(item => {
						if (key === 'teamId') {
							const link = document.createElement('a');
							link.setAttribute('href', `https://console.firebase.google.com/u/${googleUserNumber}/project/fcrm-e17b0/database/fcrm-e17b0/data/~2Fteams~2F${item}`)

							const textNode = document.createTextNode(item);

                        	link.appendChild(textNode);
							userListTd.appendChild(link);
                        	userListTd.appendChild(document.createElement('br'));
						} else {
                        	const textNode = document.createTextNode(item);
                        	userListTd.appendChild(textNode);
                        	userListTd.appendChild(document.createElement('br'));
						}
                    });
                } else {
                    if (key === 'teamId') {
                        const link = document.createElement('a');
                        link.textContent = value;
                        link.setAttribute('href', `https://console.firebase.google.com/u/${googleUserNumber}/project/fcrm-e17b0/database/fcrm-e17b0/data/~2Fteams~2F${value}`);
                        userListTd.appendChild(link);
                    } else {
                        userListTd.textContent = value;
                    }
                }

                userListTr.appendChild(userListTd);
            });

        })

        //Arrow key controls
        let selectedIndex = 0;

        // Function to update row selection
        function updateSelection(index) {
            const rows = document.querySelectorAll('#user-list table tr:not(:first-child)');
            if (rows.length === 0) return;

            // Remove previous selection
            rows.forEach(row => row.classList.remove('selectedRow'));

            // Ensure index is within bounds
            if (index < 0) index = 0;
            if (index >= rows.length) index = rows.length - 1;

            // Highlight new row
            selectedIndex = index;
            rows[selectedIndex].classList.add('selectedRow');
        }

        // Initial selection
        setTimeout(() => updateSelection(0), 100); 

        // Listen for keyboard navigation
        document.addEventListener("keydown", function (event) {
            const rows = document.querySelectorAll('#user-list table tr:not(:first-child)');
            if (rows.length === 0) return;

            if (event.key === "ArrowDown") {
                event.preventDefault();
                updateSelection(selectedIndex + 1);
            } else if (event.key === "ArrowUp") {
                event.preventDefault();
                updateSelection(selectedIndex - 1);
            }
        });

        // Enter key control
        document.addEventListener('keydown', function (event) {
            const selectedRow = document.querySelector('.selectedRow')
            const selectedTd = selectedRow.querySelector('td:nth-child(2)')

            if (event.key === 'Enter') {
                window.open(`https://console.firebase.google.com/u/1/project/fcrm-e17b0/database/fcrm-e17b0/data/~2Fusers~2F${selectedTd.textContent}`, '_blank');  
            }
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

            .overlay-element .title {
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
                overflow: auto;
                max-height: 500px;
            }

            #user-list table {
                width: 100%;
                border: 1px solid black;
                background-color: #dedcdc
            }

            #user-list tr {
                height: 30px;
                border-bottom: 1px solid black;
            }

            #user-list thead {
                position: sticky;
                top: 0;
                background-color: #fff;
                z-index: 100;
            }

            #user-list thead tr {
                border: 1px solid black;
            }

			#user-list td:nth-child(4n-3) {
			width: 15%;
			}

			#user-list td:nth-child(4n-2) {
			width: 35%;
			}

			#user-list td:nth-child(4n-1) {
			width: 25%;
			}

			#user-list td:nth-child(4n-4) {
			width: 25%;
			}

            .selectedRow {
                background-color: lightblue !important;
                color: black;
                font-weight: bold;
            }
        `;
        head.appendChild(style);
}

//Escape: Close modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.overlay-element').forEach(overlay => overlay.remove());
    }
});