const Usuario = require('../model/usuario');

exports.registrar = async (req, res) => {
    const { nombres, apellidos, email, password } = req.body;
    try {
        const usuario = new Usuario({ nombres, apellidos, email, password });
        await usuario.save();
        res.status(201).send({ message: 'Usuario creado exitosamente' });
    } catch (error) {
        res.status(400).send({ error: 'Error al crear usuario', details: error });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).send({ error: 'Usuario no encontrado' });
        }
        const isMatch = await usuario.comparePassword(password);
        if (!isMatch) {
            return res.status(400).send({ error: 'Contraseña incorrecta' });
        }
        res.send({ message: 'Inicio de sesión exitoso' });
    } catch (error) {
        res.status(400).send({ error: 'Error en la autenticación', details: error });
    }
};