<template>
    <div class="hello m-3">
        <br />
        <h1>{{ msg }}</h1>
        <br />
        <p style="font-size:17px">
            Este projeto foi desenvolvido no 1º semestre do 3º ano de Engenharia
            Informática <br />
            na Escola Superior de Tecnologia e Gestão na cadeira de Sistemas de
            Informação em Rede <br /><br />
            Coordenador da cadeira: Hugo Barbosa <br /><br />
            Grupo de trabalho: Cláudio Pereira e Ricardo Leite
        </p>
        <br />
        <h1>Installed Plugins</h1>
        <br />
        <ul>
            <li>
                <a
                    href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
                    target="_blank"
                    rel="noopener"
                    >babel</a
                >
            </li>
            <li>
                <a
                    href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa"
                    target="_blank"
                    rel="noopener"
                    >pwa</a
                >
            </li>
            <li>
                <a
                    href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
                    target="_blank"
                    rel="noopener"
                    >router</a
                >
            </li>
            <li>
                <a
                    href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
                    target="_blank"
                    rel="noopener"
                    >vuex</a
                >
            </li>
            <li>
                <a
                    href="https://sweetalert2.github.io/"
                    target="_blank"
                    rel="noopener"
                    >sweetalert2</a
                >
            </li>
        </ul>
        <ul>
            <li>
                <a
                    href="https://github.com/gdg-tangier/vue-firestore"
                    target="_blank"
                    rel="noopener"
                    >vue-firestore</a
                >
            </li>
            <li>
                <a
                    href="https://github.com/SSENSE/vue-carousel/"
                    target="_blank"
                    rel="noopener"
                    >vue-carousel</a
                >
            </li>
            <li>
                <a
                    href="https://bootstrap-vue.js.org/"
                    target="_blank"
                    rel="noopener"
                    >bootstrap</a
                >
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
    font-size: 17px;
}
a {
    color: #42b983;
}
</style>
