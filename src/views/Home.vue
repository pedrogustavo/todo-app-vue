<template>
  <div id="app">
        <div id="container">
            <ul id="list">
                <ListItem v-for="(item, index) in list" :key="index" :item="item" @itemID="toggleItem" />
            </ul>
            <div id="new-item-box">
                <form @submit.prevent="addItem">
                    <input type="text" name="" v-model="newItem" placeholder="Digite a nova tarefa..."/>
                    <button type="submit">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14 icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
    name: 'Home',
    components: {
        ListItem
    },
    data () {
        return {
            list: [
                {
                    id: 1,
                    value: 'Criar aplicação em vue.js',
                    completed: false
                },
                {
                    id: 2,
                    value: 'Criar aplicação em React',
                    completed: false
                },
                {
                    id: 3,
                    value: 'Adicionar vuex',
                    completed: true
                }
            ],
            newItem: ''
        }
    },
    methods: {
        toggleItem (id) {
            this.list.forEach(item => {
                if (item.id === id) item.completed = !item.completed
            })
        },
        addItem () {
            if (this.newItem.length) {
                this.list.push({
                    id: this.list.length + 1,
                    value: this.newItem,
                    completed: false
                })
                this.newItem = ''
            }
        }
    }
}
</script>