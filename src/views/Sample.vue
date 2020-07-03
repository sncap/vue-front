<template>
    <v-card flat max-width="96%">
        <v-card-title>
            Vue Template
        </v-card-title>
        <v-btn @click="button">Click me</v-btn>
    </v-card>
</template>

<script>
    export default {
        name: "Sample",
        data() { return {

        }},
        methods: {
            button() {
                this.$axios.get('/hello'
                ).then((response) => {
                    console.log(response.data)
                    let result = response.data
                    alert(result)
                }).catch( error => {
                    console.log({ error })
                })
            }
        }
    }
</script>

<style scoped>

</style>
