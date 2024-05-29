const objectData = {
  key : 'value',
  name : 'Heropy',
  age : 85,
  email : 'thesecon@gmail.com'
}
console.log(objectData['name'])
console.log(objectData.email)

const arrayData = [9,8,7,6]
  console.log(arrayData[0])
  console.log(arrayData[1])
  console.log(arrayData[3])

  let functions = 123
    console.log(functions)

    functions = 456
    console.log(functions)

function hello(name) {
  if (name.length > 5) {
    return
  }
  const message = 'Hello ' + name + '!'
  console.log(message)
}
hello('world')
hello('Heropy')
hello('Neo')

const itemEls = document.querySelectorAll('.item')
const btnEl = document.querySelector('.btn')
const colors = ['mediumpurple','brown','aquamarine']

btnEl.addEventListener('click', function () {
  itemEls.forEach(function (itemEl, index) {
    console.log(index, itemEl)
    itemEl.style.backgroundColor = colors[index]
  })
  btnEl.innerHTML = '<span>클릭했어요.</span>'
})