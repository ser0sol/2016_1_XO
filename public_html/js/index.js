var $page = $('#page'), currentScreen = "game";



function showMainScreen() {
    // TODO
    currentScreen = 'Main Menu';
    $page.html(mainTmpl(currentScreen)); // Рендерим шаблон
    // Инициализируем обработчики событий
    $('#js-start-game').click(function(){
        showGameScreen();
    });
    $('#js-scoreboard').click(function(){
        showScoreboardScreen();
    });
    $('#js-login').click(function(){
        showLoginScreen();
    });
}



function showScoreboardScreen() {
	// TODO
    currentScreen = 'Scoreboard:';
    $page.html(scoreboardTmpl()); // Рендерим шаблон
    // Инициализируем обработчики событий
    $('#js-back').click(function(){
        showMainScreen();
    });

}


function showGameScreen() {
	// TODO
	//hideMainScreen(); // Убиваем экран "Главный"
    currentScreen = 'Game:';
    $page.html(gameTmpl()); // Рендерим шаблон
    // Инициализируем обработчики событий
   $('#js-back').click(function(){
        showMainScreen();
    });

}

function showLoginScreen() {
	// TODO
    currentScreen = 'Login';
    $page.html(loginTmpl()); // Рендерим шаблон
    // Инициализируем обработчики событий
   $('#js-back').click(function(){
        showMainScreen();
    });
}


showMainScreen();
