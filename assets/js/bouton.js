document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = 'Menu';
    button.className = 'btn-styled';
 
    button.onclick = function() {
        window.location.href = "index.html";

    };
 
    var container = document.getElementById('container');
    container.appendChild(button);
}, false);
