<template>
    <div class="handler-wrapper">
        <div>请观察控制台</div>
        <img src="https://js.cx/clipart/ball.svg" alt="ball" class="ball" ref="ball">
    </div>
</template>

<script lang="ts">
    import freedrag from "free-drag"

    export default {
        mounted() {
            const ball = this.$refs.ball

            const react = document.querySelector('.handler-wrapper').getBoundingClientRect()

            freedrag(ball, {
                boundary: react,

                moveHandler: {
                    onMoveInterval: 1000,

                    onMoveStart() {
                        console.log('move start')
                    },

                    onMoveEnd() {
                        console.log('move end')
                    },

                    onMove: (function () {
                        let i = 0

                        return function () {
                            console.log(i++)
                        }
                    })()
                }
            })
        }
    }
</script>

<style>
    .handler-wrapper {
        position: relative;
        height: 100%;
        width: 100%;
    }
    .handler-wrapper .ball {
        position: absolute;
        left: 50%;
        top: 50%
    }
</style>
