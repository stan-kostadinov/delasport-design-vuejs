<template>
    <div class="main-card" :style="{'background-image': `url(${require('../../assets/'+cardData.imgLink+'.jpg')})`}">
        <h1 class="card-title"> {{ cardData.title }} </h1>
        <p class="card-text"> {{ cardData.text }} </p>
        <ReusableButton :buttonText="cardData.btnText" :buttonType="cardData.btnType" />
    </div>
</template>

<script>
import ReusableButton from './ReusableButton.vue'

export default {
    name: 'MainCard',
    components: {
        ReusableButton
    },
    props: {
        cardData: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.main-card {
    flex: 1 1 auto;
    width: 50%;
    height: 300px;
    background-position: center;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
}

.main-card p {
    max-width: 40%;
}
.main-card:nth-of-type(1) {
    margin-right: 10px;
}
.main-card:nth-of-type(2) {
    margin-left: 10px;
}
</style>