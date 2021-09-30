<template>
    <div class="provider">
        <img :src="require(`../../assets/provider-${logo}.jpg`)" alt="logo">
    </div>
</template>
<script>
export default {
    name: 'Provider',
    props: ['logo']
}
</script>

<style scoped>
.provider {
    flex: 1 1 20%;
    background-color: #fff;
    border-radius: 5px;
    margin-right: 20px;
    text-align: center;
    margin-bottom: 20px;
    padding: 5px 0;
}
.provider:last-of-type {
    margin-right: 0;
}
</style>