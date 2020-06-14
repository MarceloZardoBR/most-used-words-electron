<template>
    <div class="pill">
        <span class="name">{{ name }}</span>
        <span class="amount">{{ amount }}</span>
    </div>
</template>

<script>
export default {
    props:['name', 'amount']
}
</script>

<style scoped>
    .pill{
        display: flex;
        margin: 10px;
        height: 55px;
        border-radius: 30px;
        background-color: gold;
        color: #fff;
        font-size: 1.3rem;
        font-weight: bold;

        display: flex;
        align-items: center;
    }

    .pill .name{
        margin-left: 10px;
    }

    .pill .amount{
        display: flex;
        padding: 5px;
        margin: 10px;
        height: 35px;
        width: 35px;
        
        border-radius: 18px;
        background-color: #fff;
        color: gold;

        font-size: 14px;
        align-items: center;
        justify-content: center;
    }
</style>