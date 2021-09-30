<template>
    <main>
        <div class="inner">
            <div class="underhead">
                <div class="sponsors">
                    <div class="sponsor">
                        <img src="../assets/football.png" alt="sponsor-logo">
                        <p class="sponsor-title">Main Club Partner</p>
                    </div>
                    <div class="sponsor">
                        <img src="../assets/football.png" alt="sponsor-logo">
                        <p class="sponsor-title">Official Shirt Sponsor</p>
                    </div>
                </div>
                <div class="signin">
                    <ReusableButton buttonType="signin" buttonText="Sign in" />
                    <ReusableButton buttonType="register" buttonText="Register" />
                </div>
            </div>


            <div class="main-cards">
                <MainCard v-for="card in mainCards" :key="card.title" :cardData="card" />
            </div>

            <div class="sports-cats">
                <h3>Sports Categories</h3>
                <div class="flex-cont">
                    <SportCategory v-for="cat in sportsCategories" :key="cat" :catName="cat" />
                </div>
            </div>

            <div class="promo-cards">
                <h3>Exciting promotions start here</h3>
                <div class="flex-cont">
                    <PromotionCard 
                    title="NBA Fantasy Guaranteed Prize Pool" 
                    text="Put in your Fantasy Team and receive a free Sports Bet!" 
                    image="promo1" 
                    />
                    <PromotionCard 
                    title="Multi Master" 
                    text="$3000 Jackpot every weekend with $300 guaranteed payout!" 
                    image="promo2" 
                    />
                </div>
            </div>

            <div class="game-providers">
                <h3>Game Providers</h3>
                <div class="flex-cont">
                    <Provider v-for="logo in providers" :key="logo" :logo="logo" />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import ReusableButton from './reusable/ReusableButton.vue'
import MainCard from './reusable/MainCard.vue'
import SportCategory from './reusable/SportCategory.vue'
import PromotionCard from './reusable/PromotionCard.vue'
import Provider from './reusable/Provider.vue'

export default {
    name: 'Content',
    data() {
        return {
            mainCards: [],
            sportsCategories: [],
            providers: []
        }
    },
    components: {
        ReusableButton,
        MainCard,
        SportCategory,
        PromotionCard,
        Provider
    },
    created () {
        this.mainCards = this.$store.state.mainCards
        this.sportsCategories = this.$store.state.sportsCats
        this.providers = this.$store.state.providers
    }
}
</script>

<style scoped>
    main .underhead, main .underhead .sponsors {
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    main .underhead {
        padding: 10px 0;
    }
    main .underhead .sponsors p {
        color: #889790;
    }
    .main-cards {
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .flex-cont {
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    .sports-cats {
        overflow: hidden;
    }
    .game-providers {
        margin: 20px auto;
    }
    .sponsor {
        position: relative;
        display: flex;
        justify-content: center;
        align-content: center;
        width: 150px;
    }
    .sponsor img {
        width: 35px;
        height: 35px;
        margin: 5px 10px;
    }
    .sponsor p {
        font-size: 11px;
        text-align: left;
        max-width: 60px;
    }
    .sponsor::after {
        position: absolute;
        content: '';
        height: 65%;
        width: 1px;
        right: -5px;
        top: 10%;
        background-color: #889790;
    }
</style>