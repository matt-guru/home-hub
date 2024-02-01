<template>
  <div>
    <section class="p-4 mb-4 border border-b-1 bg-white shadow-xl shadow-black/5">
      <h1 class="text-xl">To-dos</h1>
    </section>
    <div class="mx-auto overflow-x-auto pb-20">
      <div class="flex flex-wrap mx-4">
        <header class="flex w-full">
          <User v-for="user in data[0].people" :user="user" @addTodo="createTodo" />
        </header>

        <section class="flex w-full pt-6">
          <template v-for="user in data[0].people">
            <div class="flex-shrink-0 w-64 mr-4">
              <template v-for="task in user['to-dos']" :key="task.id">
                <TodoItem
                  :task="task"
                  :user-id="user.id"
                  :color="user.color"
                  @updateTaskTitle="handleUpdateTaskTitle"
                  @removeTask="handleRemoveTask"
                />
              </template>
            </div>
          </template>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const createTodo = userId => {
  const user = data.value[0].people.find(u => u.id === userId)
  if (user) {
    user['to-dos'].push({
      id: uuidv4(),
      title: 'New Todo',
      due_date: '2023-02-02',
      status: 'pending'
    })
  } else {
    console.warn('User not found with id', userId)
  }
}

const handleUpdateTaskTitle = ({ userId, taskId, newTitle }) => {
  const user = data.value[0].people.find(u => u.id === userId)
  if (user) {
    const indexOfTask = user['to-dos'].findIndex(t => t.id === taskId)
    if (indexOfTask !== -1) {
      user['to-dos'][indexOfTask].title = newTitle
    }
  }
}

const handleRemoveTask = ({ userId, taskId }) => {
  const user = data.value[0].people.find(u => u.id === userId)
  if (user) {
    user['to-dos'] = user['to-dos'].filter(task => task.id !== taskId)
  }
}

const data = ref([
  {
    household_name: 'Example',
    picture_url: 'image.png',
    people: [
      {
        id: 0,
        name: 'Kermit',
        color: 'green',
        image: 'kermit.jpeg',
        'to-dos': [
          {
            id: uuidv4(),
            title: 'Kermit task 1',
            due_date: '2023-02-02',
            status: 'pending'
          },
          {
            id: uuidv4(),
            title: 'Kermit task 2',
            due_date: '2023-02-02',
            status: 'pending'
          },
          {
            id: uuidv4(),
            title: 'Kermit task 3',
            due_date: '2023-02-02',
            status: 'pending'
          },
          {
            id: uuidv4(),
            title: 'Kermit task 4',
            due_date: '2023-02-02',
            status: 'pending'
          }
        ]
      },
      {
        id: 1,
        name: 'Gonzo',
        color: 'blue',
        image: 'gonzo.jpeg',
        'to-dos': [
          {
            id: uuidv4(),

            title: 'Gonzo task 1',
            due_date: '2023-02-02',
            status: 'pending'
          },
          {
            id: uuidv4(),

            title: 'Gonzo task 2',
            due_date: '2023-02-02',
            status: 'pending'
          }
        ]
      },
      {
        id: 2,
        name: 'Beaker',
        color: 'orange',
        image: 'beaker.jpeg',
        'to-dos': [
          {
            id: uuidv4(),
            title: 'Beaker task 1',
            due_date: '2023-02-02',
            status: 'pending'
          }
        ]
      }
    ]
  }
])
</script>
