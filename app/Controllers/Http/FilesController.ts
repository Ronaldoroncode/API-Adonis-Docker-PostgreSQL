import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import File from 'App/Models/File'
import { StoreValidator, UpdateValidator} from 'App/Validators/File'

export default class FilesController {
  public async index({}: HttpContextContract) {
    const files = await File.all()

    return files
  } 

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const file = await File.create(data)

    return file
  }

  public async show({ params }: HttpContextContract) {
    const file = await File.findOrFail(params.id)

    return file
  }

  public async update({ request, params }: HttpContextContract) {
    const file = await File.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)

    file.merge(data)
    await file.save()

    return file
  }

  public async destroy({ params }: HttpContextContract) {
    const file = await File.findOrFail(params.id)

    await file.delete()
  }
}
