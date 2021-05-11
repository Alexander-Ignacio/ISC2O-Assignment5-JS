let radius = 0
let area = 0
let circumference = 0
let diameter = 0

document.getElementById('calculate').addEventListener('click', getResults)

function getResults () {
  diameter = document.getElementById('input').value

  diameter = parseInt(diameter)
  radius = parseInt(radius)
  area = parseInt(area)
  circumference = parseInt(circumference)

  radius = diameter / 2
  area = Math.PI * (radius * radius)
  circumference = 2 * Math.PI * radius

  area = Math.round(area * 100) / 100
  circumference = Math.round(circumference * 100) / 100

  document.getElementById('area').innerHTML = area
  document.getElementById('circumference').innerHTML = circumference
}
