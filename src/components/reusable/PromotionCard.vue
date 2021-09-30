<template>
    <div class="promo-card">
        <div class="left">
            <h2>
                {{ title }}
            </h2>
            <p>
                {{ text }}
            </p>
        </div>
        <div class="right">
            <img :src="require(`../../assets/${image}.jpg`)" :alt="title">
        </div>
    </div>
</template>

<script>
export default {
    name: 'PromotionCard',
    props: ['title','text','image']
}
</script>

<style scoped>
.promo-card {
    flex: 1 1 45%;
    background-color: #1a212b;
    display: flex;
    align-content: center;
    justify-content: center;
    border-radius: 20px;
}

.promo-card:nth-of-type(1) {
    margin-right: 5%;
}

.promo-card .left {
    flex: 1 1 55%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.promo-card .right {
    flex: 1 1 45%;
}

.promo-card .right img {
    max-width: 100%;
    height: 100%;
}
</style>