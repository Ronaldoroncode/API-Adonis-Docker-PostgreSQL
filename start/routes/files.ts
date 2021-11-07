import Route from '@ioc:Adonis/Core/Route'

Route.resource('/files', 'FilesController')
  .apiOnly()
  .middleware({
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth']
  })