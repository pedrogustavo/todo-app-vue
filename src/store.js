import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: [
            {
                id: 1,
                value: 'Instalar vue-cli',
                completed: true
            },
            {
                id: 2,
                value: 'Criar componentes na aplicação',
                completed: true
            },
            {
                id: 3,
                value: 'Adicionar vue-router',
                completed: false
            },
            {
                id: 4,
                value: 'Adicionar vuex',
                completed: false
            }
        ] 
    },
    mutations: {
        toggleCompletedTask (state, id) {
            state.tasks = state.tasks.map(item => {
                if (item.id === id) item.completed = !item.completed
                return item
            })
        },
        addNewTask (state, task) {
            state.tasks.push({
                id: state.tasks.length + 1,
                value: task,
                completed: false
            })
        }
    },
    actions: {
        TOGGLE_ITEM ({ commit }, id) {
            commit('toggleCompletedTask', id)
        },
        ADD_ITEM ({ commit }, task) {
            commit('addNewTask', task)
        }
    },
    getters: {
        getTasks (state) {
            return state.tasks
        }
    }
})
