<template>
    <div class="state">
        <div id="container">
            <ul id="list">
                <ListItem 
                    v-for="(item, index) in tasks"
                    :key="index"
                    :item="item"
                    @toggleItem="toggleItem"
                    @removeItem="removeItem"
                />
            </ul>
            <div id="new-item-box">
                <form @submit.prevent="addItem">
                    <input type="text" name="" v-model="newItem" placeholder="Digite a nova tarefa..."/>
                    <button type="submit">
                        <Icon name="plus" />
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import ListItem from '../components/ListItem.vue'
import Icon from '../components/Icon.vue'

export default {
    name: 'State',
    components: {
        ListItem,
        Icon
    },
    data () {
        return {
            newItem: ''
        }
    },
    computed: {
        tasks () {
            return this.$store.getters.getTasks
        }
    },
    methods: {
        toggleItem (id) {
            this.$store.dispatch('TOGGLE_ITEM', id)
        },
        addItem () {
            if (this.newItem.length) {
                this.$store.dispatch('ADD_ITEM', this.newItem)
                this.newItem = ''
            }
        },
        removeItem (item) {
            const confirmResult = window.confirm(`Tem certeza que deseja remover: "${item.value}" ?`)
            if (confirmResult) this.$store.dispatch('REMOVE_ITEM', item.id)
        }
    }
}
</script>