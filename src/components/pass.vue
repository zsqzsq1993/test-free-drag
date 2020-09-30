<template>
    <div class="pass-wrapper">
        <img src="https://en.js.cx/clipart/soccer-gate.svg" id="gate1" class="draggable">
        <img src="https://en.js.cx/clipart/soccer-gate.svg" id="gate2" class="draggable">
        <img src="https://en.js.cx/clipart/soccer-gate.svg" id="gate3" class="draggable">
        <img src="https://js.cx/clipart/ball.svg" alt="ball" class="ball" id="ball" ref="ball">
    </div>
</template>

<script>
    import freedrag from 'free-drag'

    export default {
        mounted() {
            const ball = document.getElementById('ball')

            const react = document.querySelector('.pass-wrapper').getBoundingClientRect()

            freedrag(ball, {
                leaveHandler(below) {
                    below.style.background = 'white'
                },
                enterHandler(below) {
                    below.style.background = 'rgba(255,0,0,0.5)'
                },
                boundary: react
            })
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
        left: 70%;
        transform: translate3d(-50%, -50%, 0);
    }

    .pass-wrapper #gate1 {
        top: 10%;
    }

    .pass-wrapper #gate2 {
        top: 50%;
    }

    .pass-wrapper #gate3 {
        top: 90%;
    }
</style>
