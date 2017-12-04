var ruleTemplate

// For Rows
function addRow(e) {
  var row = this.parentNode
  var rows = row.parentNode
  var cloned = row.cloneNode(true)
  addAddRowListener(cloned)
  addRemoveRowListener(cloned)
  rows.appendChild(cloned)
}

function removeRow() {
  var row = this.parentNode
  var rows = row.parentNode
  rows.removeChild(row)
}

function addAddRowListener(node) {
  var btns = node.getElementsByClassName('ADD')
  for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = addRow
  }
}

function addRemoveRowListener(node) {
  var btns = node.getElementsByClassName('REMOVE')
  for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = removeRow
  }
}

// For Rules
function addNewRule() {
  var rules = document.getElementsByClassName('RULE')
  var newRuleBtn = document.getElementById('newrule')
  if (ruleTemplate) {
    var newRule = ruleTemplate.cloneNode(true)
    addRuleListeners(newRule)
    newRuleBtn.parentNode.insertBefore(newRule, newRuleBtn)
  }
}

// Helpers
function addRuleListeners(rule) {
  addAddRowListener(rule)
  addRemoveRowListener(rule)
}

function addListeners(className) {
  var rows = document.getElementsByClassName(className)
  for (var i = 0; i < rows.length; i++) {
    addRuleListeners(rows[i])
  }

  var newRuleBtn = document.getElementById('newrule')
  newRuleBtn.onclick = addNewRule
}

function init() {
  addListeners('CONDITIONS')
  addListeners('RESULTS')

  var rules = document.getElementsByClassName('RULE')
  if (rules.length > 0) {
    ruleTemplate = rules[0].cloneNode(true)
  }
}
