import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddUsernameAndPasswordColumns extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('name');
      table.string('username');
      table.string('password');
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
