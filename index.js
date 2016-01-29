module.exports = function (id, text) {

  // Create the <style> tag
  var style = document.createElement('style')
  style.id = id
  style.appendChild(document.createTextNode(text))

  // Add or replace the <style> element in head
  var oldStyle = document.getElementById(id)
  if (oldStyle) {
    document.head.replaceChild(style, oldStyle)
  } else {
    document.head.appendChild(style)
  }
}
