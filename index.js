var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);

app.use(express.static('src'));

server.listen(PORT, function() {
    console.log('Chat server running on port ' + PORT);
});

var io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.on('message', function(msg) {
        io.emit('message', msg);
    });
});
// Função para mostrar e ocultar o menu de login ao clicar no ícone de login
function toggleLoginMenu() {
    var loginMenu = document.getElementById("login-menu");
    // Alterna a exibição entre "block" e "none"
    if (loginMenu.style.display === "none" || loginMenu.style.display === "") {
        loginMenu.style.display = "block";
    } else {
        loginMenu.style.display = "none";
    }
}

// Fecha o menu de login se o usuário clicar fora dele
window.onclick = function(event) {
    var loginMenu = document.getElementById("login-menu");
    // Verifica se o clique foi fora do menu e do ícone
    if (!event.target.closest('#login-icon') && !event.target.closest('#login-menu')) {
        loginMenu.style.display = "none";
    }
};