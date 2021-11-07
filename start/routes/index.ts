import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './files'

Route.get('/', async () => {
  return { hello: 'world' }
})

