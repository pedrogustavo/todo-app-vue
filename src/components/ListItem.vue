<template>
    <li class="list-item" :class="{ 'completed': item.completed }">
        <div class="list-item-content" @click="toggleItem(item.id)">
            <Icon :name="item.completed ? 'check' : 'circle'" />
            <p>{{ item.value }}</p>
        </div>
        <button class="list-item-remove" @click="removeItem(item)">
            <Icon name="times" />
        </button>
    </li>
</template>
<script>
import Icon from './Icon.vue'

export default {
    name: 'ListItem',
    components: { Icon },
    props: ['item'],
    methods: {
        toggleItem (id) {
            this.$emit('toggleItem', id)
        },
        removeItem (item) {
            console.log('click')
            this.$emit('removeItem', item)
        }
    }
}
</script>