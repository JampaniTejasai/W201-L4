/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const todoList = require("../todo");
const { all, markAsComplete, add } = todoList();

const formattedDate = d => {
return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
new Date(new Date().setDate(dateToday.getDate() + 1))
)

describe("Testing of todoList", () => {
    beforeAll(() => {
      add({
        title: "Nodejs",
        completed: true,
        dueDate: yesterday,
      });
    });
    const overdue = () => {
      let Overdueitems = [];
      for (let i = 0; i < all.length; i++) {
        if (all[i].dueDate == yesterday) {
            Overdueitems.push(all[i]);
        }
      }
      return Overdueitems.length;
    };
    test("Adding list to todo", () => {
      const CountItems = all.length;
      add({
        title: "Learn HTML",
        completed: false,
        dueDate: today,
      });
      add({
        title: "Learn CSS",
        completed: false,
        dueDate: tomorrow,
      });
      add({
        title: "Learn JAVASCRIPT",
        completed: false,
        dueDate: tomorrow,
      });
      add({
        title: "Learn Nodejs",
        completed: true,
        dueDate: tomorrow,
      });
      add({
        title: "Learn Expressjs",
        completed: false,
        dueDate: yesterday,
      });
      add({
        title: "Capstone a Project",
        completed: true,
        dueDate: today,
      });
      expect(all.length).toBe(CountItems + 6);
    });
  
    test("Testing markAsComplete", () => {
      expect(all[1].completed).toBe(false);
      markAsComplete(1);
      expect(all[1].completed).toBe(true);
    });
  
    test("Testing for Overdue Items", () => {
      expect(all[5].dueDate).toBe(yesterday);
    });
  
    test("Testing for Today items", () => {
      expect(all[6].dueDate).toBe(today);
    });
  
    test("Testing for tommorrow dueDate Items", () => {
      expect(all[4].dueDate).toBe(tomorrow);
    });
  
    test("Testing Capstone project", () => {
      expect(all[6].completed).not.toBe(false);
    });
  
    test("Testing for number of Overdue Items", () => {
      expect(overdue()).toBe(2);
    });
  });
