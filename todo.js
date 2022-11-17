/* eslint-disable no-undef */
const todoList = () => {
    all = [];
    overdues = [];
    const add = (todoItem) => {
      all.push(todoItem);
    }
    const markAsComplete = (index) => {
      all[index].completed = true;
    }
  
    const overdue = () => {
      return all.filter((item) => item.dueDate < today);
    }
  
    const dueToday = () => {
      return all.filter((item) => item.dueDate === today);
    }
  
    const dueLater = () => {
      return all.filter((item) => item.dueDate > today);
    }
  
    const toDisplayableList = (list) => {
      let data = list.map((item) => {
        let CS = item.completed ? "[x]": "[ ]";
        let date = item.dueDate === today ? "" : item.dueDate;
        return `${CS} ${item.title} ${date}`.trim();
      });
      return data.join("\n");
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
//   const todos = todoList();
  
//   const formattedDate = d => {
//     return d.toISOString().split("T")[0]
//   }
  
//   var dateToday = new Date()
//   const today = formattedDate(dateToday)
//   const yesterday = formattedDate(
//     new Date(new Date().setDate(dateToday.getDate() - 1))
//   )
//   const tomorrow = formattedDate(
//     new Date(new Date().setDate(dateToday.getDate() + 1))
//   )

  module.exports = todoList;