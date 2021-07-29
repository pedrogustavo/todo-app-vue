import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const updateStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export default new Vuex.Store({
    state: {
        tasks: localStorage.getItem('tasks') 
            ? JSON.parse(localStorage.getItem('tasks'))
            : [
                {
                    id: 1,
                    value: 'Instalar vue-cli',
                    completed: true
                }
            ]        
    },
    mutations: {
        toggleCompletedTask (state, id) {
            state.tasks = state.tasks.map(item => {
                if (item.id === id) item.completed = !item.completed
                return item
            })
            updateStorage('tasks', state.tasks)
        },
        addNewTask (state, task) {
            state.tasks = [
                ...state.tasks,
                {
                    id: state.tasks.length + 1,
                    value: task,
                    completed: false
                }
            ]
            updateStorage('tasks', state.tasks)
        },
        removeItem (state, id) {
            state.tasks = state.tasks
                .filter(item => item.id !== id)
                .map((item, index) => {
                    item.id = index
                    return item
                })
            updateStorage('tasks', state.tasks)
        }
    },
    actions: {
        TOGGLE_ITEM ({ commit }, id) {
            commit('toggleCompletedTask', id)
        },
        ADD_ITEM ({ commit }, task) {
            commit('addNewTask', task)
        },
        REMOVE_ITEM ({ commit }, id) {
            commit('removeItem', id)
        }
    },
    getters: {
        getTasks (state) {
            return state.tasks
        }
    }
})
