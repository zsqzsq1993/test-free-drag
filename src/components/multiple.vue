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
            const wrapper = this.$refs.blocksWrapper
            const blocks = document.getElementsByClassName('block')

            const onMoveStart = function (event) {
                event.target.style.border = '2px solid black'
            }

            const onMoveEnd = function (event) {
                const style = event.target.style
                style.position = ''
                style.border = '1px dashed black'
            }

            const leaveHandler = function () {}

            const enterHandler = function (below, element) {
                const belowParent = below.parentNode
                const elementParent = element.parentNode
                belowParent.appendChild(element)
                elementParent.appendChild(below)
            }

            Array.prototype.forEach.call(blocks, item => {
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

        display: flex;
        justify-content: center;
    }
    .blocks-wrapper {
        width: 760px;
    }
    .blocks-wrapper .block-wrapper {
        width: 760px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .blocks-wrapper .block {
        width: 755px;
        height: 55px;
        font-size: 38px;
        line-height: 55px;
        border: 1px dashed black;
        text-align: center;
        vertical-align: top;
    }
</style>
