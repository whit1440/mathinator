$(() => {
  $('.fixed-action-btn').floatingActionButton({
    direction: 'left',
    hoverEnabled: false
  });
  const left = $("#left_operand")
  const right = $("#right_operand")
  const btn = $(".btn-floating")
  const tbl = $('.table tbody')
  const tblRowTemplate = (l, r, op, result) => `<tr><td>${l} ${op} ${r}</td><td>${result}</td></tr>`
  const opMap = {
    'add': '+',
    'subtract': '-',
    'multiply': '*',
    'divide': '/'
  }

  btn.click((event) => {
    const op = $(event.currentTarget).data().operation
    if (op) {
      const l = left.val()
      const r = right.val()
      submit(l, r, op)
    }
  })

  function submit(valueLeft, valueRight, operation) {
    $.get(`/math/${operation}?right=${valueRight}&left=${valueLeft}`).then((data, err) => {
      data = JSON.parse(data)
      if (err === 'success') {
        tbl.append(tblRowTemplate(valueLeft, valueRight, opMap[operation], data.answer))
      } else {
        tbl.append(tblRowTemplate(valueLeft, valueRight, opMap[operation], err))
      }
    })
  }
})
