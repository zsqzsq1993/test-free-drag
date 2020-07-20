<template>
    <div class="pass-wrapper">
        <img src="https://en.js.cx/clipart/soccer-gate.svg" id="gate1" class="draggable">
        <img src="https://en.js.cx/clipart/soccer-gate.svg" id="gate2" class="draggable">
        <img src="https://en.js.cx/clipart/soccer-gate.svg" id="gate3" class="draggable">
        <img src="https://js.cx/clipart/ball.svg" alt="ball" class="ball" id="ball" ref="ball">
    </div>
</template>

<script lang="ts">
    import freedrag from "free-drag"

    export default {
        mounted() {
            const ball = document.getElementById('ball')
            if (ball) {
                freedrag(ball, {
                    leaveHandler(below) {
                        below.style.background = 'white'
                    },
                    enterHandler(below) {
                        below.style.background = 'rgba(255,0,0,0.5)'
                    }
                })
            }
        }
    }
</script>

<style>
    .pass-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .pass-wrapper .ball {
        position: absolute;
        left: 10%;
        top: 10%;
    }
    .pass-wrapper .draggable {
        position: absolute;
        top: 50%
    }
    .pass-wrapper #gate1 {
        left: 10%;
    }
    .pass-wrapper #gate2 {
        left: 50%;
    }
    .pass-wrapper #gate3 {
        left: 90%;
    }
</style>
