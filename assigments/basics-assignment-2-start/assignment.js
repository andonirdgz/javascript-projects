const task3Element = document.getElementById('task-3')

function showAlert() {
  alert('No parameters')
}

function showNameAlert(name) {
  alert(`Hi ${name}!`)
}

// showAlert()
// showNameAlert('Andoni')

task3Element.addEventListener('click', showAlert)

function showProfileAlert(name, lastName, age) {
  alert(`Profile
  Name: ${name}
  Last Name: ${lastName}
  Age: ${age}`)
}

showProfileAlert('Andoni', 'Rodriguez', '22')
