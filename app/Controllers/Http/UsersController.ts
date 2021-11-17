import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {
  public static async index() {
    return await User.all()
  }

  public static async getOne({request}:HttpContextContract){
    const { id } = request.params()

    return await User.find(id);
  }

  public static async delete({ request, response }: HttpContextContract) {
    const { id } = request.params()
    const user = await User.findOrFail(id)
    await user.delete()
    response.status(204).send({})
  }

  public static async update({ request }: HttpContextContract) {
    const { id } = request.params()
    const data = request.body();
    const user = await User.findOrFail(id)

    Object.assign(user, data)

    await user.save();

  }

  public static async create({ request }: HttpContextContract) {
    const data = request.only(['username', 'password'])
    const newUser = await User.create(data)
    return newUser
  }
}
