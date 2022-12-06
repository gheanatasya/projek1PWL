<template>
    <div class="bagian2">
        <nav>
            <ul>
                <li><a href="">Coca-Cola</a></li>
                <li><a href="">Milo</a></li>
                <li><a href="">Fanta Float</a></li>
            </ul>
        </nav>
    </div>   
</template>

<script>
    export default {
        name: 'HalamanMinuman'
    }
</script>

<style>
#bagian2 {
    float: right;
    width: 680px;
}
nav {
    width: 100%;
    height: 100px;
}

nav ul {
    margin: 0;
    padding: 0;
}

nav ul li {
    list-style-type: square;
    display: inline-block;
    float: left;
    line-height: 100px;
}

nav ul li a {
    text-decoration: none;
    margin: 5px;
    padding: 14px 20px;
    color: black;
    background-color: white;
    border-radius: 5px;
 }
</style>