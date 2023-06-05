/**
 * Task class
 */

class Task {
  constructor(name, index, checked) {
    this.name = name;
    this.index = index;
    this.checked = checked;
  }

  static fromJson(json) {
    return new Task(json.name, json.index, json.checked);
  }
}

/**
 * UI Class
 */

class UI {
  constructor() {
    this.form = document.getElementById("form");
    this.task = document.getElementById("task");
    this.tableBody = document.getElementById("table-body");

    this.form.addEventListener("submit", (e) => this.onSubmit(e));

    this.tasks = [];
    this.num = 0;
    this.load();
    this.renderTable();
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.task.value === "") {
      return;
    }

    const task = new Task(this.task.value, this.num, false);
    this.tasks.push(task);
    this.num++;
    this.save();
    this.renderTable();

    this.task.value = "";
  }

  renderTable() {
    this.tableBody.innerHTML = [];
    this.tasks.forEach((t) => {
      const tr = this.createTableRow(t);
      this.tableBody.appendChild(tr);
    });
  }

  save() {
    const json = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", json);
  }

  load() {
    if (localStorage.getItem("tasks") != undefined) {
      const json = localStorage.getItem("tasks");
      const taskArray = JSON.parse(json);
      this.tasks = taskArray.map((x) => Task.fromJson(x));
    }
  }

  createTableRow(t) {
    const tr = document.createElement("tr");
    const tdTask = document.createElement("td");
    const tdComplete = document.createElement("td");
    const tdActions = document.createElement("td");

    tdTask.innerHTML = t.name;

    const actionButton = this.createActionButtons(t);
    const checkButton = this.createCompleteButton(t);

    tdActions.appendChild(actionButton);
    tdComplete.appendChild(checkButton);

    tr.appendChild(tdTask);
    tr.appendChild(tdComplete);
    tr.appendChild(tdActions);

    return tr;
  }

  createCompleteButton(t) {
    const checkButton = document.createElement("input");
    checkButton.setAttribute("type", "checkbox");
    if (t.checked) {
      checkButton.setAttribute("checked", "true");
    }

    checkButton.addEventListener("click", () => {
      this.checked(t);
    });
    return checkButton;
  }

  checked(t) {
    t.checked ? (t.checked = false) : (t.checked = true);
  }

  createActionButtons(t) {
    const deleteButton = document.createElement("button");

    deleteButton.setAttribute("class", "btn btn-danger");
    deleteButton.innerHTML = "Delete";

    deleteButton.addEventListener("click", () => {
      this.onDelete(t);
    });

    return deleteButton;
  }

  onDelete(t) {
    this.tasks = this.tasks.filter((x) => {
      return t.index !== x.index;
    });
    this.save();
    this.renderTable();
  }
}

const ui = new UI();
