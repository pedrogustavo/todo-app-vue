<template>
    <div>
        <h1>Batatinha quando nasce</h1><br>
        <input type="text" v-model="value" />
        <br>
        <br>
        <p>{{value}}</p>
    </div>
</template>
<script>
export default {
    name: 'Batatinha',
    data () {
        return {
            value: 'Hello World'
        }
    },
    created () {
        // ...
    },
    beforeDestroy () {
        // ...
    }
}
</script>