/**
 * Module Dependencies
 */

import $ from 'jquery'

export function getShows(fn) {
  $.ajax('http://api.tvmaze.com/shows', {
    success: function (shows, textStatus, xhr) {
      $.get('/api/votes', function (votes) {


        shows =shows.map(function (show) {
          var  vote= votes.filter(function (vote) {
               vote.showId===show.id
          })
          show.count=vote[0].count
        })


      })






      fn(shows)
    }
  })
}

export function searchShows(busqueda, fn) {
  $.ajax('http://api.tvmaze.com/search/shows', {
    data: busqueda,
    success: function (res, textStatus, xhr) {
      fn(res)
    }
  })
}
