<template>
    <div class="camera-detection-wrapper">
        <div ref="cameras" class="camera-detection" :style="style" @touchstart.stop.prevent="onDoubleClick" @mousemove="onMouseMove"></div>
        <div class="points" v-for="point in pointsStyle" :style="point" @touchstart.stop.prevent="onDoubleClick($event, true)"
             @mouseover="onMouseOverPoint"></div>
    </div>
</template>

<script>
    export default {
        name: "camera-detection",
        data() {
            return {
                x: 0,
                y: 0,
                touchCount: 0,
                style: {
                    background: `
                url(./src/assets/indicator.png) no-repeat,
                url(${this.src}) center no-repeat`,
                    backgroundPosition: "100px 100px, сenter center",
                    backgroundSize: "300px 300px, 100% 100%",
                }
            }
        },
        computed: {
            pointsStyle() {
                return this.coordinates.map(point => {
                    return {
                        top: `${point[0]}%`,
                        left: `${point[1]}%`
                    }
                })
            }
        },
        props: {
            src: {
                type: String,
                default: "test-image.jpg"
            },
            coordinates: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        methods: {
            onDoubleClick(event, isPoint) {
                ++this.touchCount;

                if (this.touchCount >= 2) {
                    this.getXYCoordinates(event.touches[0]);

                    if(isPoint) {
                        event.target.classList.add('highlight');
                    }
                }

                setTimeout(() => {
                    this.touchCount = 0;
                }, 500)
            },
            onMouseOverPoint(event) {
                event.target.classList.add('highlight');
            },
            onMouseMove(event) {
                this.getXYCoordinates(event);
            },
            getXYCoordinates(event) {
                this.x = event.clientX - 150;
                this.y = event.clientY - 150;

                this.$refs.cameras.style.backgroundPosition = `${this.x}px ${this.y}px, center`;
            }
        }
    }
</script>

<style>
    .camera-detection-wrapper {
        height: 100%;
    }
    .camera-detection{
        background-blend-mode: difference;
        width: 100vw;
        height: 100%;
    }
    .points {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: darkblue;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        opacity: 0.3;
        position: absolute;
    }

    .points.highlight {
        background: rgba(255,255,255,0);
        background: -moz-radial-gradient(center, ellipse cover, rgba(255,255,255,0) 0%, rgba(255,255,255,0.01) 1%, rgba(231,55,39,0.79) 79%, rgba(231,55,39,1) 100%);
        background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(255,255,255,0)), color-stop(1%, rgba(255,255,255,0.01)), color-stop(79%, rgba(231,55,39,0.79)), color-stop(100%, rgba(231,55,39,1)));
        background: -webkit-radial-gradient(center, ellipse cover, rgba(255,255,255,0) 0%, rgba(255,255,255,0.01) 1%, rgba(231,55,39,0.79) 79%, rgba(231,55,39,1) 100%);
        background: -o-radial-gradient(center, ellipse cover, rgba(255,255,255,0) 0%, rgba(255,255,255,0.01) 1%, rgba(231,55,39,0.79) 79%, rgba(231,55,39,1) 100%);
        background: -ms-radial-gradient(center, ellipse cover, rgba(255,255,255,0) 0%, rgba(255,255,255,0.01) 1%, rgba(231,55,39,0.79) 79%, rgba(231,55,39,1) 100%);
        background: radial-gradient(ellipse at center, rgba(255,255,255,0) 0%, rgba(255,255,255,0.01) 1%, rgba(231,55,39,0.79) 79%, rgba(231,55,39,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e73727', GradientType=1 );
        width: 200px;
        height: 200px;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        transition: background-color 0.2s;
        -webkit-transition: background-color 0.2s;
        -o-transition: background-color 0.2s;
        transition: background-color 0.2s;
        opacity: 1;
    }
</style>
