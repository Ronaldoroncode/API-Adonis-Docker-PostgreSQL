import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}
    
  public schema = schema.create({
    filename: schema.string({ trim: true}, [rules.unique({ table: 'files', column: 'filename'})]),

    path: schema.string({ trim: true}),

    used: schema.boolean.optional(),

    status: schema.boolean.optional()

  })

  
  public messages = {}
}
