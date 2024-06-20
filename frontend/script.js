$(document).ready(function() {
    $('#registerForm').on('submit', function(e) {
        e.preventDefault();

        const userData = {
            nombres: $('#nombres').val(),
            apellidos: $('#apellidos').val(),
            email: $('#email').val(),
            password: $('#password').val()
        };

        $.ajax({
            url: 'http://localhost:3000/api/auth/registrar',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(userData),
            success: function(response) {
                $('#message').text(response.message).css('color', 'yellow');
            },
            error: function(xhr) {
                $('#message').text('Error: ' + xhr.responseJSON.error).css('color', 'red');
            }
        });
    });

    $('#loginForm').on('submit', function(e) {
        e.preventDefault();

        const loginData = {
            email: $('#loginEmail').val(),
            password: $('#loginPassword').val()
        };

        $.ajax({
            url: 'http://localhost:3000/api/auth/login',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(loginData),
            success: function(response) {
                $('#message').text(response.message).css('color', 'yellow');
                $('#loginFormContainer').hide();
                $('#form-title').text('Página principal');
                $('#principal').show();
            },
            error: function(xhr) {
                $('#message').text('Error: ' + xhr.responseJSON.error).css('color', 'red');
            }
        });
    });

    $('#mostrarRegistro').on('click', function() {
        $('#loginFormContainer').hide();
        $('#form-title').text('Registro de Usuario');
        $('#registerFormContainer').show();
        $('#message').text('');
    });

    $('#volverLogin').on('click', function() {
        $('#registerFormContainer').hide();
        $('#form-title').text('Iniciar sesión');
        $('#loginFormContainer').show();
        $('#message').text('');
    });
});