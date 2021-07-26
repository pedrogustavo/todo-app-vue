<template>
    <li class="list-item" :class="{ 'completed': item.completed }" @click="toggleItem(item.id)">
        <Icon :name="item.completed ? 'check' : 'circle'" />
        <p>{{ item.value }}</p>
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
            this.$emit('itemID', id)
        }
    }
}
</script>