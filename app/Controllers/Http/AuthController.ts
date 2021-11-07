import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController { 

  public async store({ request, auth }: HttpContextContract) {
    const { email, password } = request.all()

    const tocken = await auth.attempt(email, password, {
      expiresIn: '30 days',
    })

    return tocken
  }  

  public async destroy({ auth }: HttpContextContract) {
    await auth.logout()
  }
}
