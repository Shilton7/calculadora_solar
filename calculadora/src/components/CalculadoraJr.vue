<template>
  <div class="container">
<div class="col-md-12" v-if="resultado == 'S'">
  <div class="pagina-total center-block">
	<div class="container-fluid center-block resultado">
		<div class="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 principal-resultados">

				<div class="paineis-resultados center-block">
					<h1 class="text-center titulo-real">Pronto! Veja o seu gerador solar!</h1><br>

					<div class="col-sm-6 text-center">
						<h1>Imagem e logo</h1>
					</div>
					<div class="col-sm-6">
						<h2>

        <span class="label label-default"><strong>Estado: </strong> {{this.estado}}</span> <br>
        <span class="label label-default"><strong>Cidade: </strong> {{this.cidade}}</span> <br>
        <span class="label label-default"><strong>Valor da conta de luz:</strong> R$ {{this.valContaLuz}}</span> <br>
        <span class="label label-default"><strong>Consumo: </strong> {{this.valConsumo}}</span> <br>
        <span class="label label-default"><strong>Local instalação: </strong> {{this.localInstal}}</span><br>
        <span class="label label-default"><strong>Valor incidência: </strong> {{this.valIndicendiaSolar}}</span> <br>
        <span class="label label-default"><strong>Valor Eficiência da Placa: </strong> {{this.valEficienciaPlaca}}</span>
        <span class="label label-default"><strong>Quantidade Placas: </strong> {{calculoQuantPlacas()}}</span> <br>

    </h2>
					</div>
					<div class="text-center selecao-consumo">
						<div class="text-center">
							<a id="quero-saber" @click.prevent="reset()" href="#." class="btn btn-lg btn-secondary botao-real">Fazer novo cálculo</a>
						</div>
						<div class="text-center">
							<a id="ir-modal" href="#" class="btn btn-lg btn-secondary botao-real">Enviar mensagem</a>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>


</div>

    <!-- Pagina inicial -->
	<div class="pagina-total center-block" v-if="formInicial == 'S'">

		<div class="container-fluid azul center-block"></div>
		<div class="luzes container-fluid center-block">
			<div class="container">
				<div class="row">
					<div class="col-sm-4 col-sm-offset-4 col-xs-8 col-xs-offset-2 principal">
						<div class="paineis center-block">
							<h1 class="text-center titulo-real">Quanto você ganha <br/>investindo em energia solar?</h1>
							<div class="text-center">
								<a id="quero-saber" @click.prevent="avancar()" class="btn btn-lg btn-secondary botao-real">Quero Saber!</a>
							</div>
							<img class="img-responsive center-block" src="../assets/painel.png" alt="Real Solar">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container-fluid laranja center-block">
			<div class="container">
				<div class="row">
					<div class="col-sm-4 col-sm-offset-4 col-xs-8 col-xs-offset-2">
						<img class="img-responsive center-block" src="../assets/logo-real.png" alt="">
						<p class="text-center info-real">Atenção: Tenha sua conta de energia em mãos.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
<!-- // FIM da Pagina inicial -->

<!-- Localizacao -->
<div class="pagina-total center-block" v-if="formCidade == 'S'">
<div class="container-fluid center-block cidade">
<div class="col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 principal-cidade">
<div class="paineis-cidade center-block">
<img class="img-responsive center-block" src="../assets/localiza.png" alt="">
					<h1 class="text-center titulo-real">Qual a sua localização?</h1>
					<div class="text-center selecao-cidade">
						<select v-model="cidade" name="cidades" id="cidades">
							<option value="cidades" selected>Cidades</option>
							<option value="araruama">Araruama</option>
							<option value="armacao-de-buzios">Armação de Búzios</option>
							<option value="arraial-do-cado">Arraial do Cabo</option>
							<option value="cabo-frio">Cabo Frio</option>
							<option value="rio-das-ostras">Rio das Ostras</option>
							<option value="macae">Macaé</option>
							<option value="saquarema">Saquarema</option>
							<option value="rio-bonito">Rio Bonito</option>
							<option value="casimiro-de-abreu">Casimiro de Abreu</option>
						</select>
						<div class="text-center" id="incidencia" v-if="cidade">
							Incidência Solar ALTA - 4.22 KwH/m²<br/>
							<img class="img-responsive center-block" src="../assets/incidencia.png" alt="Força do Sol">
							<a href="valor.html">
                <button v-if="cidade" @click.prevent="avancar1()" class="botao-avanco" >Continuar</button>
                </a>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

<!-- valor da conta -->
	<div class="pagina-total center-block" v-if="formValConta == 'S'">
		<div class="container-fluid center-block valor">
			<div class="col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 principal-valor">
				<div class="paineis-valor center-block">
					<img class="img-responsive center-block" src="../assets/valor.png" alt="">
					<h1 class="text-center titulo-real">Qual o valor mensal da sua conta de luz?</h1>
					<h3 class="text-center sub-real">Faça uma média dos últimos 5 meses.</h3>
					<div class="text-center selecao-valor">
						<input v-model="valContaLuz" id="valor-conta" type="text" placeholder="R$ Apenas Números">
						<div class="text-center" id="valor-input" v-if="valContaLuz">
							<a href="consumo.html">
                <button v-if="valContaLuz" @click.prevent="avancar2()" class="botao-avanco">Continuar</button>
              </a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<!-- //Localização-->


<!-- Consumo -->
	<div class="pagina-total center-block" 	v-if="formConsumo == 'S'">
		<div class="container-fluid center-block consumo">
			<div class="col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 principal-consumo">
				<div class="paineis-consumo center-block">
					<img class="img-responsive center-block" src="../assets/conta.png" alt="">
					<h1 class="text-center titulo-real">Qual o seu consumo médio de kWh?</h1>
					<h3 class="text-center sub-real">Veja na sua conta de luz. Média dos últimos 5 meses.</h3>
					<div class="text-center selecao-consumo">
						<input v-model="valConsumo" id="consumo-conta" type="text" placeholder="kWh Apenas Números">
						<div class="text-center" id="consumo-input" v-if="valConsumo">
							<a href="aplicacao.html">
                <button v-if="valConsumo" @click.prevent="avancar3()" class="botao-avanco">Continuar</button>
                </a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<!-- // Consumo -->

<!-- Instalação -->
	<div class="pagina-total center-block" v-if="formLocalInstal == 'S'">
		<div class="container-fluid center-block aplicacao">
			<div class="col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 principal-aplicacao">

				<div class="paineis-aplicacao center-block">
					<h1 class="text-center titulo-real">Onde gostaria de instalar seu gerador?</h1>

					<div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="false">
					  <!-- Wrapper for slides -->
					  <div class="carousel-inner" role="listbox">
					    <div class="item active">
					      <img class="center-block" src="../assets/aplicacao_solo.png" alt="Solo">
					      <div class="carousel-caption titulo-aplicacao">
					        Solo
					      </div>
					    </div>
					    <div class="item">
					      <img class="center-block" src="../assets/aplicacao_colonial.png" alt="Telhado Colonial">
					      <div class="carousel-caption titulo-aplicacao">
					        Telhado Colonial
					      </div>
					    </div>
					    <div class="item">
					      <img class="center-block" src="../assets/aplicacao_metalico.png" alt="Telhado Metálico">
					      <div class="carousel-caption titulo-aplicacao">
					        Telhado Metálico
					      </div>
					    </div>
					    <div class="item">
					      <img class="center-block" src="../assets/aplicacao_laje.png" alt="Laje">
					      <div class="carousel-caption titulo-aplicacao">
					        Laje
					      </div>
					    </div>
					  </div>

					  <!-- Controls -->
					  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
					    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					    <span class="sr-only">Previous</span>
					  </a>
					  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
					    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
					    <span class="sr-only">Next</span>
					  </a>
					</div>

					<div class="text-center selecao-consumo">
						<div class="text-center">
							<a id="quero-saber" @click.prevent="calcular()" class="btn btn-lg btn-secondary botao-real">Calcular</a>
						</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<!-- // FIM da Instalação -->

</div>
</template>

<script>

export default {
  name: 'CalculadoraJr',
  data () {
    return {
      formInicial: 'S',
      formCidade: 'N',
      formConsumo: 'N',
      formValConta: 'N',
      formLocalInstal: 'N',
      estado: 'Rio de Janeiro',
      cidade: null,
      valContaLuz: null,
      valConsumo: null,
      localInstal: null,
      potencia_min: null,
      quant_placas: null,
      retorno_fin: null,
      economia: null,
      area_ocupada: null,
      peso_estrutura: null,
      valIndicendiaSolar: '4.2',
      valEficienciaPlaca: '0.83',
      valPotenciaPlaca: '365',
      valCustoPlaca: '1.700',
      anual: '12',
      economizaAno: null,
      economizaEmAnos: null,
      area_placa: '2.5',
      valAreaOcupada: null,
      pesoPlaca: '32.5',
      valPesoEstrutura: null,
      resultado: 'N'
    }
  },
  methods: {
    avancar () {
      this.formInicial = 'N'
      this.formCidade = 'S'
    },
    avancar1 () {
      this.formCidade = 'N'
      this.formValConta = 'S'
      this.formInicial = 'N'
    },
    avancar2 () {
      this.formValConta = 'N'
      this.formConsumo = 'S'
      this.formInicial = 'N'
    },
    avancar3 () {
      this.formConsumo = 'N'
      this.formLocalInstal = 'S'
      this.formInicial = 'N'
    },
    calcular () {
      this.formCidade = 'N'
      this.formConsumo = 'N'
      this.formValConta = 'N'
      this.formLocalInstal = 'N'
      this.formInicial = 'N'
      this.resultado = 'S'
      this.calculoPotenciaMinima()
    },
    reset () {
      this.formInicial = 'S'
      this.formCidade = 'N'
      this.formConsumo = 'N'
      this.formValConta = 'N'
      this.formLocalInstal = 'N'
      this.resultado = 'N'
      this.cidade = null
      this.valContaLuz = null
      this.valConsumo = null
      this.localInstal = null
    },
    calculoPotenciaMinima () {
      let $valor = ((this.valConsumo / 30) / (this.valIndicendiaSolar * this.valEficienciaPlaca))
      this.potencia_min = parseFloat($valor.toFixed(2))
      return this.potencia_min
    },
    calculoQuantPlacas () {
      let $valor = (this.potencia_min / (this.valPotenciaPlaca / 1000))
      this.quant_placas = parseFloat(Math.round($valor.toFixed(2)))
      return this.quant_placas
    },
    calculoRetornoInvest () {
      let $valor = ((this.valCustoPlaca * this.quant_placas) / this.anual)
      return parseFloat(Math.round($valor.toFixed(2)))
    },
    calculoEconomiaAno () {
      let $valor = this.valContaLuz * this.anual
      this.economizaAno = parseFloat(Math.round($valor.toFixed(2)))
      return this.economizaAno
    },
    calculoEconomiaEmAnos () {
      let $valor = this.economizaAno * 25
      this.economizaEmAnos = parseFloat(Math.round($valor.toFixed(2)))
      return this.economizaEmAnos
    },
    calculoAreaOcupada () {
      let $valor = this.quant_placas * this.area_placa
      this.valAreaOcupada = parseFloat(Math.round($valor.toFixed(2)))
      return this.valAreaOcupada
    },
    calculorPesoEstru () {
      let $valor = this.quant_placas * this.pesoPlaca
      this.valPesoEstrutura = parseFloat(Math.round($valor.toFixed(2)))
      return this.valPesoEstrutura
    }
  }
}
</script>

<style>

</style>
