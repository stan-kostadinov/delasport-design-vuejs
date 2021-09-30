<template>
    <button :class="buttonType">
        {{ buttonText }}
    </button>
</template>

<script>
export default {
    name: 'ReusableButton',
    props: {
        buttonType: {
            type: String,
            required: true
        },
        buttonText: {
            type: String
        }
    }
}
</script>

<style scoped>

button {
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 20px;
    margin: 10px;
    border: none;
    width: 140px;
    cursor: pointer;
    font-weight: bold;
}

button.signin {
    background-color: #30373f;
    color: #889790;
}

button.register, button.card-button {
    background-color: #22d56d;
    color: #fff;
}

button.card-button {
    padding: 8px 15px;
    width: 160px;
}

</style>