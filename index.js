import { getInput, setOutput, setFailed } from '@actions/core';
import github from '@actions/github';

try {
    const nombre = getInput('nombre');
    const saludo = `Hola ${nombre}, soy Barsoom!`;
    setOutput('saludo', saludo);

} catch (error) {
    setFailed(error.message);
}