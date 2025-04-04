/**
 * ¡Buena suerte! ¡Pasa el mensaje!
 */
const inputMessage = document.getElementById("message");
const ouputMessage = document.getElementById("last-message");
document.getElementById("btn-send").addEventListener("click", e=>{
    ouputMessage.textContent = inputMessage.value;
    inputMessage.value = '';
    inputMessage.focus();
});