<template>
    <div class="basic-wrapper" ref="wrapper">
        <img src="https://js.cx/clipart/ball.svg" alt="ball" class="ball" id="ball1" ref="ball1">
        <img src="https://js.cx/clipart/ball.svg" alt="ball" class="ball" id="ball2" ref="ball2">
        <img src="https://js.cx/clipart/ball.svg" alt="ball" class="ball" id="ball3" ref="ball3">
    </div>
</template>

<script lang="ts">
    import freedrag from "free-drag"

    export default {
        mounted() {
            const container = this.$refs.wrapper
            const ball1 = this.$refs.ball1
            const ball2 = this.$refs.ball2
            const ball3 = this.$refs.ball3
            const react = container.getBoundingClientRect()
            if (
                !ball1 ||
                !ball2 ||
                !ball3) {
                throw new Error('One of balls does not exsist')
            }
            freedrag(ball1, {
                boundary: react
            })

            freedrag({
                element: ball2,
                boundary: react
            })

            freedrag.draggable({
                element: ball3,
                boundary: react
            })
        }
    }
</script>

<style>
    .basic-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .basic-wrapper .ball {
        position: absolute;
        top: 50%
    }
    .basic-wrapper #ball1 {
        left: 10%;
    }
    .basic-wrapper #ball2 {
        left: 50%;
    }
    .basic-wrapper #ball3 {
        left: 90%;
    }
</style>
