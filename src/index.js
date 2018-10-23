import _ from 'lodash'
import print from './print'
function component() {
  let element = document.createElement('div')
  let btn = document.createElement('button')

  // Lodash，现在由这个脚本导入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  btn.innerHTML = '单击我并检查控制台'
  btn.onclick = print

  element.appendChild(btn)
  return element
}
document.body.appendChild(component())