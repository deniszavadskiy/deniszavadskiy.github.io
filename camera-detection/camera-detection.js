Vue.component('camera-detection', {
    template: `<div class="camera-detection" :style="style" @mousemove="onMouseMove"></div>`,
    data() {
        return {
            x: 0,
            y: 0,
            style: {
                background: `
                radial-gradient(ellipse at center, rgba(246,41,12,1) 0%, rgba(240,47,23,1) 0%, rgba(84,8,0,1) 0%, rgba(176,15,0,1) 0%, rgba(176,15,0,1) 48%, rgba(176,15,0,0) 68%) no-repeat,
                url(${this.src}) center no-repeat`,
                backgroundSize: "300px 300px, cover",
                backgroundPosition: "100px 100px, 0 0",
                backgroundBlendMode: "saturation",
                width: "100vw",
                height: "100vh"
            }
        }
    },
    mounted() {
        this.$el.addEventListener('touchmove', this.onTouchMove)
    },
    props: {
        src: {
            type: String,
            default: "./assets/images/test-image.jpg"
        }
    },
    methods: {
        onMouseMove(event) {
            this.getXYCoordinates(event);
        },
        onTouchMove(event) {
            event.preventDefault();
            event.stopPropagation();
            this.getXYCoordinates(event.touches[0]);
        },
        getXYCoordinates(event) {
            this.x = event.clientX - 150;
            this.y = event.clientY - 150;

            this.$el.style.backgroundPosition = `${this.x}px ${this.y}px, 0 0`;
        }
    }
})

new Vue({
    el: "#app"
});