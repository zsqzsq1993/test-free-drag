<template>
    <div class="basic-wrapper" ref="wrapper">
        <img src="https://js.cx/clipart/ball.svg" alt="ball" class="ball" id="ball1" ref="ball1">
        <img src="https://js.cx/clipart/ball.svg" alt="ball" class="ball" id="ball2" ref="ball2">
        <img src="https://js.cx/clipart/ball.svg" alt="ball" class="ball" id="ball3" ref="ball3">
    </div>
</template>

<script>
    import freedrag from 'free-drag'

    export default {
        mounted() {
            const container = this.$refs.wrapper

            const ball1 = this.$refs.ball1

            const ball2 = this.$refs.ball2

            const ball3 = this.$refs.ball3

            const react = container.getBoundingClientRect()

            const myfreedrag = freedrag.createNewInstance({
                moveHandler: {
                    onMoveStart(event) {
                        event.target.style.transform = 'translate3d(0, 0, 0)'
                    },
                },
                boundary: react
            })

            myfreedrag(ball1)

            myfreedrag({
                element: ball2,
            })

            myfreedrag.draggable({
                element: ball3,
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
        transform: translate3d(-50%, 0, 0);
    }
    .basic-wrapper #ball2 {
        left: 50%;
        transform: translate3d(-50%, 0, 0);
    }
    .basic-wrapper #ball3 {
        left: 90%;
        transform: translate3d(-50%, 0, 0);
    }
</style>
