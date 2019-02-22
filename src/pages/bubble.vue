<template>
  <div v-if="bubble" class="bubble py-3">
    <b-row>
      <b-col col offset-lg="2" lg="8">
        <div class="body-container p-3">
          <h4 class="body-title mb-3">
            {{ bubble.title }}
          </h4>
          <p class="body-description">
            {{ bubble.description }}
          </p>
        </div>
      </b-col>
    </b-row>
    <b-row>  
      <b-col col offset-lg="2" lg="8">
        <div class="media-container">
          <app-carousel :items="mediaList" />
        </div>
        <div class="actions p-1 text-center">
          <b-button variant="success">Votar</b-button>
          <b-button variant="info">Donar</b-button>
          <b-button variant="danger">Denunciar</b-button>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col col offset-lg="2" lg="8">
        <div class="bubble-map-container mt-3 py-2">
          <google-map  
            name="dashboard"
            class="radius-12"
            :zoom="6"
            :markers="mapMarkers" />
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col col offset-lg="2" lg="8">
        <div class="comments-container">
          <h5 class="mb-4 mt-3 text-center">
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
              <b-form-group class="text-right">
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
          <div class="text-center">
            <b-button 
              v-if="!showCommentForm"
              @click="showCommentForm = !showCommentForm"
              variant="outline-primary">
              Comentar
            </b-button>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-if="relatedBubbles && relatedBubbles.length > 0" 
        col offset-lg="5" lg="7">
        <div class="bubble-list p-3">
          <h5 class="mb-4 text-center">
            Causas relacionadas
          </h5>
          <BubbleList :bubbles="relatedBubbles" />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import AppCarousel from '@/components/UI/AppCarousel';
import AppGoogleMap from '@/components/UI/AppGoogleMap';
import BubbleList from '@/components/BubbleList';

export default {
  components: {
    'app-carousel': AppCarousel,
    'google-map': AppGoogleMap,
    BubbleList
  },
  data () {
    return {
      mapMarkers: [
        {
          id: 1,
          lat: -27.7834,
          lng: -64.2642
        }
      ],
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
      // return this.$store.getters.bubbles
      return [];
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
  .bubble-map-container {
    height: 210px;
  }

  .carousel img {
    min-height: 360px;
  }
  .carousel img,
  .carousel .carousel-inner {
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
  }

  @media screen and (max-width: 450px) {
   .carousel img {
      min-height: 270px;
    } 
  }
</style>
