<template lang="html">
  <div class="dashboard">
    <b-container class="sections-container">
      <b-row>
        <b-col col lg="6">
          <h4>Ideas en las que participo</h4>
          <b-card title="Title"
            footer-tag="footer">
            <em slot="footer">Footer Slot</em>
            <p class="card-text">Header and footers using slots.</p>
            <b-button href="#" size="sm" variant="primary">
              Participar
            </b-button>
            <b-button href="#" size="sm">
              No me gusta
            </b-button>
          </b-card>
          <b-card title="Title"
            footer-tag="footer">
            <em slot="footer">Footer Slot</em>
            <p class="card-text">Header and footers using slots.</p>
            <b-button href="#" size="sm" variant="primary">
              Participar
            </b-button>
            <b-button href="#" size="sm">
              No me gusta
            </b-button>
          </b-card>
        </b-col>
        <b-col col lg="6">
          <h4>Ideas creadas por mi</h4>
          <b-card title="Title"
            footer-tag="footer">
            <em slot="footer">Footer Slot</em>
            <p class="card-text">Header and footers using slots.</p>
            <b-button href="#" size="sm" variant="primary">
              Participar
            </b-button>
            <b-button href="#" size="sm">
              No me gusta
            </b-button>
          </b-card>
          <b-card title="Title"
            footer-tag="footer">
            <em slot="footer">Footer Slot</em>
            <p class="card-text">Header and footers using slots.</p>
            <b-button href="#" size="sm" variant="primary">
              Participar
            </b-button>
            <b-button href="#" size="sm">
              No me gusta
            </b-button>
          </b-card>
          <b-card title="Title"
            footer-tag="footer">
            <em slot="footer">Footer Slot</em>
            <p class="card-text">Header and footers using slots.</p>
            <b-button href="#" size="sm" variant="primary">
              Participar
            </b-button>
            <b-button href="#" size="sm">
              No me gusta
            </b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Form from '@/components/Form'

export default {
  components: {
    Form
  }
}
</script>

<style>
.dashboard .card {
  margin-bottom: 21px
}

</style>
