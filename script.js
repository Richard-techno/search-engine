let message = ["Hi there!", "Raito?", "Gonna code?", "Here to use ai?", "Good [insert time here]!", "Don't forget!", "Need a spark of creativity?"]
let rand = Math.floor(Math.random() * 6)
let note = document.getElementById('notepad');
note.textContent = localStorage.getItem('note')
note.addEventListener('change', save)
document.getElementById('bt').textContent = message[rand]
function save(){
    localStorage.setItem('note', note.textContent)
}