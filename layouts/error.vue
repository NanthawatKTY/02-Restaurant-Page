<template>
    <div>
        <slot name="header" />
        <div>
            <img class="img-sad-error" src="/images/sad.png" alt="">
        </div>
        <slot name="redirectEl"/>
    </div>
</template>

<style lang="scss" scoped>
    .img-sad-error {
        width: 200px;
        height: 200px;
        margin: 2rem 0;
    }
</style>