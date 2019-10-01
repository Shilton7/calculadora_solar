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

  <button type="button" @click.prevent="avancar1()" class="btn btn-primary">Proximo</button>
</form>
</div>

<div class="col-md-8 jumbotron" v-if="formValConta == 'S'">
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Qual o valor mensal da sua conta de luz?</label>
    <input type="text" v-model="valContaLuz" class="form-control" required>
  </div>

  <button type="submit" @click.prevent="avancar2()" class="btn btn-primary">Proximo</button>
</form>
</div>

<div class="col-md-8 jumbotron" v-if="formConsumo == 'S'">
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Qual o seu consumo médio de kwH? Veja na sua conta de luz.</label>
    <input type="text" v-model="valConsumo" class="form-control" required>
  </div>

  <button type="submit" @click.prevent="avancar3()" class="btn btn-primary">Proximo</button>
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

  <button type="button" @click.prevent="calcular()" class="btn btn-success">Proximo</button>
</form>
</div>


<div class="col-md-4">
    <h3>Resultados</h3>
    <br>

    <span class="label label-primary"><strong>Estado: </strong> {{this.estado}}</span> <br>
    <span class="label label-primary"><strong>Cidade: </strong> {{this.cidade}}</span> <br>
    <span class="label label-primary"><strong>Valor da conta de luz:</strong> {{this.valContaLuz}}</span> <br>
    <span class="label label-primary"><strong>Consumo: </strong> {{this.valConsumo}}</span> <br>
    <span class="label label-primary"><strong>Local instalação: </strong> {{this.localInstal}}</span>


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
      estado: 'Rio de Janeiro',
      cidade: null,
      valContaLuz: null,
      valConsumo: null,
      localInstal: null
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
      this.formCidade = 'N',
      this.formConsumo = 'N',
      this.formValConta = 'N',
      this.formLocalInstal = 'N'

    }
  }
}
</script>

<style>

</style>
