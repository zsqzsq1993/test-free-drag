<template>
    <div class="limit-wrapper">
        <div class="slider-wrapper">
            <div class="block" ref="block1"></div>
            <div class="bar" ref="bar1"></div>
        </div>
        <div class="slider-wrapper vertical">
            <div class="block" ref="block2"></div>
            <div class="bar" ref="bar2"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import freedrag from "free-drag"

    export default {
        mounted() {
            const block1 = this.$refs.block1
            const block2 = this.$refs.block2
            const react1 = this.$refs.bar1.getBoundingClientRect()
            const react2 = this.$refs.bar2.getBoundingClientRect()

            freedrag(block1, {
                boundary: {
                    left: react1.left,
                    right: react1.right
                },
                onlyHorizontalMove: true
            })

            freedrag({
                element: block2,
                onlyVerticalMove: true,
                boundary: {
                    top: react2.top,
                    bottom: react2.bottom
                }
            })
        }
    }
</script>

<style>
    .limit-wrapper {
        width: 100%;
        height: 100%;
    }
    .limit-wrapper .slider-wrapper {
        width: 100%;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .limit-wrapper .bar {
        flex: 0 0 200px;
        height: 20px;
        background-color: silver;
        border-radius: 5px;
    }
    .limit-wrapper .block {
        position: absolute;
        left: 50%;
        width: 10px;
        height: 30px;
        background-color: #000066;
        border-radius: 2px;
    }
    .limit-wrapper .vertical .bar {
        flex: 0 0 20px;
        height: 200px;
    }
    .limit-wrapper .vertical .block {
        left: 49%;
        width: 30px;
        height: 10px;
    }
</style>
