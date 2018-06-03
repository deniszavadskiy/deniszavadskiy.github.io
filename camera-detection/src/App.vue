<template>
    <div id="app">
        <camera-detection src="./src/assets/test-image.jpg" :coordinates="[[39, 48]]"></camera-detection>
    </div>
</template>

<script>
    import cameraDetection from './components/camera-detection/index.vue';

    export default {
        name: 'app',
        components: {
            cameraDetection
        }
    }
</script>

<style>

</style>
