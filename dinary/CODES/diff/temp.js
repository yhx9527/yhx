let ul = el('ul', { id: 'list' }, [
  el('li', { class: 'item' }, ['Item 1']),
  el('li', { class: 'item' }, ['Item 2'])
])
let ul1 = el('ul', { id: 'list1' }, [
  el('li', { class: 'item1' }, ['Item 4']),
  el('li', { class: 'item2' }, ['Item 5'])
])
let patches = diff(ul, ul1);
console.log(patches);