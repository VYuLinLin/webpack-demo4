import _ from 'lodash'

function component() {
  let element = document.createElement('div')
  // Lodash，现在由这个脚本导入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  return element
}
document.body.appendChild(component())