<template>
  <div class="container">

    <h1 class="text-center">Calculadora Solar</h1>

<br>

<div class="col-md-8 jumbotron" v-if="formCidade == 'S'">
  <h3>Qual a sua localização?</h3>
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Estado</label>
    <select  class="form-control">
      <option>Rio de Janeiro</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Cidade</label>
    <select  v-model="cidade" class="form-control" required>>
      <option>Selecione</option>
      <option> Araruama </option>
      <option> Armação de Búzios </option>
      <option> Arraial do Cabo </option>
      <option> Cabo Frio </option>
      <option> Rio das Ostras</option>
      <option> Macaé </option>
      <option> Saquarema </option>
      <option> Rio Bonito </option>
      <option> Casimiro de Abreu </option>
    </select>
  </div>

  <button type="button" v-if="cidade" @click.prevent="avancar1()" class="btn btn-primary">Proximo</button>
</form>
</div>

<div class="col-md-8 jumbotron" v-if="formValConta == 'S'">
  <form>

<div class="form-group">
<label for="exampleInputEmail1">Qual o valor mensal da sua conta de luz?</label>
  <div class="input-group col-md-3">
      <div class="input-group-addon">R$</div>
      <input type="text" class="form-control" v-model="valContaLuz">
    </div>
</div>
  <button type="submit" v-if="valContaLuz" @click.prevent="avancar2()" class="btn btn-primary">Proximo</button>
</form>
</div>

<div class="col-md-8 jumbotron" v-if="formConsumo == 'S'">
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Qual o seu consumo médio de kwH? Veja na sua conta de luz.</label>
    <input type="text" v-model="valConsumo" class="form-control" required>
  </div>

  <button type="submit" v-if="valConsumo" @click.prevent="avancar3()" class="btn btn-primary">Proximo</button>
</form>
</div>

<div class="col-md-8 jumbotron" v-if="formLocalInstal == 'S'">
  <form>
  <div class="form-group">
    <label for="exampleInputPassword1">Onde você gostaria de colocar seu gerador solar? </label>
    <select  v-model="localInstal" class="form-control" required>
      <option>Selecione</option>
      <option> Telhado Colonial </option>
      <option> Telhado Metálico </option>
      <option> Laje </option>
      <option> Solo</option>
    </select>
  </div>

  <button type="button" v-if="localInstal" @click.prevent="calcular()" class="btn btn-success">Proximo</button>
</form>
</div>

<div class="col-md-4">

    <h2>

        <span class="label label-primary"><strong>Estado: </strong> {{this.estado}}</span> <br>
        <span class="label label-primary"><strong>Cidade: </strong> {{this.cidade}}</span> <br>
        <span class="label label-primary"><strong>Valor da conta de luz:</strong> R$ {{this.valContaLuz}}</span> <br>
        <span class="label label-primary"><strong>Consumo: </strong> {{this.valConsumo}}</span> <br>
        <span class="label label-primary"><strong>Local instalação: </strong> {{this.localInstal}}</span><br>
        <span class="label label-primary"><strong>Valor incidência: </strong> {{this.valIndicendiaSolar}}</span> <br>
        <span class="label label-primary"><strong>Valor Eficiência da Placa: </strong> {{this.valEficienciaPlaca}}</span>
        <span class="label label-primary"><strong>Quantidade Placas: </strong> {{calculoQuantPlacas()}}</span> <br>

    </h2>
</div>

<div class="col-md-12">
    <button type="button" v-if="formCidade=='N'" @click.prevent="reset()" class="btn btn-danger">Calcular Novamente</button>
</div>

<div class="col-md-12" v-if="tbl_resultado == 'S'">
    <h3>Resultados</h3>
    <br>

    <table class="table">
    <thead>
        <tr>
            <th>Potência mínima painéis</th>
            <th>Retorno do investimento</th>
            <th>Economia</th>
            <th>Área mínima ocupada:</th>
            <th>Peso da estrutura</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> {{calculoPotenciaMinima()}} </td>
            <td> {{calculoRetornoInvest()}} ano </td>
            <td> R$ {{calculoEconomiaAno()}} por ano e  R$ {{calculoEconomiaEmAnos()}} em 20 anos </td>
            <td> {{calculoAreaOcupada()}} m² </td>
            <td> {{calculorPesoEstru()}} kg </td>
        </tr>

    </tbody>
</table>

</div>

  </div>
</template>

<script>

export default {
  name: 'Calculadora',
  data () {
    return {
      formCidade: 'S',
      formConsumo: 'N',
      formValConta: 'N',
      formLocalInstal: 'N',
      tbl_resultado: 'S',
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
      valPesoEstrutura: null

    }
  },
  methods: {
    avancar1 () {
      this.formCidade = 'N'
      this.formValConta = 'S'
    },
    avancar2 () {
      this.formValConta = 'N'
      this.formConsumo = 'S'
    },
    avancar3 () {
      this.formConsumo = 'N'
      this.formLocalInstal = 'S'
    },
    calcular () {
      this.formCidade = 'N'
      this.formConsumo = 'N'
      this.formValConta = 'N'
      this.formLocalInstal = 'N'
      this.tbl_resultado = 'S'
    },
    reset () {
      this.formCidade = 'S'
      this.formConsumo = 'N'
      this.formValConta = 'N'
      this.formLocalInstal = 'N'
      this.tbl_resultado = 'N'
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
