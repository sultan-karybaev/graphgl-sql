<template lang="pug">
  div.jade
    div.container container
      - for (let i = 1; i <= 9; i++) {
        div=`jader${i * i}`
      - }
    div
      h1 Ocean's Eleven
      ul
        li Comedy
        li Thriller
      p.
        Danny Ocean and his eleven accomplices plan to rob
        three Las Vegas casinos simultaneously.
    div(class="movie-card", id="oceans-11")
      h1(class="movie-title") Ocean's 11
      img.movie-poster(src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/oceans11.jpg")
      ul(class="genre-list")
        li Comedy
        li Thriller
    div.movie-card#oceans-12
      h1.movie-title Ocean's 11
      img.movie-poster(src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/oceans11.jpg")
      ul.genre-list
        li Comedy
        li Thriller
    - var droids = ["R2D2", "C3PO", "BB8"];
    div
      h1 Famous Droids from Star Wars
      for name in droids
        div.card
          h2= name
    - var profileName = "Danny Ocean";
    div(v-if="data")
      p Hi there, #{profileName}. How are you doing?
    - var movieList = [{title: "Ocean's Eleven",cast: ["Julia Roberts", "George Clooney", "Brad Pitt", "Andy Garcia"],genres: ["Comedy", "Thriller"],posterImage: "/img/oceans-eleven",imdbURL: "http://www.imdb.com/title/tt0240772/",rating: 9.2},{title: "Pirates of the Caribbean",cast: ["Johnny Depp", "Keira Knightley", "Orlando Bloom"],genres: ["Adventure", "Comedy"],posterImage: "/img/pirates-caribbean",imdbURL: "http://www.imdb.com/title/tt0325980/",rating: 9.7}];
    mixin movie-card(movie)
      div.movie-card
        h2.movie-title= movie.title
        img.movie-poster(src=movie.posterImage)
        h3 Cast
        ul.cast
        each actor in movie.cast
          li= actor
        div.rating
          if movie.rating > 5
            img(src="img/thumbs-up")
          else
            img(src="img/thumbs-down")
        ul.genre
          each genre in movie.genres
            li= genre
    for movie in movieList
      +movie-card(movie)
</template>

<script>
export default {
  data () {
    return {
      data: true,
      movieList: [
        {
          title: 'Ocean\'s Eleven',
          cast: ['Julia Roberts', 'George Clooney', 'Brad Pitt', 'Andy Garcia'],
          genres: ['Comedy', 'Thriller'],
          posterImage: '/img/oceans-eleven',
          imdbURL: 'http://www.imdb.com/title/tt0240772/',
          rating: 9.2
        },
        {
          title: 'Pirates of the Caribbean',
          cast: ['Johnny Depp', 'Keira Knightley', 'Orlando Bloom'],
          genres: ['Adventure', 'Comedy'],
          posterImage: '/img/pirates-caribbean',
          imdbURL: 'http://www.imdb.com/title/tt0325980/',
          rating: 9.7
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .jade{
    text-align: center;
  }
  .container{
    text-align: center;
    div{
      color: greenyellow;
    }
  }
  .movie-card{
    color: orange;
  }
</style>
