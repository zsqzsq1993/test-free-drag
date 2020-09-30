<template>
    <div class="multiple-wrapper">
        <div class="blocks-wrapper" ref="blocksWrapper">
            <div class="block-wrapper">
                <div class="block draggable">apple</div>
            </div>
            <div class="block-wrapper">
                <div class="block draggable">banana</div>
            </div>
            <div class="block-wrapper">
                <div class="block draggable">orange</div>
            </div>
            <div class="block-wrapper">
                <div class="block draggable">straberry</div>
            </div>
            <div class="block-wrapper">
                <div class="block draggable">watermelon</div>
            </div>
        </div>
    </div>
</template>

<script>
    import freedrag from "free-drag"

    export default {
        mounted() {
            const wrapper = document.querySelector('.multiple-wrapper')

            const blocks = document.getElementsByClassName('block')

            let {width} = window.getComputedStyle(blocks[0])

            width = Math.floor(Number.parseInt(width))

            const onMoveStart = function (event) {
                event.target.style.border = '2px solid black'
            }

            const onMoveEnd = function (event) {
                const style = event.target.style
                style.position = ''
                style.border = '1px dashed black'
            }

            const leaveHandler = function () {
            }

            const enterHandler = function (below, element) {
                const belowParent = below.parentNode
                const elementParent = element.parentNode
                belowParent.appendChild(element)
                elementParent.appendChild(below)
            }

            Array.prototype.forEach.call(blocks, item => {
                item.style.width = width + 'px'

                freedrag(item, {
                    boundary: wrapper.getBoundingClientRect(),

                    onlyVerticalMove: true,

                    enterHandler,

                    leaveHandler,

                    moveHandler: {
                        onMoveStart,

                        onMoveEnd
                    }
                })
            })
        }
    }
</script>

<style>
    .multiple-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .blocks-wrapper {
        width: 70%;
    }

    .blocks-wrapper .block-wrapper {
        width: 100%;
        height: 3.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .blocks-wrapper .block-wrapper .block {
        width: 100%;
        font-size: 2rem;
        line-height: 1.5;
        border: 1px dashed black;
        text-align: center;
        vertical-align: top;
    }
</style>
