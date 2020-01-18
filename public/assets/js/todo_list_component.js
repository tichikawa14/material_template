Vue.component('template-todo-list' ,{
  props: ['todoItems'],
  template: `
      <ul>
        <li v-for="todo in todoItems">
          {{ todo.title }} / {{ todo.description }}
        </li>
      </ul>
    `
})