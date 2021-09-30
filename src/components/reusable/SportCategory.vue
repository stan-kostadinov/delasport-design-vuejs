<template>
    <div class="sport-category">
        <div class="cat-img-container">
            <img src="../../assets/football.png" :alt="catName">
        </div>
        <p class="cat-name">
            {{ catName }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'SportCategory',
    props: {
        catName: {
            default: 'category',
            type: String
        }
    }
}
</script>

<style scoped>
.sport-category {
    width: 60px;
    text-align: center;
    font-size: 13px;
    flex: 1 0 6%;
    padding: 3px;
}
.sport-category .cat-img-container {
    
    padding: 10px;
    background-color: #1a212b;
    border-radius: 10px;
}
.sport-category img {
    max-width: 80%;
}
</style>