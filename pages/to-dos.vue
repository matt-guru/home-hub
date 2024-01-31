<template>
  <div>
    <section class="p-4 mb-4 border border-b-1">
      <h1 class="text-xl">To-dos</h1>
    </section>
    <div class="mx-auto overflow-x-auto pb-20">
      <div class="flex flex-wrap mx-4">
        <header class="flex w-full">
          <User v-for="user in data[0].people" :user="user" />
        </header>

        <section class="flex w-full pt-6">
          <template v-for="user in data[0].people">
            <div class="flex-shrink-0">
              <template v-for="tasks in user['to-dos']">
                <TodoItem :task="tasks" :color="user.color" />
              </template>
            </div>
          </template>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = [
  {
    household_name: 'Example',
    picture_url: 'image.png',
    people: [
      {
        name: 'Kermit',
        color: 'green',
        image: 'kermit.jpeg',
        'to-dos': [
          {
            title: 'Kermit task 1',
            due_date: '2023-02-02',
            status: 'pending'
          },
          {
            title: 'Kermit task 2',
            due_date: '2023-02-02',
            status: 'pending'
          },
          {
            title: 'Kermit task 3',
            due_date: '2023-02-02',
            status: 'pending'
          },
          {
            title: 'Kermit task 4',
            due_date: '2023-02-02',
            status: 'pending'
          }
        ]
      },
      {
        name: 'Gonzo',
        color: 'blue',
        image: 'gonzo.jpeg',
        'to-dos': [
          {
            title: 'Gonzo task 1',
            due_date: '2023-02-02',
            status: 'pending'
          },
          {
            title: 'Gonzo task 2',
            due_date: '2023-02-02',
            status: 'pending'
          }
        ]
      },
      {
        name: 'Beaker',
        color: 'orange',
        image: 'beaker.jpeg',
        'to-dos': [
          {
            title: 'Beaker task 1',
            due_date: '2023-02-02',
            status: 'pending'
          }
        ]
      }
    ]
  }
]
</script>
