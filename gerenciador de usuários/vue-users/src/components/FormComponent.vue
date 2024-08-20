<template>
    <div class="box">
        <label for="email" class="lable">Email:</label>
        <input class="form-control" type="email" id="email" name="email" placeholder="email@email.com">
    </div>
</template>

<style>
    .box {
        display: flex;
        flex-direction: column;
        align-items: left;
        background-color: #e3e3e3;
        border-radius: 10px;
        padding: 10px 20px;
    }

    .lable {
        font-weight: 600;
    }
</style>