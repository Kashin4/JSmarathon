// --------------------------task 0---------------------------
const player1 = {
    name: 'Liu kang',
    hp: '30%',
    img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
    weapon: ['Cyclists Squall', 'knuck mill','punch'],
    attack:  function () {
        console.log(player1.name + 'Fight...');
    }
}

const player2 = {
    name: 'Sonya',
    hp: '70%',
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Energy Rings', 'Fiery Kiss','punch'],
    attack:  function () {
        console.log(player2.name + 'Fight...');
    }
}

//---------------------------------++task------------------
function createPlayer(playerClass, playerName) {
    let $player = document.createElement('div');
    $player.classList.add(playerClass);
    let $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    let $character = document.createElement('div');
    $character.classList.add('character');
    let $life  = document.createElement('div');
    $life.classList.add('life');
    let $name = document.createElement('div');
    $name.classList.add('name');
    let $img = document.createElement('img');
    $img.src = playerName.img;
    let $arena = document.querySelector('.arenas');

    document.body.appendChild($player);
    $player.append($progressbar);
    $player.append($character);
    $progressbar.append($life);
    $progressbar.append($name);
    $character.append($img);
    $arena.append($player)
    $life.style.width = playerName.hp;
    $name.innerText = playerName.name;
};


createPlayer('player1', player1);
createPlayer('player2', player2);