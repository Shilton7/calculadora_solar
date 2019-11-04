<template>
  <div id="app">
    <CalculadoraJr/>
  </div>
</template>

<script>
import CalculadoraJr from './components/CalculadoraJr'

export default {
  name: 'App',
  components: {
    CalculadoraJr
  }
}
</script>

<style>
/* CSS Simulador Solar */
/* -------- GLOBAL -------- */

.pagina-total {
    font-family: 'Open Sans', sans-serif;
}
textarea:focus, input:focus, select:focus, button:focus  {
    box-shadow: 0 0 0 0;
    outline: 0;
}
.titulo-real {
    color: #ffff;
    font-weight: 300;
}
.sub-real {
    color: #ffff;
    font-weight: 400;
    margin: 5px auto 10px;
}

/* ========= Página Inicial ======== */
/* ========= Página Inicial ======== */
/* ========= Página Inicial ======== */
.azul {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    /* background: url(../img/nuvens.png) #008acb fixed top center no-repeat; */
    background-size: auto;
}
.luzes {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:65%;
    /* background: url(../img/luz.png) fixed center center no-repeat; */
    background-size: auto 100%;

}
.principal {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0;
}
.paineis {
    position: absolute;
    bottom: 0;
    width: 100%;
}

.botao-real {
    padding: 15px 45px;
    border-radius: 50px;
    background: #ffffff;
    border: 2px solid #ffffff;
    text-transform: uppercase;;
    color: #222222;
    transition: 0.3s all;
    font-size: 2em;
    margin: 30px auto 45px;
    z-index: 50;
    max-width: 100%;
}
.botao-real:hover {
    background: rgba(255,255,255,0);
    color: #ffffff;
    transition: 0.3s all;
}
.laranja {
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:35%;
    background: 'url(../img/luz.png+) #ffbc00 fixed center center no-repeat';
    background-size: auto 100%;
}
.laranja img {
    margin: 30px auto 15px;
}
.info-real {
    color: #222222;
}
/* =//======== FIM da Página Inicial ======== */
/* =//======== FIM da Página Inicial ======== */
/* =//======== FIM da Página Inicial ======== */
/* ========= Página Cidade ======== */
/* ========= Página Cidade ======== */
/* ========= Página Cidade ======== */
.cidade {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: #45b9e4;
}
.principal-cidade {
position: relative;
top: 48%;
transform: translateY(-50%);
}
.selecao-cidade {
    margin: 30px auto 30px;
}
select#cidades {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* background: url(../img/select.png) no-repeat #ffffff; */
    background-position: center right;
    padding: 15px 60px 15px 30px !important;
    border:2px solid #ffffff;
    border-radius: 50px;
    text-transform: uppercase;
    font-size: 2em;
    transition: 0.3s all;
    max-width: 100%;
}
select#cidades:hover {
    /* background: url(../img/select.png) no-repeat #45b9e4; */
    background-position: center right;
    color: #ffffff;
    transition: 0.3s all;
}

select#cidades option {
    background: #ffffff;
    padding: 15px 30px !important;
    border: 1px solid #cbcbcb;
}
#incidencia {
    width: 100%;
    font: 1em bold;
    margin: 15px auto;
    color: #ffffff;
    font-family: 'Open Sans', sans-serif;
}
#incidencia img {
    max-width: 200px;
}
.botao-avanco {
    background: #ffffff;
    color:#333333;
    border: 2px solid #ffffff;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 50px;
    padding: 7px 20px;
    margin-top: 10px;
    transition: 0.3s all;
}
.botao-avanco:hover {
    transition: 0.3s all;
    background: rgba(255,255,255,0);
    color: #ffffff;
}
/* =//======== FIM da Página Cidade ======== */
/* =//======== FIM da Página Cidade ======== */
/* =//======== FIM da Página Cidade ======== */
/* ========= Página Valor ======== */
/* ========= Página Valor ======== */
/* ========= Página Valor ======== */
.valor {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: #679331;
}
.principal-valor {
position: relative;
top: 46%;
transform: translateY(-50%);
}
#valor-conta {
    padding: 15px 45px;
    border-radius: 50px;
    background: #ffffff;
    border: 2px solid #3e621f;
    text-transform: uppercase;;
    color: #222222;
    transition: 0.3s all;
    font-size: 2em;
    margin: 30px auto 15px;
    z-index: 50;
    max-width: 100%;
}
#valor-conta:focus  {
    box-shadow: 1px 0 0 10px;
}
/* =//======== FIM da Página Valor ======== */
/* =//======== FIM da Página Valor ======== */
/* =//======== FIM da Página Valor ======== */
/* ========= Página Consumo ======== */
/* ========= Página Consumo ======== */
/* ========= Página Consumo ======== */
.consumo {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: #2d2a31;
}
.principal-consumo {
position: relative;
top: 46%;
transform: translateY(-50%);
}
#consumo-conta {
    padding: 15px 45px;
    border-radius: 50px;
    background: #ffffff;
    border: 2px solid #ffbc00;
    text-transform: uppercase;;
    color: #222222;
    transition: 0.3s all;
    font-size: 2em;
    margin: 30px auto 15px;
    z-index: 50;
    max-width: 100%;
}
#consumo-conta:focus  {
    box-shadow: 1px 0 0 10px #ffbc00;
}
/* =//======== FIM da Página Consumo ======== */
/* =//======== FIM da Página Consumo ======== */
/* =//======== FIM da Página Consumo ======== */
/* Dispositivos pequenos (tablets, 768px e superiores) */

/* ========= Página Aplicação ======== */
/* ========= Página Aplicação ======== */
/* ========= Página Aplicação ======== */
.aplicacao {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: #febe1b;
}
.principal-aplicacao {
position: relative;
top: 46%;
transform: translateY(-50%);
}
.aplicacao .carousel-control.right,
.aplicacao .carousel-control.left {
    background: none;
}
.titulo-aplicacao {
    color: #ffff;
    font-weight: 300;
    text-shadow: none;
    font-size: 1.6em;
}
/* =//======== FIM da Página Aplicação ======== */
/* =//======== FIM da Página Aplicação ======== */
/* =//======== FIM da Página Aplicação ======== */

@media (max-width: 575.98px) {
    .titulo-real {
        font-size: 1.6em;
    }
    .sub-real {
        font-size: 1em;
    }
    .botao-real {
        padding: 7px 30px;
        border-radius: 50px;
        font-size: 1.3em;
        margin: 5px auto 20px;
    }
    select#cidades {
        padding: 15px 45px 15px 15px !important;
        font-size: 0.7em;
    }
        #valor-conta, #consumo-conta {
        padding: 15px 25px 15px 25px !important;
        font-size: 0.7em;
        margin: 8px auto;
    }
}

/* Dispositivos médios (desktops, 992px e superiores) */
@media (max-width: 991px) {
    .titulo-real {
        font-size: 2em;
    }
    .botao-real {
        padding: 7px 30px;
        border-radius: 50px;
        font-size: 1.6em;
        margin: 5px auto 20px;
    }
    select#cidades {
        padding: 15px 60px 15px 30px !important;
        font-size: 1em;
    }
    #valor-conta, #consumo-conta {
        padding: 15px 25px 15px 25px !important;
        font-size: 1em;
        margin: 8px auto;
    }
}

</style>
