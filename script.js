document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('cancelBtn').addEventListener('click', cancelOrder);

    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            var dropdownContent = dropdown.querySelector('.dropdown-content');
            dropdownContent.classList.toggle('show');
        });
    });

    var dropdownItems = document.querySelectorAll('.dropdown-content a');
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.stopPropagation();
            var dropdownContent = item.parentElement;
            dropdownContent.classList.remove('show');
            var dropdownButton = dropdownContent.previousElementSibling;
            dropdownButton.innerText = item.innerText;
        });
    });

    window.addEventListener('click', function(event) {
        dropdowns.forEach(function(dropdown) {
            var dropdownContent = dropdown.querySelector('.dropdown-content');
            if (!event.target.matches('.dropbtn') && dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        });
    });

    function cancelOrder() {
        var confirmation = confirm('Are you sure you want to cancel your order?');
        if (confirmation) {
            var messageBox = document.createElement('div');
            messageBox.classList.add('message-box');
            messageBox.innerHTML = `
                <p>Order cancelled.</p>
                <button id="goBackBtn">Go back to main page</button>
            `;
            document.body.appendChild(messageBox);
            document.getElementById('goBackBtn').addEventListener('click', function() {
                window.location.href = 'http://127.0.0.1:5500/mainpage.html';
            });
        }
    }
});
