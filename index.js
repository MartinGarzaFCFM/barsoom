import * as core from '@action/core';
import * as core from '@actions/github';

try {
    const nombre = core.getInput('nombre');
    const saludo = `Hola ${nombre}, soy Barsoom!`;
    core.setOutput('saludo', saludo);

} catch (error) {
    core.setFailed(error.message);
}