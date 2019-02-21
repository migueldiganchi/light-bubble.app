<template>
  <div v-if="bubble" class="bubble m-5">
    <b-row>
      <b-col col lg="5">
        <div class="body-container p-3">
          <h3 class="body-title mb-3">
            {{ bubble.title }}
          </h3>
          <p class="body-description">
            {{ bubble.description }}
          </p>
          <div class="actions p-2">
              <b-button variant="success">Votar</b-button>
              <b-button variant="danger">Denunciar</b-button>
              <b-button variant="info">Enviar mensaje</b-button>
          </div>
        </div>
      </b-col>
      <b-col col lg="7">
        <div class="media-container">
          <app-carousel :items="mediaList" />
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col col lg="7">
        <div class="bubble-list p-3">
          <h5 class="mb-4 text-center">
            Causas relacionadas
          </h5>
          <BubbleList :bubbles="relatedBubbles" />
        </div>
      </b-col>
      <b-col col lg="5">
        <div class="comments-container p-3">
          <h5 class="mb-4 text-center">
            Comentarios
          </h5>
          <div class="comment-list">
            <b-card-body 
              v-for="comment in comments"
              :key="comment.id"
              class="comment-card radius-12 mb-3">
              <label class="mb-2">{{ comment.username }}</label>
              <p>
                {{ comment.comment }}
              </p>
            </b-card-body>
          </div>
          <div v-if="showCommentForm" class="pt-3">
            <b-form @submit.prevent="addComment">
              <b-form-group class="mb-3">
                <b-form-input 
                  v-model="newComment.username" 
                  type="text" 
                  placeholder="Ingresa tu nombre" />
              </b-form-group>
              <b-form-group>
                <b-form-textarea
                  v-model="newComment.comment"
                  placeholder="Por favor ingresa un comentario"
                  rows="2"
                  max-rows="6" />
              </b-form-group>
              <b-form-group>
                <b-button 
                  type="button"
                  @click="showCommentForm = !showCommentForm">
                  Cancelar
                </b-button>
                <b-button 
                  type="submit"
                  variant="primary">
                  Agregar comentario
                </b-button>
              </b-form-group>
            </b-form>
          </div>
          <b-button 
            v-if="!showCommentForm"
            @click="showCommentForm = !showCommentForm"
            variant="outline-primary">
            Comentar
          </b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import AppCarousel from '@/components/UI/AppCarousel';
import BubbleList from '@/components/BubbleList';

export default {
  components: {
    'app-carousel': AppCarousel,
    BubbleList
  },
  data () {
    return {
      currentUser: {
        id: 1,
        username: 'migueldiganchi',
        name: 'Miguel Diganchi',
        addresses: [],
        email: 'migueldiganchi@gmail.com',
        phones: [],
        causes: []
      },
      showCommentForm: false,
      newComment: {
        id: null,
        username: null,
        comment: null
      },
      mediaList: [{
        id: 1,
        title: 'Some title in the image',
        media_url: "https://picsum.photos/1024/480/?image=10"
      }, {
        id: 2,
        title: 'Some other title in the image',
        media_url: "https://picsum.photos/1024/480/?image=12"
      }, {
        id: 3,
        title: 'Some third in the image',
        media_url: "https://picsum.photos/1024/480/?image=22"
      }, {
        id: 4,
        title: 'Some other img title',
        media_url: "https://picsum.photos/1024/480/?image=23"
      }],
      comments: [
        {
          id: 1,
          username: 'Miguel Diganchi',
          comment: 'Some text with some description'
        },
        {
          id: 2,
          username: 'Diego Diganchi',
          comment: 'Some text with some description of Diego Diganchi'
        },
        {
          id: 3,
          username: 'Muya Diganchi',
          comment: 'Some text with some description of muya diganchi'
        }
      ]
    };
  },
  computed: {
    bubble () {
      return this.$store.getters.bubble
    },
    relatedBubbles () {
      return this.$store.getters.bubbles
    }
  },
  methods: {
    addComment() {
      this.newComment.id = 99;
      this.comments.push(this.newComment);
      this.showCommentForm = false;
      this.startComment();
      return false;
    },
    startComment() {
      this.newComment = {
        id: null,
        username: this.currentUser.name,
        comment: null
      }
    }
  },
  created () {
    let bubbleId = this.$route.params.id
    this.$store.dispatch('getBubble', bubbleId)
    this.$store.dispatch('loadBubbles');
    this.startComment();
  }
}
</script>

<style>
  .media-container {
    margin-bottom: 21px;
  }
  .body-container {
    height: 100%;
  }
  .body-container-item {
    vertical-align: middle;
    justify-content: center;
    vertical-align: middle;
  }
  .btn {
    margin: auto 3px;
  }
  .comment-card {
    padding: 21px !important;
    border: solid 1px #c9c9c9;
    background-color: #f9f9f9;
  }

  .comment-card * {
    color: #333 !important;
    text-shadow: 1px 1px 1px #c9c9c9 !important;
  }
</style>
