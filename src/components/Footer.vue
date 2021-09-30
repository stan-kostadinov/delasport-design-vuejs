<template>
    <footer class="footer">
        <div class="inner">

            <div class="company-info">
                <Logo />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus dui ut metus rutrum feugiat. Quisque lacus sapien, sagittis vitae urna et, rutrum auctor lorem. Cras eget semper magna, non varius odio. Vestibulum risus dolor, vestibulum eget lacus vel, maximus consequat diam. Nullam vehicula lacinia tristique. Maecenas non ipsum at diam eleifend porta ut eu neque. Maecenas tempor rhoncus massa, quis faucibus lacus elementum vitae. Nulla vel finibus dolor. Ut bibendum sapien eu libero molestie gravida. Nulla ante nunc, lobortis id aliquet vitae, efficitur eget eros. Suspendisse interdum gravida ex, ac semper massa maximus ut.</p>
            </div>
            <div class="sports">
                <h4>Sports</h4>
                <ul>
                    <li>Promotions</li>
                    <li>In play</li>
                    <li>Upcoming</li>
                </ul>
            </div>
            <div class="casino">
                <h4>Casino</h4>
                <ul>
                    <li>Live Casino</li>
                </ul>
            </div>
            <div class="support">
                <h4>Support</h4>
                <ul>
                    <li>Payment Options</li>
                    <li>Responsible</li>
                    <li>Gambling</li>
                    <li>FAQ</li>
                    <li>General Betting</li>
                    <li>Rules</li>
                    <li>Responsible</li>
                    <li>Gambling Terms and Conditions</li>
                    <li>Affiliate FAQ</li>
                    <li>Sportsbet Market</li>
                    <li>Explanations</li>
                </ul>
            </div>
            <div class="about">
                <h4>About</h4>
                <ul>
                    <li>Privacy Policy</li>
                    <li>About Us</li>
                    <li>Terms and Conditions</li>
                    <li>Affiliates</li>
                    <li>Affiliates Terms and Conditions</li>
                    <li>Sportsbet.io</li>
                    <li>Partnerships</li>
                    <li>Bug Bounty</li>
                    <li>Program</li>
                </ul>
            </div>
            <div class="social">
                <h4>Follow us</h4>
                <div class="flex-cont">
                    <div class="social-img">
                        <img src="../assets/facebook.png" alt="">
                    </div>
                    <div class="social-img">
                        <img src="../assets/facebook.png" alt="">
                    </div>
                    <div class="social-img">
                        <img src="../assets/facebook.png" alt="">
                    </div>
                    <div class="social-img">
                        <img src="../assets/facebook.png" alt="">
                    </div>
                    <div class="social-img">
                        <img src="../assets/facebook.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import Logo from './Logo.vue'

export default {
    name: 'Footer',
    components: {
        Logo
    }
}
</script>

<style scoped>
.footer .inner {
    display: flex;
    position: relative;
}
.footer .inner>div {
    flex: 1 1 auto;
    padding-left: 15px;
}
.footer .inner div:nth-of-type(1), .footer .inner div:last-of-type,  {
    padding-left: 0;
}
.footer .inner .company-info {
    max-width: 20%;
}
.footer .inner ul {
    list-style: none;
    margin: 0 auto;
    padding: 0;
}
.footer .inner ul li {
    margin-bottom: 10px;
    cursor: pointer;
}
.footer .inner ul li:hover {
    color: #fff;
}
.social img {
    max-width: 20px;
    height: 20px;
    margin: 5px
}
.footer .inner::before {
    position: absolute;
    content: '';
    height: 1px;
    width: 100%;
    height: 1px;
    left: 0;
    top: -20px;
    background-color: #889790;
}
.social .social-img {
    widows: 30px;
    height: 30px;
    text-align: center;
    padding: 5px;
    background-color: #313840;
    border-radius: 100%;
}
h4 {
    margin: 0 auto 25px;
}
.flex-cont {
    display: flex;
}
</style>